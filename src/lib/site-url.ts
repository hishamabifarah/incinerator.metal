export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || "https://incineratormetal.com";
  return configured.replace(/\/$/, "");
}
