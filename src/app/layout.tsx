import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import "./globals.css";
import VisitorTracker from "../components/analytics/VisitorTracker";
import { getSiteUrl } from "../lib/site-url";
import Footer from "../components/layout/Footer";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Incinerator Metal | A Life Measured in Riffs", template: "%s | Incinerator Metal" },
  description: "The personal metal archive of Incinerator, also known as Inci. Festivals, concerts, bands seen live, vinyl, and memories from a life shaped by metal.",
  applicationName: "Incinerator Metal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Incinerator Metal",
    title: "Incinerator Metal | A Life Measured in Riffs",
    description: "A Lebanese metalhead's personal archive of festivals, concerts, bands seen live, vinyl, and memories.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Incinerator Metal | A Life Measured in Riffs",
    description: "Festivals, concerts, bands seen live, vinyl, and memories from a life shaped by metal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}>
          {/* <VisitorTracker /> */}
           <Footer />
        </Suspense>
      </body>
    </html>
  );
}