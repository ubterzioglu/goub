create extension if not exists "pgcrypto";
create extension if not exists "vector";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  locale text default 'en',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  plan text not null default 'starter',
  data_region text not null default 'eu',
  retention_days integer not null default 90,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.organization_members (
  org_id uuid not null references public.organizations (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  role text not null check (role in ('owner', 'admin', 'editor', 'reviewer', 'viewer')),
  status text not null default 'active',
  joined_at timestamptz not null default timezone('utc', now()),
  primary key (org_id, user_id)
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  slug text not null,
  name text not null,
  visibility text not null default 'private',
  created_by uuid references public.profiles (id),
  created_at timestamptz not null default timezone('utc', now()),
  unique (org_id, slug)
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  role text not null check (role in ('owner', 'admin', 'editor', 'reviewer', 'viewer')),
  primary key (workspace_id, user_id)
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  title text not null,
  source_filename text not null,
  mime_type text not null,
  storage_path text not null,
  status text not null default 'queued',
  uploaded_by uuid references public.profiles (id),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.document_versions (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.documents (id) on delete cascade,
  version_no integer not null,
  parse_status text not null default 'queued',
  page_count integer,
  language text,
  checksum text,
  created_at timestamptz not null default timezone('utc', now()),
  unique (document_id, version_no)
);

create table if not exists public.document_chunks (
  id uuid primary key default gen_random_uuid(),
  version_id uuid not null references public.document_versions (id) on delete cascade,
  page_no integer not null default 1,
  chunk_index integer not null,
  text text not null,
  tsv tsvector,
  embedding vector(1536),
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.document_tables (
  id uuid primary key default gen_random_uuid(),
  version_id uuid not null references public.document_versions (id) on delete cascade,
  page_no integer not null default 1,
  table_index integer not null default 0,
  title text,
  headers jsonb not null default '[]'::jsonb,
  rows_json jsonb not null default '[]'::jsonb,
  csv_path text,
  confidence numeric(5, 2)
);

create table if not exists public.document_entities (
  id uuid primary key default gen_random_uuid(),
  version_id uuid not null references public.document_versions (id) on delete cascade,
  entity_type text not null,
  label text not null,
  value_json jsonb not null default '{}'::jsonb,
  confidence numeric(5, 2)
);

create table if not exists public.compare_jobs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  created_by uuid references public.profiles (id),
  status text not null default 'queued',
  mode text not null default 'supplier_quote_v1',
  summary_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.compare_job_documents (
  compare_job_id uuid not null references public.compare_jobs (id) on delete cascade,
  document_version_id uuid not null references public.document_versions (id) on delete cascade,
  role text not null default 'candidate',
  primary key (compare_job_id, document_version_id)
);

create table if not exists public.compare_items (
  id uuid primary key default gen_random_uuid(),
  compare_job_id uuid not null references public.compare_jobs (id) on delete cascade,
  canonical_key text not null,
  label text not null,
  values_json jsonb not null default '{}'::jsonb,
  difference_type text not null,
  severity text not null
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  source_type text not null,
  source_id uuid,
  title text not null,
  description text,
  owner_user_id uuid references public.profiles (id),
  due_date date,
  status text not null default 'open',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.exports (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  source_type text not null,
  source_id uuid,
  format text not null,
  status text not null default 'processing',
  storage_path text,
  created_by uuid references public.profiles (id),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.ai_runs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  workspace_id uuid references public.workspaces (id) on delete cascade,
  document_id uuid references public.documents (id) on delete set null,
  run_type text not null,
  model text not null,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  cached_input_tokens integer not null default 0,
  latency_ms integer,
  status text not null default 'queued',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations (id) on delete cascade,
  actor_user_id uuid references public.profiles (id),
  event_type text not null,
  target_type text not null,
  target_id uuid,
  payload_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists documents_org_workspace_idx on public.documents (org_id, workspace_id);
create index if not exists documents_status_idx on public.documents (status);
create index if not exists document_versions_status_idx on public.document_versions (parse_status);
create index if not exists document_chunks_version_page_idx on public.document_chunks (version_id, page_no);
create index if not exists document_chunks_tsv_idx on public.document_chunks using gin (tsv);
create index if not exists document_chunks_embedding_idx on public.document_chunks using hnsw (embedding vector_cosine_ops);
create index if not exists document_entities_version_type_idx on public.document_entities (version_id, entity_type);
create index if not exists compare_jobs_org_status_idx on public.compare_jobs (org_id, status);
create index if not exists compare_items_job_diff_idx on public.compare_items (compare_job_id, difference_type);
create index if not exists tasks_org_status_idx on public.tasks (org_id, status);
create index if not exists exports_org_status_idx on public.exports (org_id, status);
create index if not exists ai_runs_org_run_type_idx on public.ai_runs (org_id, run_type);
create index if not exists audit_logs_org_created_idx on public.audit_logs (org_id, created_at desc);

alter table public.organizations enable row level security;
alter table public.workspaces enable row level security;
alter table public.documents enable row level security;
alter table public.document_versions enable row level security;
alter table public.document_chunks enable row level security;
alter table public.compare_jobs enable row level security;
alter table public.compare_items enable row level security;
alter table public.tasks enable row level security;
alter table public.exports enable row level security;
alter table public.ai_runs enable row level security;
alter table public.audit_logs enable row level security;

create policy "org members can read organizations"
on public.organizations
for select
to authenticated
using (
  exists (
    select 1
    from public.organization_members members
    where members.org_id = organizations.id
      and members.user_id = auth.uid()
      and members.status = 'active'
  )
);

create policy "workspace docs readable by workspace members"
on public.documents
for select
to authenticated
using (
  exists (
    select 1
    from public.workspace_members members
    where members.workspace_id = documents.workspace_id
      and members.user_id = auth.uid()
  )
);

create policy "editors can insert documents"
on public.documents
for insert
to authenticated
with check (
  exists (
    select 1
    from public.workspace_members members
    where members.workspace_id = documents.workspace_id
      and members.user_id = auth.uid()
      and members.role in ('owner', 'admin', 'editor')
  )
);
