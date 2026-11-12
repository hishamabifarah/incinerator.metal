
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Disc3,
  Flame,
  Headphones,
  Ticket,
} from "lucide-react";

import CollectionCard from "../components/CollectionCard";
import ArchiveItemCard from "../components/ArchiveItemCard";
import SectionHeading from "../components/SectionHeading";
import { archiveItems, collections } from "../data/archive";
import LastFmSection from "../components/LastFmSection";

import type { ArchiveItem } from "../data/archive";

// Fisher-Yates shuffle: returns a randomly ordered copy.
function shuffleItems<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function HomePage() {
  const [featuredItems, setFeaturedItems] = useState<ArchiveItem[]>([]);
  const [spinningVinyl, setSpinningVinyl] = useState<ArchiveItem | null>(null);

  useEffect(() => {
    // Select three unique random archive entries.
    setFeaturedItems(shuffleItems(archiveItems).slice(0, 4));

    // Select one random record from the vinyl collection.
    const vinylItems = archiveItems.filter(
      (item) => item.collectionSlug === "vinyl"
    );

    setSpinningVinyl(
      vinylItems.length
        ? vinylItems[Math.floor(Math.random() * vinylItems.length)]
        : null
    );
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-content page-wrap">
          <p className="eyebrow hero-eyebrow">
            <span className="live-dot" /> PERSONAL METAL ARCHIVE / EST. IN THE PIT
          </p>

          <h1>
            A LIFE
            <br />
            MEASURED IN <span>RIFFS.</span>
          </h1>

          <p className="hero-description">
            The shows that shook the ground. The records that never leave the
            shelf. The memories worth keeping loud.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/archive/seen-live">
              Bands seen live <ArrowRight size={17} />
            </Link>

            <Link className="button button-ghost" href="/about">
              The story behind it <ArrowDownRight size={17} />
            </Link>
          </div>

          <div className="hero-bottom-note">
            <span>LOUD MUSIC. LONG MEMORY.</span>
            <span>33° 53′ N / HEAVY ROTATION</span>
          </div>
        </div>

        <div className="hero-side-label" aria-hidden="true">
          DOCUMENTING THE NOISE
        </div>
      </section>

      <nav
        id="explore-archive"
        className="home-archive-nav page-wrap"
        aria-label="Explore the archive"
      >
        <span className="home-archive-nav-label">EXPLORE THE ARCHIVE</span>

        <div className="home-archive-nav-links">
          <Link href="/archive/festivals">
            Festivals attended <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/archive/concerts">
            Concerts attended <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/archive/vinyl">
            Vinyl collection <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/archive/meet-and-greets">
            Meet &amp; greets <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/archive/cups">
            Festival cups <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/archive/shirts">
            Shirts &amp; Hoodies <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <section className="intro-section page-wrap section-pad">
        <div className="intro-mark">
          <Flame size={27} strokeWidth={1.3} />
        </div>

        <div className="intro-copy">
          <p className="eyebrow">NOT JUST A COLLECTION</p>
          <h2>
            Some things deserve
            <br />
            more than a camera roll.
          </h2>
        </div>

        <div className="intro-aside">
          <p>
            INCINERATOR is a personal archive of a life spent around heavy
            music. A home for physical keepsakes, live moments, and the stories
            that connect them.
          </p>

          <Link className="inline-link" href="/about">
            Read the story <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="collections-section page-wrap section-pad">
        <SectionHeading
          eyebrow="THE COLLECTIONS / 01—06"
          title="Everything has a story."
          action={
            <Link className="inline-link" href="#explore-archive">
              Explore archive <ArrowRight size={15} />
            </Link>
          }
        >
          Six collections, each preserving a different part of the story:
          festival weekends, physical keepsakes, records, and encounters.
        </SectionHeading>

        <div className="collection-grid">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="RANDOMLY SELECTED FROM THE ARCHIVE"
            title="Filed under: unforgettable."
          >
            Three memories, pulled at random from the archive. Every visit
            brings a different selection.
          </SectionHeading>

          <div className="archive-item-grid featured-grid">
            {featuredItems.map((item) => (
              <ArchiveItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="now-spinning-section page-wrap section-pad">
        <div className="spinning-art">
          {spinningVinyl ? (
            <>
              {spinningVinyl.image ? (
                <img
                  className="spinning-vinyl-artwork"
                  src={spinningVinyl.image}
                  alt={`${spinningVinyl.title} vinyl artwork`}
                />
              ) : (
                <div className="record-record">
                  <span className="record-label">INC<br />001</span>
                </div>
              )}
            </>
          ) : (
            <div className="record-record">
              <span className="record-label">INC<br />001</span>
            </div>
          )}

          <div className="spinning-caption">
            <Headphones size={16} /> RANDOM PICK FROM THE VINYL VAULT
          </div>
        </div>

        <div className="spinning-copy">
          <p className="eyebrow">SIDE A / NOW SPINNING</p>

          {spinningVinyl ? (
            <>
              <h2>{spinningVinyl.title}</h2>

              {spinningVinyl.subtitle && (
                <p className="spinning-subtitle">
                  {spinningVinyl.subtitle}
                </p>
              )}

              <p>
                A random selection from the record collection. Every visit
                puts a different record in the spotlight.
              </p>
              <div className="spinning-links">
                <Link
                  className="inline-link"
                  href={`/archive/vinyl/${spinningVinyl.id}`}
                >
                  View this record <ArrowRight size={15} />
                </Link>
                <Link
                  className="inline-link"
                  href={`/archive/vinyl/`}
                >
                  View vinyl collection <ArrowRight size={15} />
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2>
                Not everything
                <br />
                belongs in a playlist.
              </h2>

              <p>
                Add vinyl records to your archive to bring this section to
                life.
              </p>
            </>
          )}

          <div className="spinning-meta">
            <span>
              <Disc3 size={15} /> ANALOG OBSESSION
            </span>
            <span>
              <Ticket size={15} /> PERSONAL ARCHIVE
            </span>
          </div>
        </div>
      </section>

      <LastFmSection />
    </>
  );
}
