import { z } from "zod";

export const uploadInitRequestSchema = z.object({
  workspaceId: z.string().min(3),
  filename: z.string().min(3),
  mimeType: z.string().min(3),
  sizeBytes: z.number().int().positive()
});

export const uploadCompleteRequestSchema = z.object({
  documentId: z.string().min(3),
  storagePath: z.string().min(3),
  checksum: z.string().min(8)
});

export const askRequestSchema = z.object({
  workspaceId: z.string().min(3),
  documentIds: z.array(z.string().min(3)).min(1),
  question: z.string().min(10),
  mode: z.literal("grounded")
});

export const compareRequestSchema = z.object({
  workspaceId: z.string().min(3),
  documentVersionIds: z.array(z.string().min(3)).min(2),
  schema: z.string().min(3),
  outputFormat: z.enum(["table", "json"])
});

export const exportRequestSchema = z.object({
  workspaceId: z.string().min(3),
  sourceType: z.enum(["compare", "document", "tasks"]),
  sourceId: z.string().min(3),
  format: z.enum(["csv", "xlsx", "pdf", "json"])
});

export type UploadInitRequest = z.infer<typeof uploadInitRequestSchema>;
export type UploadCompleteRequest = z.infer<typeof uploadCompleteRequestSchema>;
export type AskRequest = z.infer<typeof askRequestSchema>;
export type CompareRequest = z.infer<typeof compareRequestSchema>;
export type ExportRequest = z.infer<typeof exportRequestSchema>;
