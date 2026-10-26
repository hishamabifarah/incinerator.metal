import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ArchiveBrowser from "../../../components/ArchiveBrowser";
import SectionHeading from "../../../components/SectionHeading";
import { collections, getCollection, getItemsForCollection } from "../../../data/archive";

// Static generation creates a page for each known collection at build time.
export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  return { title: collection?.title ?? "Archive" };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);

  // Unknown collection slugs get a proper 404 rather than an empty page.
  if (!collection) notFound();

  const items = getItemsForCollection(slug);

  return (
    <div className="page-wrap archive-page">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link>

      <section className={`archive-hero archive-hero-${collection.accent}`}>
        <div className="archive-hero-art" style={{ backgroundImage: `url("${collection.image}")` }} aria-hidden="true" />
        <div className="archive-hero-shade" />
        <div className="archive-hero-content">
          <p className="eyebrow">{collection.eyebrow} / INCINERATOR ARCHIVE</p>
          <h1>{collection.title}<span>.</span></h1>
          <p>{collection.description}</p>
          <div className="archive-hero-meta">
            <span>{String(items.length).padStart(2, "0")} ENTRIES</span>
            <span>PERSONAL COLLECTION</span>
          </div>
        </div>
        <div className="archive-hero-index" aria-hidden="true">{String(collections.findIndex((c) => c.slug === slug) + 1).padStart(2, "0")}</div>
      </section>

      <section className="archive-content-section">
        <SectionHeading eyebrow="THE CATALOGUE" title="Browse the collection">
          Search entries, narrow the list by year, and open any card for its details.
        </SectionHeading>
        <ArchiveBrowser items={items} />
      </section>

      <div className="archive-next-link">
        <span>KEEP EXPLORING</span>
        <Link href={`/archive/${collections[(collections.findIndex((c) => c.slug === slug) + 1) % collections.length].slug}`}>
          Next collection <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
