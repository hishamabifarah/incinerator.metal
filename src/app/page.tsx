import Link from "next/link";
import { ArrowDownRight, ArrowRight, Disc3, Flame, Headphones, Ticket } from "lucide-react";
import CollectionCard from "../components/CollectionCard";
import ArchiveItemCard from "../components/ArchiveItemCard";
import SectionHeading from "../components/SectionHeading";
import { archiveItems, collections } from "../data/archive";

// Homepage: editorial introduction first, practical archive navigation second.
export default function HomePage() {
  const featuredItems = archiveItems.filter((item) => item.featured).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content page-wrap">
          <p className="eyebrow hero-eyebrow"><span className="live-dot" /> PERSONAL METAL ARCHIVE / EST. IN THE PIT</p>
          <h1>A LIFE<br />MEASURED IN <span>RIFFS.</span></h1>
          <p className="hero-description">
            The shows that shook the ground. The records that never leave the shelf.
            The memories worth keeping loud.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/archive/live">Explore the archive <ArrowRight size={17} /></Link>
            <Link className="button button-ghost" href="/about">The story behind it <ArrowDownRight size={17} /></Link>
          </div>
          <div className="hero-bottom-note">
            <span>LOUD MUSIC. LONG MEMORY.</span>
            <span>33° 53′ N / HEAVY ROTATION</span>
          </div>
        </div>
        <div className="hero-side-label" aria-hidden="true">DOCUMENTING THE NOISE</div>
      </section>

      <section className="intro-section page-wrap section-pad">
        <div className="intro-mark"><Flame size={27} strokeWidth={1.3} /></div>
        <div className="intro-copy">
          <p className="eyebrow">NOT JUST A COLLECTION</p>
          <h2>Some things deserve<br />more than a camera roll.</h2>
        </div>
        <div className="intro-aside">
          <p>INCINERATOR is a personal archive of a life spent around heavy music. A home for physical keepsakes, live moments, and the stories that connect them.</p>
          <Link className="inline-link" href="/about">Read the story <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="collections-section page-wrap section-pad">
        <SectionHeading
          eyebrow="THE COLLECTIONS / 01—07"
          title="Everything has a story."
          action={<Link className="inline-link" href="/archive/live">Browse archive <ArrowRight size={15} /></Link>}
        >
          Seven corners of the same obsession. Each one built to grow as the archive grows.
        </SectionHeading>
        <div className="collection-grid">
          {collections.map((collection, index) => <CollectionCard key={collection.slug} collection={collection} index={index} />)}
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="RECENTLY DOCUMENTED"
            title="Filed under: unforgettable."
            action={<Link className="inline-link" href="/archive/festivals">View all memories <ArrowRight size={15} /></Link>}
          >
            A living record. New shows, new finds, and old memories brought back into focus.
          </SectionHeading>
          <div className="archive-item-grid featured-grid">
            {featuredItems.map((item) => <ArchiveItemCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="manifesto-section page-wrap section-pad">
        <div className="manifesto-panel">
          <div className="manifesto-icon"><Disc3 size={31} strokeWidth={1.2} /></div>
          <p className="eyebrow">THE RULES ARE SIMPLE</p>
          <h2>Keep the records.<br /><span>Keep the stories.</span></h2>
          <p className="manifesto-copy">A wristband can take you back to a weekend. A record can take you back to a room. This archive keeps those details from disappearing into the scroll.</p>
          <Link className="button button-primary" href="/archive/vinyl">Enter the vault <ArrowRight size={16} /></Link>
          <div className="manifesto-stamp" aria-hidden="true">PLAY<br />LOUD</div>
        </div>
      </section>

      <section className="now-spinning-section page-wrap section-pad">
        <div className="spinning-art">
          <div className="record-record"><span className="record-label">INC<br />001</span></div>
          <div className="spinning-caption"><Headphones size={16} /> CURRENTLY IN HEAVY ROTATION</div>
        </div>
        <div className="spinning-copy">
          <p className="eyebrow">SIDE A / NOW SPINNING</p>
          <h2>Not everything<br />belongs in a playlist.</h2>
          <p>Some records need a needle, a little surface noise, and time. This space is ready for your turntable videos, album notes, and listening sessions.</p>
          <Link className="inline-link" href="/archive/vinyl">Explore the vinyl vault <ArrowRight size={15} /></Link>
          <div className="spinning-meta"><span><Disc3 size={15} /> ANALOG OBSESSION</span><span><Ticket size={15} /> PERSONAL ARCHIVE</span></div>
        </div>
      </section>
    </>
  );
}
