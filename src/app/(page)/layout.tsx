import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <NavBar />
            {children}
            <Footer />
        </Providers>        
      </body>
    </html>
  );
}
