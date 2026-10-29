import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "bands.json")

// Ensure data directory and file exist
async function ensureDataFile() {
  try {
    const dataDir = path.join(process.cwd(), "data")
    await fs.mkdir(dataDir, { recursive: true })

    // Check if file exists, if not create it with empty array
    try {
      await fs.access(filePath)
    } catch {
      await fs.writeFile(filePath, JSON.stringify([], null, 2), "utf-8")
    }
  } catch (error) {
    console.error("Error ensuring data file:", error)
  }
}

export async function GET() {
  try {
    await ensureDataFile()
    const data = await fs.readFile(filePath, "utf-8")
    return NextResponse.json(JSON.parse(data))
  } catch (err) {
    console.error("GET /api/bands error:", err)
    return NextResponse.json({ error: "Failed to load bands" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataFile()
    const body = await request.json()
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8")
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("POST /api/bands error:", err)
    return NextResponse.json({ error: "Failed to save bands" }, { status: 500 })
  }
}
