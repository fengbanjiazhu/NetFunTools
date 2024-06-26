import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "./components/SiteFooter";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">
            <Outlet />
          </div>
          <SiteFooter />
          <Toaster />
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  );
}
