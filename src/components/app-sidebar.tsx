import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { NavSecondary } from "./nav-secondary";
import { NavMain } from "./nav-main";
import data from "../data/data.json";

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader />
      <SidebarContent >
        <NavMain />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
