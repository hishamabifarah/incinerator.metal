import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, MapPin, CalendarDays, Tag } from "lucide-react";
import { archiveItems, getArchiveItem, getCollection } from "../../../..//data/archive";
import bandsSeenLive from "../../../../data/bands-seen-live.json";
import ArchiveGallery from "../../../../components/archive/ArchiveGallery";

// Generate one detail page for every sample archive item.
export function generateStaticParams() {
  return archiveItems.map((item) => ({ slug: item.collectionSlug, id: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; id: string }> }): Promise<Metadata> {
  const { slug, id } = await params;
  const item = getArchiveItem(slug, id);
  return { title: item?.title ?? "Archive entry" };
}

async function ArchiveDetailContent({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  const item = getArchiveItem(slug, id);
  const collection = getCollection(slug);

  if (!item || !collection) notFound();

  const related = archiveItems.filter((entry) => entry.collectionSlug === slug && entry.id !== id).slice(0, 3);

// Match each festival archive URL slug against every festival value in
// bands-seen-live.json. Supports custom aliases for festival name differences.
  const toFestivalSlug = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const festivalAliases: Record<string, string> = {
    "motocultor-2023": "Motocultor Festival 2023",
    "knotfest-2019": "Knotfest Meets Hellfest 2019",
    "tolminator-2026": "Tolminator Metal Fest 2026"
  };

  const currentFestivalSlug = toFestivalSlug(id);

  const expectedFestivalSlug = festivalAliases[id]
    ? toFestivalSlug(festivalAliases[id])
    : currentFestivalSlug;

  const bandsSeenAtFestival =
    slug === "festivals"
      ? bandsSeenLive
          .filter((band) =>
            band.festival.some(
              (festival) => toFestivalSlug(festival) === expectedFestivalSlug
            )
          )
          .map((band) => band.name)
          .sort((a, b) => a.localeCompare(b))
      : [];

  const bandsSeenAtEvent =
    slug === "concerts" ? item.bandsSeenLive ?? [] : bandsSeenAtFestival;

  return (
    <div className="page-wrap detail-page">
      <Link className="back-link" href={`/archive/${slug}`}><ArrowLeft size={15} /> Back to {collection.title}</Link>

      <section className="detail-layout">
        <div className="detail-art" style={{ backgroundImage: `url("${item.image}")` }}>
          <span className="detail-art-label">INCINERATOR / ARCHIVE ENTRY</span>
          <span className="detail-art-index">{item.year}</span>
        </div>

        <article className="detail-copy">
          <p className="eyebrow">{collection.eyebrow} / {item.subtitle}</p>
          <h1>{item.title}<span>.</span></h1>
          <p className="detail-description">{item.description}</p>

          <div className="detail-facts">
            <div><CalendarDays size={17} /><span><small>YEAR</small>{item.year}</span></div>
            <div><MapPin size={17} /><span><small>LOCATION</small>{item.location}</span></div>
            <div><Tag size={17} /><span><small>CATEGORY</small>{collection.title}</span></div>
          </div>

          <div className="tag-list">
            {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          {/* <div className="detail-note">
            <p className="eyebrow">ARCHIVE NOTE</p>
            <p>{item.description}</p>
            {slug === "festivals" ? (
              <div className="festival-bands-note">
                <p className="eyebrow">BANDS SEEN LIVE</p>
                {bandsSeenAtFestival.length > 0 ? (
                  <p>{bandsSeenAtFestival.join(", ")}</p>
                ) : (
                  <p>No bands from this festival edition have been added to the Seen Live archive yet.</p>
                )}
              </div>
            ) : null}
          </div> */}
          {(slug === "festivals" || slug === "concerts") ? (
            <div className="archive-bands">
              <div className="archive-bands-heading">
                <span>BANDS SEEN LIVE</span>
                <span>{bandsSeenAtEvent.length} BANDS</span>
              </div>

              <div className="archive-bands-grid">
                {bandsSeenAtEvent.map((band) => (
                  <span key={band} className="archive-band">
                    {band}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <Link className="button button-secondary" href={`/archive/${slug}`}>Return to collection <ArrowUpRight size={16} /></Link>
        </article>
      </section>

      {(["festivals", "concerts", "vinyl", "shirts"].includes(slug) &&
        item.images?.length) ? (
        <ArchiveGallery
          images={item.images}
          title={item.title}
          collectionSlug={slug}
        />
      ) : null}

      {related.length > 0 ? (
        <section className="related-section">
          <div className="section-heading">
            <div><p className="eyebrow">SAME COLLECTION</p><h2>Keep digging.</h2></div>
            <Link className="inline-link" href={`/archive/${slug}`}>View collection <ArrowUpRight size={15} /></Link>
          </div>
          <div className="related-list">
            {related.map((entry) => (
              <Link key={entry.id} href={`/archive/${slug}/${entry.id}`} className="related-row">
                <span className="related-year">{entry.year}</span>
                <span>{entry.title}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default function ArchiveDetailPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  return (
    <Suspense fallback={<div className="page-wrap detail-page" aria-busy="true" />}>
      <ArchiveDetailContent params={params} />
    </Suspense>
  );
}