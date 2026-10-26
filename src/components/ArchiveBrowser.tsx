"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { ArchiveItem } from "../data/archive";
import ArchiveItemCard from "../components/ArchiveItemCard";

// Search and year filtering are client-side because the archive is currently
// a small local data file. A database can replace this logic later.
export default function ArchiveBrowser({ items }: { items: ArchiveItem[] }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");

  const years = useMemo(
    () => Array.from(new Set(items.map((item) => item.year))).sort((a, b) => b.localeCompare(a)),
    [items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const searchableText = [
        item.title,
        item.subtitle,
        item.year,
        item.location,
        item.description,
        ...item.tags,
      ].join(" ").toLowerCase();

      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      const matchesYear = year === "all" || item.year === year;

      return matchesQuery && matchesYear;
    });
  }, [items, query, year]);

  return (
    <div className="archive-browser">
      <div className="archive-controls">
        <label className="search-field">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search this collection</span>
          <input
            type="search"
            placeholder="Search titles, locations, tags..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? (
            <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={15} />
            </button>
          ) : null}
        </label>

        <label className="year-filter">
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span className="sr-only">Filter by year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="all">All years</option>
            {years.map((itemYear) => <option key={itemYear} value={itemYear}>{itemYear}</option>)}
          </select>
        </label>
      </div>

      <div className="results-line" aria-live="polite">
        <span>{filteredItems.length} {filteredItems.length === 1 ? "entry" : "entries"}</span>
        {(query || year !== "all") ? (
          <button className="text-button" type="button" onClick={() => { setQuery(""); setYear("all"); }}>
            Reset filters
          </button>
        ) : null}
      </div>

      {filteredItems.length ? (
        <div className="archive-item-grid">
          {filteredItems.map((item) => <ArchiveItemCard key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-state-symbol">∅</span>
          <h2>No entries found</h2>
          <p>Try a different search term or reset the year filter.</p>
          <button className="button button-secondary" type="button" onClick={() => { setQuery(""); setYear("all"); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
