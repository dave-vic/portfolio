import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/libre-caslon-text/400.css";
import "@fontsource/libre-caslon-text/400-italic.css";
import "@fontsource/doto/900.css";
import "./globals.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Davida Dzato · Product designer",
  description:
    "Product designer for complex products with many kinds of users. Based in Accra, open to remote roles worldwide.",
  openGraph: {
    title: "Davida Dzato · Product designer",
    description: "Product designer for complex products with many kinds of users.",
    images: ["/home/hero-photo.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#eeebe4" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
