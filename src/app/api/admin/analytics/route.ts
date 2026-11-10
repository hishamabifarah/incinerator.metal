import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "../../../../lib/admin-auth";
import { getDb } from "../../../../lib/db";

// export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const rawRange = request.nextUrl.searchParams.get("range") || "30";
  const days = ["7", "30", "90"].includes(rawRange) ? Number(rawRange) : 30;

  try {
    const sql = getDb();
    const [totals, countries, pages, daily, referrers, devices, recent] = await Promise.all([
      sql`SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE)::int AS today FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day')`,
      sql`SELECT COALESCE(country_code, 'Unknown') AS country, COUNT(*)::int AS visits FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day') GROUP BY country_code ORDER BY visits DESC LIMIT 12`,
      sql`SELECT pathname, COUNT(*)::int AS visits FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day') GROUP BY pathname ORDER BY visits DESC LIMIT 10`,
      sql`SELECT TO_CHAR(day, 'YYYY-MM-DD') AS date, COALESCE(visits, 0)::int AS visits FROM generate_series(CURRENT_DATE - (${days - 1} * INTERVAL '1 day'), CURRENT_DATE, INTERVAL '1 day') AS days(day) LEFT JOIN (SELECT DATE(created_at) AS visit_day, COUNT(*) AS visits FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day') GROUP BY DATE(created_at)) v ON v.visit_day = DATE(day) ORDER BY day`,
      sql`SELECT COALESCE(referrer, 'Direct / unknown') AS referrer, COUNT(*)::int AS visits FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day') GROUP BY referrer ORDER BY visits DESC LIMIT 8`,
      sql`SELECT COALESCE(device_type, 'Unknown') AS device, COUNT(*)::int AS visits FROM page_views WHERE created_at >= NOW() - (${days} * INTERVAL '1 day') GROUP BY device_type ORDER BY visits DESC`,
      sql`SELECT pathname, COALESCE(country_code, 'Unknown') AS country, device_type, created_at FROM page_views ORDER BY created_at DESC LIMIT 20`,
    ]);
    return NextResponse.json({ range: days, totals: totals[0] || { total: 0, today: 0 }, countries, pages, daily, referrers, devices, recent });
  } catch (error) {
    console.error("Analytics dashboard query failed:", error);
    return NextResponse.json({ error: "Analytics database is not ready. Check DATABASE_URL and run the SQL setup." }, { status: 503 });
  }
}
