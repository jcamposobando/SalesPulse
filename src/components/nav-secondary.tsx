import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { LifeBuoy, Send } from "lucide-react";

export function NavSecondary(
  props: React.ComponentPropsWithoutRef<typeof SidebarGroup>,
) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuButton asChild size="sm">
            <a href="#">
              <LifeBuoy />
              <span>Support</span>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild size="sm">
            <a href="#">
              <Send />
              <span>Feedback</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
