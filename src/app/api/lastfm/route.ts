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

type LastFmRawAlbum = {
  name?: string;
  artist?: { name?: string; "#text"?: string } | string;
  image?: LastFmImage[];
  url?: string;
  playcount?: string;
};

function textValue(value: { "#text"?: string } | string | undefined) {
  return typeof value === "string" ? value : value?.["#text"] ?? "";
}

function imageUrl(images: LastFmImage[] = []) {
  return (
    images.find((item) => item.size === "extralarge")?.["#text"] ||
    images.find((item) => item.size === "large")?.["#text"] ||
    images[images.length - 1]?.["#text"] ||
    null
  );
}

function normalizeTrack(track: LastFmRawTrack) {
  return {
    name: track.name ?? "Unknown track",
    artist: textValue(track.artist),
    album: textValue(track.album),
    image: imageUrl(track.image),
    url: track.url ?? "https://www.last.fm/user/incinerator",
    playedAt: track.date?.uts ?? null,
    nowPlaying: track["@attr"]?.nowplaying === "true",
  };
}

function normalizeAlbum(album: LastFmRawAlbum) {
  const artist =
    typeof album.artist === "string"
      ? album.artist
      : album.artist?.name ??
        album.artist?.["#text"] ??
        "Unknown artist";

  return {
    name: album.name ?? "Unknown album",
    artist,
    image: imageUrl(album.image),
    url: album.url ?? "https://www.last.fm/user/incinerator",
    playcount: Number(album.playcount ?? 0),
  };
}

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = "incinerator";

  if (!apiKey) {
    return NextResponse.json({
      configured: false,
      username,
      nowPlaying: null,
      topAlbums: [],
    });
  }

  const common = {
    user: username,
    api_key: apiKey,
    format: "json",
  };

  const recentParams = new URLSearchParams({
    ...common,
    method: "user.getrecenttracks",
    limit: "1",
  });

  const albumParams = new URLSearchParams({
    ...common,
    method: "user.gettopalbums",
    period: "7day",
    limit: "4",
  });

  try {
    const [recentResponse, albumsResponse] = await Promise.all([
      fetch(
        `https://ws.audioscrobbler.com/2.0/?${recentParams.toString()}`,
        { next: { revalidate: 60 } }
      ),
      fetch(
        `https://ws.audioscrobbler.com/2.0/?${albumParams.toString()}`,
        { next: { revalidate: 60 } }
      ),
    ]);

    if (!recentResponse.ok || !albumsResponse.ok) {
      return NextResponse.json(
        { error: "Last.fm is unavailable" },
        { status: 502 }
      );
    }

    const [recentPayload, albumsPayload] = await Promise.all([
      recentResponse.json(),
      albumsResponse.json(),
    ]);

    if (recentPayload.error || albumsPayload.error) {
      return NextResponse.json(
        { error: "Last.fm rejected the API request" },
        { status: 502 }
      );
    }

    const rawTracks = recentPayload.recenttracks?.track;

    const tracks: LastFmRawTrack[] = Array.isArray(rawTracks)
      ? rawTracks
      : rawTracks
        ? [rawTracks]
        : [];

    const nowPlaying =
      tracks.map(normalizeTrack).find((track) => track.nowPlaying) ?? null;

    const rawAlbums = albumsPayload.topalbums?.album;

    const albums: LastFmRawAlbum[] = Array.isArray(rawAlbums)
      ? rawAlbums
      : rawAlbums
        ? [rawAlbums]
        : [];

    return NextResponse.json({
      configured: true,
      username,
      nowPlaying,
      topAlbums: albums.slice(0, 4).map(normalizeAlbum),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach Last.fm" },
      { status: 502 }
    );
  }
}