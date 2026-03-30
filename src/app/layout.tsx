import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { Lexend } from "next/font/google";
import "@/app/globals.css";

const outfit = Lexend({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="m-2 w-full">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
