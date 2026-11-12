import { NextResponse } from "next/server";

type LastFmImage = { "#text"?: string; size?: string };
type LastFmRawTrack = {
  name?: string;
  artist?: { "#text"?: string } | string;
  album?: { "#text"?: string } | string;
  image?: LastFmImage[];
  url?: string;
  date?: { uts?: string; "#text"?: string };
  "@attr"?: { nowplaying?: string };
};

function textValue(value: { "#text"?: string } | string | undefined) {
  return typeof value === "string" ? value : value?.["#text"] ?? "";
}

function normalizeTrack(track: LastFmRawTrack) {
  const images = track.image ?? [];
  const image = images.find((item) => item.size === "extralarge")?.["#text"]
    || images.find((item) => item.size === "large")?.["#text"]
    || images[images.length - 1]?.["#text"]
    || null;

  return {
    name: track.name ?? "Unknown track",
    artist: textValue(track.artist),
    album: textValue(track.album),
    image: image || null,
    url: track.url ?? "https://www.last.fm/user/incinerator",
    playedAt: track.date?.uts ?? null,
    nowPlaying: track["@attr"]?.nowplaying === "true",
  };
}

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = "incinerator";

  if (!apiKey) {
    return NextResponse.json({ configured: false, username, nowPlaying: null, recentTracks: [] });
  }

  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: username,
    api_key: apiKey,
    format: "json",
    limit: "6",
  });

  try {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Last.fm is unavailable" }, { status: 502 });
    }

    const payload = await response.json();
    if (payload.error) {
      return NextResponse.json({ error: "Last.fm rejected the API request" }, { status: 502 });
    }

    const rawTracks = payload.recenttracks?.track;
    const tracks: LastFmRawTrack[] = Array.isArray(rawTracks)
      ? rawTracks
      : rawTracks ? [rawTracks] : [];
    const normalized = tracks.map(normalizeTrack);
    const nowPlaying = normalized.find((track) => track.nowPlaying) ?? null;
    const recentTracks = normalized.filter((track) => !track.nowPlaying);

    return NextResponse.json({ configured: true, username, nowPlaying, recentTracks });
  } catch {
    return NextResponse.json({ error: "Unable to reach Last.fm" }, { status: 502 });
  }
}
