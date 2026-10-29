"use client";

import Link from "next/link";
import { ArrowLeft, Coffee, ExternalLink, ImageOff, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
        if (!response.ok) throw new Error(`The cups API returned ${response.status}.`);
        const result = (await response.json()) as CupsResponse;
        if (!Array.isArray(result.data)) throw new Error("The cups API response is missing its data array.");
        setCups(result.data.filter((cup): cup is Cup => Boolean(cup?.filename && cup?.festivalKey)));
      } catch (caught) {
        if (caught instanceof Error && caught.name === "AbortError") return;
        setError(caught instanceof Error ? caught.message : "Could not load the cups collection.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadCups();
    return () => controller.abort();
  }, []);

  const festivals = useMemo(
    () => Array.from(new Set(cups.map((cup) => cup.festivalKey))).sort((a, b) => a.localeCompare(b)),
    [cups],
  );

  const filteredCups = useMemo(() => {
    const query = search.trim().toLowerCase();
    return cups.filter((cup) => {
      const matchesFestival = festivalFilter === "all" || cup.festivalKey === festivalFilter;
      const matchesSearch = !query || `${cup.festivalKey} ${cup.filename} ${cup.number}`.toLowerCase().includes(query);
      return matchesFestival && matchesSearch;
    });
  }, [cups, festivalFilter, search]);

  return (
    <main className="page-wrap archive-page">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link>
      <section className="archive-hero archive-hero-crimson">
        <div className="archive-hero-art" style={{ backgroundImage: 'url("/images/cups.svg")' }} aria-hidden="true" />
        <div className="archive-hero-shade" />
        <div className="archive-hero-content">
          <p className="eyebrow">COLLECTED IN THE CROWD / INCINERATOR ARCHIVE</p>
          <h1>Festival<br />cups<span>.</span></h1>
          <p>A catalogue of the cups collected from the festivals, one keepsake at a time.</p>
          <div className="archive-hero-meta"><span>COLLECTION GALLERY</span><span>FILTER BY FESTIVAL</span></div>
        </div>
        <div className="archive-hero-index" aria-hidden="true">02</div>
      </section>

      <section className="archive-content-section">
        <div className="section-heading">
          <div><p className="eyebrow">THE COLLECTION</p><h2>The cups archive</h2></div>
          <p className="section-description">{cups.length} {cups.length === 1 ? "cup" : "cups"} catalogued across {festivals.length} {festivals.length === 1 ? "festival" : "festivals"}.</p>
        </div>

        <div className="cups-controls">
          <label className="cups-search"><Search size={16} aria-hidden="true" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search festivals or filenames" aria-label="Search cups" /></label>
          <label className="cups-filter-label" htmlFor="cup-festival-filter">Festival
            <select id="cup-festival-filter" value={festivalFilter} onChange={(event) => setFestivalFilter(event.target.value)}>
              <option value="all">All festivals</option>
              {festivals.map((festival) => <option key={festival} value={festival}>{formatFestivalName(festival)}</option>)}
            </select>
          </label>
        </div>

        <div className="results-line"><span>{loading ? "LOADING COLLECTION…" : `${filteredCups.length} OF ${cups.length} ITEMS`}</span>{(search || festivalFilter !== "all") && <button className="text-button" onClick={() => { setSearch(""); setFestivalFilter("all"); }}>Clear filters</button>}</div>

        {loading ? (
          <div className="empty-state cups-feedback"><Coffee size={28} aria-hidden="true" /><h2>Loading the collection</h2><p>Reading cup filenames from the archive.</p></div>
        ) : error ? (
          <div className="empty-state cups-feedback"><ImageOff size={28} aria-hidden="true" /><h2>Could not load cups</h2><p>{error}</p><p>Confirm that <code>src/app/api/cups/route.ts</code> exists and that the images are in <code>public/images/cups/</code>.</p></div>
        ) : filteredCups.length === 0 ? (
          <div className="empty-state cups-feedback"><ImageOff size={28} aria-hidden="true" /><h2>{cups.length ? "No matching cups" : "No cups found"}</h2><p>{cups.length ? "Try another search or festival filter." : "Check the image filenames and the /api/cups response. Expected names look like hellfest-image-1.jpg."}</p></div>
        ) : (
          <div className="cups-gallery">
            {filteredCups.map((cup) => {
              const imageUrl = `/images/cups/${encodeURIComponent(cup.filename)}`;
              return (
                <article className="cup-card" key={cup.filename}>
                  <a className="cup-image-link" href={imageUrl} target="_blank" rel="noreferrer" aria-label={`Open image ${cup.filename} in a new tab`}>
                    {/* Files in public are served directly from the site root. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="cup-image" src={imageUrl} alt={`${formatFestivalName(cup.festivalKey)} festival cup ${cup.number}`} loading="lazy" />
                    <span className="cup-image-open"><ExternalLink size={15} aria-hidden="true" /></span>
                    <span className="cup-number">#{String(cup.number).padStart(2, "0")}</span>
                  </a>
                  <div className="cup-card-copy"><p className="eyebrow">FESTIVAL CUP / {String(cup.number).padStart(2, "0")}</p><h3>{formatFestivalName(cup.festivalKey)}</h3><p>{cup.filename}</p></div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
