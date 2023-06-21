import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import  Providers  from "@/components/Providers";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import  SideBar  from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://www.garriagus.duckdns.org"),
  title: {
    default: "garriagus Blog",
    template: `%s | garriagus blog`,
  },
  description: "This is the description of my blog",
  verification: {
    google: "google-site-verification=878787878",
  },
};
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
      <Providers>
            <NavBar />
            {children}
            <Footer />
        </Providers>        
      </body>
    </html>
  );
}
