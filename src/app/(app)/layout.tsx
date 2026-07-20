import { AppSidebar } from "@/components/app/app-sidebar";

export default function ApplicationLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="app-shell">
      <AppSidebar />
      <main className="app-content">{children}</main>
    </div>
  );
}
