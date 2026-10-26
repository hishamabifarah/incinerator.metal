import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Collection } from "../data/archive";

// A reusable collection tile. The CSS image layer supplies the visual treatment.
export default function CollectionCard({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) {
  return (
    <Link
      className={`collection-card collection-${collection.accent}`}
      href={`/archive/${collection.slug}`}
      style={{ ["--card-index" as string]: index } as CSSProperties}
    >
      <div className="collection-card-image" style={{ backgroundImage: `url("${collection.image}")` }} />
      <div className="collection-card-shade" />
      <div className="collection-card-top">
        <span>{collection.eyebrow}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <div className="collection-card-bottom">
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
        <span className="collection-open">Explore collection <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
