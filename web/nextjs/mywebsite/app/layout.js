'use client'
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className={'px-5'}/>
            <div className="p-5">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
