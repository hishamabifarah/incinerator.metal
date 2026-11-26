export function getSiteUrl() {
  // const configured = process.env.NEXT_PUBLIC_SITE_URL || "https://incineratormetal.com";
  const configured = process.env.NEXT_PUBLIC_SITE_URL || "https://incineratormetal-src.vercel.app";
  return configured.replace(/\/$/, "");
}
