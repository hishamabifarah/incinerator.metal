import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://hishamabifarah.com/"

  // Ensure XML-safe encoding for all dynamic values
  const encodeXML = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${encodeXML(baseUrl)}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${encodeXML(`${baseUrl}projects`)}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${encodeXML(`${baseUrl}projects/vinylovers`)}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${encodeXML(`${baseUrl}projects/portfolio`)}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${encodeXML(`${baseUrl}projects/historycards`)}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>0.9</priority>
    </url>
  </urlset>`
  
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  })
}