import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Disc3, Flame, Camera, Archive } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Why the Incinerator personal metal archive exists.",
};

// A dedicated about page gives the project a personal voice without cluttering
// the homepage with a long biography.
export default function AboutPage() {
  return (
    <div className="page-wrap about-page">
      <section className="about-hero">
        <p className="eyebrow">ABOUT THE ARCHIVE / A PERSONAL DOCUMENT</p>
        <h1>Made of noise.<br /><span>Kept with intent.</span></h1>
        <p className="about-lead">INCINERATOR is a personal archive built around heavy music, live experiences, physical records, and the small objects that hold surprisingly big memories.</p>
      </section>

      <section className="about-story-grid">
        <div className="about-story-symbol"><Flame size={34} strokeWidth={1.2} /></div>
        <div>
          <p className="eyebrow">THE REASON</p>
          <h2>Because a memory<br />deserves a place.</h2>
        </div>
        <div className="about-story-body">
          <p>Photos disappear into camera rolls. Wristbands end up in drawers. Records gather stories that never make it onto the sleeve. This project brings those pieces together in one place.</p>
          <p>It is part catalogue, part visual diary, and part reminder of the places, artists, and people that make heavy music more than something you listen to.</p>
        </div>
      </section>

      <section className="about-pillars">
        <article><Disc3 size={23} /><p className="eyebrow">01 / THE MUSIC</p><h3>Records with history.</h3><p>Vinyl, signed editions, and the albums that keep earning another spin.</p></article>
        <article><Camera size={23} /><p className="eyebrow">02 / THE MOMENTS</p><h3>Proof it happened.</h3><p>Live shows, festivals, backstage encounters, and photographs from the road.</p></article>
        <article><Archive size={23} /><p className="eyebrow">03 / THE OBJECTS</p><h3>Small things. Big stories.</h3><p>Wristbands, cups, tickets, and memorabilia that carry a place and a date.</p></article>
      </section>

      <section className="about-end">
        <p className="eyebrow">THIS ARCHIVE IS ALWAYS IN PROGRESS</p>
        <h2>The next memory<br />hasn't been filed yet.</h2>
        <Link className="button button-primary" href="/archive/live">Explore the archive <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
