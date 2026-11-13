
"use client";

import Link from "next/link";
import { ArrowLeft, Coffee, ExternalLink, ImageOff, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Cup = {
  filename: string;
  festivalKey: string;
  number: number;
};

type CupsResponse = {
  data?: Cup[];
  total?: number;
  limit?: number;
  offset?: number;
};

const PAGE_SIZE = 10;

function formatFestivalName(key: string) {
  return key
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function FestivalCupsPage() {
  const [cups, setCups] = useState<Cup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [festivalFilter, setFestivalFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCups() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/cups?limit=9999&offset=0", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`The cups API returned ${response.status}.`);
        }

        const result = (await response.json()) as CupsResponse;

        if (!Array.isArray(result.data)) {
          throw new Error("The cups API response is missing its data array.");
        }

        setCups(
          result.data.filter(
            (cup): cup is Cup =>
              Boolean(cup?.filename && cup?.festivalKey),
          ),
        );
      } catch (caught) {
        if (caught instanceof Error && caught.name === "AbortError") return;

        setError(
          caught instanceof Error
            ? caught.message
            : "Could not load the cups collection.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadCups();

    return () => controller.abort();
  }, []);

  const festivals = useMemo(
    () =>
      Array.from(new Set(cups.map((cup) => cup.festivalKey))).sort(
        (a, b) => a.localeCompare(b),
      ),
    [cups],
  );

  const filteredCups = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cups.filter((cup) => {
      const matchesFestival =
        festivalFilter === "all" || cup.festivalKey === festivalFilter;

      const matchesSearch =
        !query ||
        `${cup.festivalKey} ${cup.filename} ${cup.number}`
          .toLowerCase()
          .includes(query);

      return matchesFestival && matchesSearch;
    });
  }, [cups, festivalFilter, search]);

  // Reset the visible count whenever filters change.
  useEffect(() => {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }

    setVisibleCount(PAGE_SIZE);
    setIsLoadingMore(false);
  }, [search, festivalFilter]);

  // Reveal another batch when the visitor reaches the gallery loader.
  useEffect(() => {
    const sentinel = loadMoreRef.current;

    if (
      loading ||
      !sentinel ||
      isLoadingMore ||
      visibleCount >= filteredCups.length
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        observer.disconnect();
        setIsLoadingMore(true);

        loadingTimerRef.current = setTimeout(() => {
          setVisibleCount((current) =>
            Math.min(current + PAGE_SIZE, filteredCups.length),
          );
          setIsLoadingMore(false);
        }, 450);
      },
      { rootMargin: "350px 0px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [loading, filteredCups.length, isLoadingMore, visibleCount]);

  useEffect(
    () => () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    },
    [],
  );

  const visibleCups = filteredCups.slice(0, visibleCount);

  return (
    <main className="page-wrap archive-page">
      <Link className="back-link" href="/">
        <ArrowLeft size={15} /> Back to home
      </Link>

      <section className="archive-hero archive-hero-crimson">
        <div className="archive-hero-art" aria-hidden="true">
          <Image
            src="/images/cups-main.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1240px"
          />
        </div>
        <div className="archive-hero-shade" />

        <div className="archive-hero-content">
          <p className="eyebrow">
            COLLECTED IN THE CROWD / INCINERATOR ARCHIVE
          </p>
          <h1>
            Festival
            <br />
            cups<span>.</span>
          </h1>
          <p>
            A catalogue of the cups collected from the festivals, one keepsake
            at a time.
          </p>
          <div className="archive-hero-meta">
            <span>COLLECTION GALLERY</span>
            <span>FILTER BY FESTIVAL</span>
          </div>
        </div>

        <div className="archive-hero-index" aria-hidden="true">
          05
        </div>
      </section>

      <section className="archive-content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2>The cups archive</h2>
          </div>
          <p className="section-description">
            {cups.length} {cups.length === 1 ? "cup" : "cups"} catalogued
            across {festivals.length}{" "}
            {festivals.length === 1 ? "festival" : "festivals"}.
          </p>
        </div>

        <div className="cups-controls">
          <label className="cups-search">
            <Search size={16} aria-hidden="true" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search festivals or filenames"
              aria-label="Search cups"
            />
          </label>

          <label className="cups-filter-label" htmlFor="cup-festival-filter">
            Festival
            <select
              id="cup-festival-filter"
              value={festivalFilter}
              onChange={(event) => setFestivalFilter(event.target.value)}
            >
              <option value="all">All festivals</option>
              {festivals.map((festival) => (
                <option key={festival} value={festival}>
                  {formatFestivalName(festival)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="results-line">
          <span>
            {loading
              ? "LOADING COLLECTION…"
              : `${visibleCups.length} OF ${filteredCups.length} ITEMS`}
          </span>

          {(search || festivalFilter !== "all") && (
            <button
              className="text-button"
              onClick={() => {
                setSearch("");
                setFestivalFilter("all");
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {loading ? (
          <div className="empty-state cups-feedback">
            <Coffee size={28} aria-hidden="true" />
            <h2>Loading the collection</h2>
            <p>Reading cup filenames from the archive.</p>
          </div>
        ) : error ? (
          <div className="empty-state cups-feedback">
            <ImageOff size={28} aria-hidden="true" />
            <h2>Could not load cups</h2>
            <p>{error}</p>
            <p>
              Confirm that <code>src/app/api/cups/route.ts</code> exists and
              that the images are in <code>public/images/cups/</code>.
            </p>
          </div>
        ) : filteredCups.length === 0 ? (
          <div className="empty-state cups-feedback">
            <ImageOff size={28} aria-hidden="true" />
            <h2>{cups.length ? "No matching cups" : "No cups found"}</h2>
            <p>
              {cups.length
                ? "Try another search or festival filter."
                : "Check the image filenames and the /api/cups response."}
            </p>
          </div>
        ) : (
          <>
            <div className="cups-gallery">
              {visibleCups.map((cup) => {
                const imageUrl = `/images/cups/${encodeURIComponent(
                  cup.filename,
                )}`;

                return (
                  <article className="cup-card" key={cup.filename}>
                    <a
                      className="cup-image-link"
                      href={imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open image ${cup.filename} in a new tab`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {/* <img
                        className="cup-image"
                        src={imageUrl}
                        alt={`${formatFestivalName(cup.festivalKey)} festival cup ${cup.number}`}
                        loading="lazy"
                      /> */}
                      <Image
                        className="cup-image"
                        src={imageUrl}
                        alt={`${formatFestivalName(cup.festivalKey)} festival cup ${cup.number}`}
                        width={300}
                        height={300}
                        loading="lazy"
                      />
                      <span className="cup-image-open">
                        <ExternalLink size={15} aria-hidden="true" />
                      </span>

                      <span className="cup-number">
                        #{String(cup.number).padStart(2, "0")}
                      </span>
                    </a>

                    <div className="cup-card-copy">
                      <p className="eyebrow">
                        FESTIVAL CUP / {String(cup.number).padStart(2, "0")}
                      </p>
                      <h3>{formatFestivalName(cup.festivalKey)}</h3>
                      <p>{cup.filename}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {visibleCount < filteredCups.length && (
              <div
                className="archive-infinite-loader"
                ref={loadMoreRef}
                aria-live="polite"
                aria-busy={isLoadingMore}
              >
                {isLoadingMore ? (
                  <>
                    <span
                      className="archive-loading-spinner"
                      aria-hidden="true"
                    />
                    <span>Loading more cups...</span>
                  </>
                ) : (
                  <span className="archive-loader-hint">
                    Scroll to discover more
                  </span>
                )}
              </div>
            )}

            {visibleCount >= filteredCups.length && (
              <p className="archive-end-message">
                You’ve reached the end of the collection.
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}
