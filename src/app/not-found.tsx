import Link from "next/link";
import { ArrowLeft, ArrowRight, Disc3 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="eyebrow">INCINERATOR / ARCHIVE ERROR</p>

        <div className="not-found-number" aria-hidden="true">
          404
        </div>

        <div className="not-found-divider">
          <span />
          <Disc3 size={18} strokeWidth={1.4} />
          <span />
        </div>

        <h1>
          Lost in the <span>noise.</span>
        </h1>

        <p className="not-found-description">
          This page isn't part of the archive. It may have been moved,
          removed, or never made it into the collection.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="button button-primary">
            <ArrowLeft size={16} />
            Back to the archive
          </Link>

          <Link href="/#explore-archive" className="not-found-secondary">
            Explore collections
            <ArrowRight size={15} />
          </Link>
        </div>

        <p className="not-found-footer">
          SOMEWHERE BETWEEN THE RIFFS AND THE MEMORIES.
        </p>
      </div>
    </main>
  );
}