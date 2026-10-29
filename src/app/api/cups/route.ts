import { readdirSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parsedLimit = Number.parseInt(searchParams.get("limit") || "12", 10);
    const parsedOffset = Number.parseInt(searchParams.get("offset") || "0", 10);
    const limit = Number.isFinite(parsedLimit) ? Math.min(Math.max(parsedLimit, 0), 10000) : 12;
    const offset = Number.isFinite(parsedOffset) ? Math.max(parsedOffset, 0) : 0;

    const cupsDir = join(process.cwd(), "public", "images", "cups");
    const files = readdirSync(cupsDir).filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

    const cups = files
      .map((filename) => {
        // Expected format: festival-name-image-N.ext or festival-image-N.ext
        const match = filename.match(/^(.+?)-image-(\d+)\.(jpg|jpeg|png|webp)$/i);
        if (!match) return null;
        return {
          filename,
          festivalKey: match[1],
          number: Number.parseInt(match[2], 10),
        };
      })
      .filter((cup): cup is { filename: string; festivalKey: string; number: number } => cup !== null)
      .sort((a, b) => a.festivalKey.localeCompare(b.festivalKey) || a.number - b.number);

    return NextResponse.json({
      data: cups.slice(offset, offset + limit),
      total: cups.length,
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error reading cups directory:", error);
    return NextResponse.json(
      { data: [], total: 0, limit: 0, offset: 0, error: "Could not read the cups directory." },
      { status: 500 },
    );
  }
}
