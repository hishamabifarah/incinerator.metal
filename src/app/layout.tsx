
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
