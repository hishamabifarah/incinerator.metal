import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ArchiveItem } from "../data/archive";

// Cards can be reused on collection pages and the homepage's featured section.
export default function ArchiveItemCard({ item }: { item: ArchiveItem }) {
  return (
    <Link className="archive-item-card" href={`/archive/${item.collectionSlug}/${item.id}`}>
      <div className="archive-item-image" style={{ backgroundImage: `url("${item.image}")` }}>
        <span className="item-year">{item.year}</span>
        <span className="item-open" aria-hidden="true"><ArrowUpRight size={17} /></span>
      </div>
      <div className="archive-item-copy">
        <p className="eyebrow">{item.subtitle}</p>
        <h3>{item.title}</h3>
        <p className="item-location">{item.location}</p>
      </div>
    </Link>
  );
}
