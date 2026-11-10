"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function VisitorTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) return;
    void fetch("/api/analytics", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pathname }), keepalive: true }).catch(() => undefined);
  }, [pathname]);
  return null;
}
