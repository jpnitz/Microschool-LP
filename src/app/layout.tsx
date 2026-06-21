import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "MicroSchool | Home-first weekly lesson planner",
  description:
    "A standards-aligned lesson planner for home educators and microschools that turns child profiles and progress into weekly plans.",
  openGraph: {
    title: "MicroSchool",
    description:
      "Home-first, standards-aligned weekly planning for microschools and home educators.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
