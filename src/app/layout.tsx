import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { Outfit } from "next/font/google";
import "@/app/globals.css";


const outfit = Outfit({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <SidebarProvider>
          <AppSidebar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
