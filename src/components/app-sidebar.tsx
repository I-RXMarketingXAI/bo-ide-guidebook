import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen, Image as ImageIcon, Palette, Sparkles, Store, Type, Hexagon, Home,
  MessageSquare, Braces, Heart, Wrench, Tag, Award, Baby, LayoutTemplate,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const groups = [
  {
    label: "Start",
    items: [{ title: "Forside", url: "/", icon: Home }],
  },
  {
    label: "Strategi",
    items: [
      { title: "Brand", url: "/brand", icon: BookOpen },
      { title: "Tone of Voice", url: "/tone", icon: MessageSquare },
    ],
  },
  {
    label: "Visuel identitet",
    items: [
      { title: "Logo", url: "/logo", icon: Hexagon },
      { title: "Klammer", url: "/klammer", icon: Braces },
      { title: "Farver", url: "/colors", icon: Palette },
      { title: "Typografi", url: "/typography", icon: Type },
      { title: "Billedstil", url: "/imagery", icon: ImageIcon },
    ],
  },
  {
    label: "Systemer",
    items: [
      { title: "Kundeklub", url: "/kundeklub", icon: Heart },
      { title: "Services", url: "/services", icon: Wrench },
      { title: "Priskommunikation", url: "/pricing", icon: Tag },
      { title: "Koncepter", url: "/concepts", icon: Award },
    ],
  },
  {
    label: "Produktion",
    items: [
      { title: "POS & Materialer", url: "/pos", icon: Store },
      { title: "Børneunivers", url: "/children", icon: Baby },
      { title: "Kampagneskabelon", url: "/campaign", icon: LayoutTemplate },
      { title: "Brand elementer", url: "/elements", icon: Sparkles },
    ],
  },
] as const;

export function AppSidebar() {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-4 py-5">
        <Link to="/" className="block">
          <div className="font-display text-xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Bog &amp; idé
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Design Guide 2026
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            <SidebarGroupLabel>{g.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((item) => {
                  const active = item.url === "/" ? currentPath === "/" : currentPath.startsWith(item.url);
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild isActive={active}>
                        <Link to={item.url} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
