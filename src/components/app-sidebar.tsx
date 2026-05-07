import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Image as ImageIcon, Palette, Sparkles, Store, Type, Hexagon, Home } from "lucide-react";
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

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Brand background", url: "/brand", icon: BookOpen },
  { title: "Logo", url: "/logo", icon: Hexagon },
  { title: "Colors", url: "/colors", icon: Palette },
  { title: "Typography", url: "/typography", icon: Type },
  { title: "Imagery", url: "/imagery", icon: ImageIcon },
  { title: "Brand elements", url: "/elements", icon: Sparkles },
  { title: "Point of sale", url: "/pos", icon: Store },
];

export function AppSidebar() {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-4 py-5">
        <Link to="/" className="block">
          <div className="font-display text-xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Bo &amp; Ide
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Design Manual</div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
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
      </SidebarContent>
    </Sidebar>
  );
}
