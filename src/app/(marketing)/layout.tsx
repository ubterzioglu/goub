import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export default function MarketingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="marketing-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
