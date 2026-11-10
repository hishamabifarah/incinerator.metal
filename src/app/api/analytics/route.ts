import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../lib/db";

// export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const pathname = typeof body.pathname === "string" ? body.pathname.slice(0, 500) : "";
    if (!pathname.startsWith("/") || pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return NextResponse.json({ success: true, skipped: "path" });
    }

    const countryHeader = request.headers.get("x-vercel-ip-country") || "";
    const countryCode = /^[A-Z]{2}$/.test(countryHeader) ? countryHeader : null;
    const ua = request.headers.get("user-agent") || "";
    if (/bot|crawler|spider|preview|headless/i.test(ua)) return NextResponse.json({ success: true, skipped: "bot-user-agent" });
    const deviceType = /tablet|ipad/i.test(ua) ? "tablet" : /mobile|android|iphone/i.test(ua) ? "mobile" : "desktop";
    const referrer = request.headers.get("referer");
    let referrerHost: string | null = null;
    if (referrer) {
      try { referrerHost = new URL(referrer).hostname.slice(0, 255); } catch { referrerHost = null; }
    }
    await getDb()`INSERT INTO page_views (country_code, pathname, referrer, device_type) VALUES (${countryCode}, ${pathname}, ${referrerHost}, ${deviceType})`;
    return NextResponse.json({ success: true, stored: true });
  } catch (error) {
    console.error("Analytics event could not be stored:", error);
    const detail = process.env.NODE_ENV !== "production" && error instanceof Error ? error.message : undefined;
    return NextResponse.json({ success: false, detail }, { status: 503 });
  }
}