import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Metadata } from "next";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
