import {
  BookOpenText,
  FolderKanban,
  Gauge,
  House,
  Scale,
  SendToBack,
  Settings,
  SquareKanban
} from "lucide-react";

export const appNavigation = [
  { href: "/workspace/atlas-procurement", label: "Home", icon: House },
  { href: "/documents", label: "Documents", icon: FolderKanban },
  { href: "/compare/cmp_atlas_q3", label: "Compare", icon: Scale },
  { href: "/tasks", label: "Tasks", icon: SquareKanban },
  { href: "/exports", label: "Exports", icon: SendToBack },
  { href: "/usage", label: "Usage", icon: Gauge },
  { href: "/docs", label: "Docs", icon: BookOpenText },
  { href: "/settings", label: "Settings", icon: Settings }
] as const;

export const documentActions = [
  "Sor",
  "Ozetle",
  "Karsilastir",
  "Tablo Cikar",
  "Risk Tara",
  "Gorev Uret",
  "Disa Aktar"
] as const;

export const marketingNavigation = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/login", label: "Giris" }
] as const;
