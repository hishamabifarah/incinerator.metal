import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import "./globals.css";
import VisitorTracker from "../components/analytics/VisitorTracker";

export const metadata: Metadata = {
  title: "INCINERATOR — A Life Measured in Riffs",
  description:
    "A personal metal archive documenting live shows, vinyl records, festivals, wristbands, memorabilia, and memories.",
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
          <VisitorTracker />
        </Suspense>
      </body>
    </html>
  );
}