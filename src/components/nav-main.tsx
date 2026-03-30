"use client";

import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Send } from "lucide-react";
import Link from "next/link";

export function NavMain(
  props: React.ComponentPropsWithoutRef<typeof SidebarGroup>,
) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuButton variant="default" asChild>
            <Link href="/sale">
              <Send /> New Sale
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/dashboard"> Dashboard</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/team"> Team</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/salesperson"> Salesperson</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
