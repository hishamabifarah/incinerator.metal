"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const dev = process.env.NODE_ENV !== "production";

export default function VisitorTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) return;
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pathname }),
      keepalive: true,
    })
      .then(async (res) => {
        if (dev) console.info("[analytics]", pathname, res.status, await res.text());
      })
      .catch((err) => {
        if (dev) console.warn("[analytics] request failed", err);
      });
  }, [pathname]);
  return null;
}