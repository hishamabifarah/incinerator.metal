"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import rawBands from "../../../data/bands-seen-live.json";

type Band = { name: string; count: number; festival: string[] };
const bands = rawBands as Band[];

export default function BandsSeenLivePage() {
  const [query, setQuery] = useState("");
  const [festivalQuery, setFestivalQuery] = useState("");
  const [countQuery, setCountQuery] = useState("");
  const [sort, setSort] = useState("name");
  const festivalOptions = useMemo(() => Array.from(new Set(bands.flatMap((band) => band.festival))).sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bands.filter((band) =>
      (!q || band.name.toLowerCase().includes(q)) &&
      (!festivalQuery || band.festival.includes(festivalQuery)) &&
      (countQuery === "" || band.count === Number(countQuery))
    ).sort((a, b) => sort === "count" ? b.count - a.count || a.name.localeCompare(b.name) : a.name.localeCompare(b.name));
  }, [query, festivalQuery, countQuery, sort]);

  const totalSightings = bands.reduce((sum, band) => sum + band.count, 0);

  return (
    <main className="page-wrap archive-page seen-live-page">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link>
      <section className="archive-hero archive-hero-crimson">
        <div className="archive-hero-art" style={{ backgroundImage: 'url("/images/live.svg")' }} aria-hidden="true" />
        <div className="archive-hero-shade" />
        <div className="archive-hero-content">
          <p className="eyebrow">THE LIVE INDEX / INCINERATOR ARCHIVE</p>
          <h1>Bands seen<br />live<span>.</span></h1>
          <p>A searchable record of the bands, repeat sightings, and festival appearances in your live-music history.</p>
          <div className="archive-hero-meta"><span>{bands.length} BANDS</span><span>{totalSightings} TOTAL SIGHTINGS</span></div>
        </div>
        <div className="archive-hero-index" aria-hidden="true">03</div>
      </section>
      <section className="archive-content-section">
        <div className="section-heading">
          <div><p className="eyebrow">THE CATALOGUE</p><h2>Every band. Every time.</h2></div>
          <p className="section-description">Search by name, choose a festival, or enter an exact sighting count (for example, 2).</p>
        </div>
        <div className="archive-controls seen-live-controls">
          <label className="search-field"><span className="sr-only">Filter by festival</span>
            <select value={festivalQuery} onChange={(event) => setFestivalQuery(event.target.value)}><option value="">All festivals</option>
              {festivalOptions.map((festival) => <option key={festival} value={festival}>{festival}</option>)}
            </select>
          </label>
          <label className="search-field"><SlidersHorizontal size={17} aria-hidden="true" /><span className="sr-only">Sort bands</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="name">Sort: A–Z</option><option value="count">Most seen</option></select>
          </label>
          <label className="search-field"><Search size={17} aria-hidden="true" /><span className="sr-only">Search band names</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search bands..." />
          </label>

          <label className="search-field count-filter-field"><span className="sr-only">Filter by exact number of times seen</span>
            <input type="number" min="1" step="1" inputMode="numeric" value={countQuery} onChange={(event) => setCountQuery(event.target.value)} placeholder="Times seen (e.g. 2)" />
          </label>
        </div>
        <p className="results-count">SHOWING {filtered.length} OF {bands.length} BANDS</p>
        <div className="seen-live-table-wrap">
          <table className="seen-live-table"><thead><tr><th>Band</th><th>Times seen</th><th>Festival / venue appearances</th></tr></thead>
            <tbody>{filtered.map((band) => <tr key={band.name}><td className="band-name-cell">{band.name}</td><td><span className="sighting-count">{band.count} {band.count === 1 ? "time" : "times"}</span></td>
              <td><div className="festival-tags">{band.festival.map((festival) => <span key={festival} className="festival-tag">{festival}</span>)}</div></td></tr>)}</tbody>
          </table>
        </div>
        <div className="seen-live-mobile-list" aria-label="Bands seen live">
          {filtered.map((band) => (
            <article className="seen-live-mobile-card" key={band.name}>
              <div className="seen-live-mobile-card-top">
                <h3>{band.name}</h3>
                <span className="sighting-count">{band.count} {band.count === 1 ? "time" : "times"}</span>
              </div>
              <p className="seen-live-mobile-label">Festival / venue appearances</p>
              <div className="festival-tags">
                {band.festival.map((festival) => <span key={festival} className="festival-tag">{festival}</span>)}
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty-state seen-live-no-results">No bands match those filters.</p>}
      </section>
    </main>
  );
}
