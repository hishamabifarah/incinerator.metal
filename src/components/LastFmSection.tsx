"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Disc3, Headphones, Radio } from "lucide-react";

type LastFmTrack = {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  playedAt: string | null;
  nowPlaying: boolean;
};

type LastFmResponse = {
  configured: boolean;
  username: string;
  nowPlaying: LastFmTrack | null;
  recentTracks: LastFmTrack[];
};

const PROFILE_URL = "https://www.last.fm/user/incinerator";

export default function LastFmSection() {
  const [data, setData] = useState<LastFmResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadListeningData() {
      try {
        const response = await fetch("/api/lastfm", { cache: "no-store" });
        if (!response.ok) throw new Error("Last.fm request failed");
        const result = (await response.json()) as LastFmResponse;
        if (active) setData(result);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadListeningData();
    return () => { active = false; };
  }, []);

  const featured = data?.nowPlaying ?? data?.recentTracks[0] ?? null;
  const recent = data?.recentTracks.filter((track) => track !== featured).slice(0, 4) ?? [];

  return (
    <section className="lastfm-section page-wrap section-pad" aria-labelledby="lastfm-title">
      <div className="lastfm-heading">
        <div>
          <p className="eyebrow"><span className="lastfm-live-indicator" /> LAST.FM / LISTENING LOG</p>
          <h2 id="lastfm-title">The soundtrack<br /><span>never stops.</span></h2>
          <p className="lastfm-intro">Recent spins, current obsessions, and the sounds filling the hours between shows.</p>
        </div>
        <Link className="lastfm-profile-link" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
          VIEW LAST.FM PROFILE <ArrowUpRight size={15} />
        </Link>
      </div>

      {loading ? (
        <div className="lastfm-status" role="status"><span className="lastfm-spinner" /> TUNING INTO THE LATEST SCROBBLES...</div>
      ) : error ? (
        <div className="lastfm-status" role="status">Listening data is temporarily unavailable. <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">Visit Last.fm</a>.</div>
      ) : !data?.configured ? (
        <div className="lastfm-status">Add <code>LASTFM_API_KEY</code> to the server environment to connect the listening feed.</div>
      ) : !featured ? (
        <div className="lastfm-status">No recent listening activity found for @{data.username}.</div>
      ) : (
        <div className="lastfm-content">
          <article className="lastfm-featured">
            <div className="lastfm-featured-art">
              {featured.image ? <img src={featured.image} alt={`${featured.album || featured.name} album artwork`} /> : <div className="lastfm-art-placeholder"><Disc3 size={54} /></div>}
              <span className="lastfm-featured-label"><Radio size={13} /> {featured.nowPlaying ? "NOW PLAYING" : "LATEST SCROBBLE"}</span>
            </div>
            <div className="lastfm-featured-info">
              <p className="eyebrow">ON THE DECKS</p>
              <h3>{featured.name}</h3>
              <p className="lastfm-artist">{featured.artist}</p>
              {featured.album ? <p className="lastfm-album">{featured.album}</p> : null}
              <a className="lastfm-track-link" href={featured.url || PROFILE_URL} target="_blank" rel="noopener noreferrer">OPEN TRACK <ArrowUpRight size={14} /></a>
            </div>
          </article>

          <div className="lastfm-recent">
            <div className="lastfm-recent-heading"><span>RECENTLY PLAYED</span><span>01 / {String(recent.length).padStart(2, "0")}</span></div>
            {recent.length ? recent.map((track, index) => (
              <a className="lastfm-track" href={track.url || PROFILE_URL} target="_blank" rel="noopener noreferrer" key={`${track.name}-${track.artist}-${track.playedAt ?? index}`}>
                <span className="lastfm-track-index">{String(index + 1).padStart(2, "0")}</span>
                {track.image ? <img src={track.image} alt="" loading="lazy" /> : <span className="lastfm-track-placeholder"><Disc3 size={17} /></span>}
                <span className="lastfm-track-copy"><strong>{track.name}</strong><small>{track.artist}</small></span>
                <ArrowUpRight className="lastfm-track-arrow" size={15} />
              </a>
            )) : <p className="lastfm-empty">More listening history will appear here.</p>}
          </div>
        </div>
      )}

      <div className="lastfm-footer"><span><Headphones size={14} /> LIVE LISTENING DATA</span><span>LAST.FM USER / INCINERATOR</span></div>
    </section>
  );
}
