import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, CalendarDays, Tag } from "lucide-react";
import { archiveItems, collections, getArchiveItem, getCollection } from "../../../../data/archive";

// Generate one detail page for every sample archive item.
export function generateStaticParams() {
  return archiveItems.map((item) => ({ slug: item.collectionSlug, id: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; id: string }> }): Promise<Metadata> {
  const { slug, id } = await params;
  const item = getArchiveItem(slug, id);
  return { title: item?.title ?? "Archive entry" };
}

export default async function ArchiveDetailPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  const item = getArchiveItem(slug, id);
  const collection = getCollection(slug);

  if (!item || !collection) notFound();

  const related = archiveItems.filter((entry: NonNullable<ReturnType<typeof getArchiveItem>>) => entry.collectionSlug === slug && entry.id !== id).slice(0, 3);

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

          <div className="detail-note">
            <p className="eyebrow">ARCHIVE NOTE</p>
            <p>This is sample content to show the detail-page layout. Replace the description, location, tags, year, and image path in <code>src/data/archive.ts</code> with your own story.</p>
          </div>

          <Link className="button button-secondary" href={`/archive/${slug}`}>Return to collection <ArrowUpRight size={16} /></Link>
        </article>
      </section>

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
