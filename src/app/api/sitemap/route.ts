import { NextResponse } from "next/server";
import { archiveItems, collections } from "../../../data/archive";
import { getSiteUrl } from "../../../lib/site-url";

export async function GET() {
  const base = getSiteUrl();
  const paths = ["/", "/about", "/archive/seen-live", ...collections.map((item) => `/archive/${item.slug}`), ...archiveItems.map((item) => `/archive/${item.collectionSlug}/${item.id}`)];
  const pages = [...new Set(paths)].map((path) => ({ path, url: `${base}${path}` }));
  return NextResponse.json({ site: base, total: pages.length, pages }, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
  });
}
