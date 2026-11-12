"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Disc3,
  Headphones,
  Radio,
} from "lucide-react";

type LastFmTrack = {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  playedAt: string | null;
  nowPlaying: boolean;
};

type LastFmAlbum = {
  name: string;
  artist: string;
  image: string | null;
  url: string;
  playcount: number;
};

type LastFmResponse = {
  configured: boolean;
  username: string;
  nowPlaying: LastFmTrack | null;
  topAlbums: LastFmAlbum[];
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
        const response = await fetch("/api/lastfm", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Last.fm request failed");
        }

        const result = (await response.json()) as LastFmResponse;

        if (active) setData(result);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadListeningData();

    return () => {
      active = false;
    };
  }, []);

  const featured = data?.nowPlaying ?? null;

  return (
    <section
      className="lastfm-section page-wrap section-pad"
      aria-labelledby="lastfm-title"
    >
      <div className="lastfm-heading">
        <div>
          <p className="eyebrow">
            <span className="lastfm-live-indicator" />
            LAST.FM / LISTENING LOG
          </p>

          <h2 id="lastfm-title">
            The soundtrack
            <br />
            <span>never stops.</span>
          </h2>

          <p className="lastfm-intro">
            The records getting the most spins, and what is playing right now.
          </p>
        </div>

        <Link
          className="lastfm-profile-link"
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW LAST.FM PROFILE <ArrowUpRight size={15} />
        </Link>
      </div>

      {loading ? (
        <div className="lastfm-status" role="status">
          <span className="lastfm-spinner" />
          TUNING INTO YOUR LISTENING DATA...
        </div>
      ) : error ? (
        <div className="lastfm-status" role="status">
          Listening data is temporarily unavailable.{" "}
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Last.fm
          </a>
          .
        </div>
      ) : !data?.configured ? (
        <div className="lastfm-status">
          Add <code>LASTFM_API_KEY</code> to the server environment
          to connect the listening feed.
        </div>
      ) : (
        <div className="lastfm-content">
          {/* Currently playing */}
          <article className="lastfm-featured">
            <div className="lastfm-featured-art">
              {featured?.image ? (
                <img
                  src={featured.image}
                  alt={`${featured.album || featured.name} album artwork`}
                />
              ) : (
                <div className="lastfm-art-placeholder">
                  <Disc3 size={54} />
                </div>
              )}

              <span className="lastfm-featured-label">
                <Radio size={13} />
                {featured ? "NOW PLAYING" : "ON THE DECKS"}
              </span>
            </div>

            <div className="lastfm-featured-info">
              <p className="eyebrow">CURRENTLY PLAYING</p>

              {featured ? (
                <>
                  <h3>{featured.name}</h3>

                  <p className="lastfm-artist">
                    {featured.artist}
                  </p>

                  {featured.album ? (
                    <p className="lastfm-album">
                      {featured.album}
                    </p>
                  ) : null}

                  <a
                    className="lastfm-track-link"
                    href={featured.url || PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OPEN TRACK <ArrowUpRight size={14} />
                  </a>
                </>
              ) : (
                <>
                  <h3>Between records.</h3>

                  <p className="lastfm-artist">
                    Nothing playing right now.
                  </p>

                  <p className="lastfm-album">
                    Check back when the next track starts.
                  </p>
                </>
              )}
            </div>
          </article>

          {/* Top albums - last 7 days */}
          <div className="lastfm-recent">
            <div className="lastfm-recent-heading">
              <span>TOP ALBUMS / LAST 7 DAYS</span>
                  <span>
                    {String(data.topAlbums.length).padStart(2, "0")} ALBUMS
                  </span>
            </div>

            {data.topAlbums.length ? (
              data.topAlbums.map((album, index) => (
                <a
                  className="lastfm-track"
                  href={album.url || PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${album.name}-${album.artist}`}
                >
                  <span className="lastfm-track-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {album.image ? (
                    <img
                      src={album.image}
                      alt={`${album.name} album artwork`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="lastfm-track-placeholder">
                      <Disc3 size={17} />
                    </span>
                  )}

                  <span className="lastfm-track-copy">
                    <strong>{album.name}</strong>
                    <small>{album.artist}</small>
                  </span>

                  <span className="lastfm-album-playcount">
                    {album.playcount} plays
                  </span>

                  <ArrowUpRight
                    className="lastfm-track-arrow"
                    size={15}
                  />
                </a>
              ))
            ) : (
              <p className="lastfm-empty">
                No top albums recorded in the last 7 days yet.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="lastfm-footer">
        <span>
          <Headphones size={14} />
          UPDATED FROM LAST 7 DAYS
        </span>

        <span>LAST.FM USER / INCINERATOR</span>
      </div>
    </section>
  );
}