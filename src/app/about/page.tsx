
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Disc3,
  Flame,
  Camera,
  Archive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Incinerator: a Lebanese metalhead, international metal festivals since 2014, and a personal archive of heavy music and unforgettable experiences.",
};

export default function AboutPage() {
  return (
    <div className="page-wrap about-page">
      <section className="about-hero">
        <p className="eyebrow">ABOUT THE ARCHIVE / THE PERSON BEHIND IT</p>

        <h1>
          Made of noise.
          <br />
          <span>Kept with intent.</span>
        </h1>

        <p className="about-lead">
          I'm a Lebanese metalhead with a passion for heavy music,
          international festivals, live shows, and everything that
          comes with being part of this world. INCINERATOR is where
          I keep those experiences, the music, and the memories
          that have stayed with me along the way.
        </p>
      </section>

      {/* First Hellfest — 2014 */}
      <section className="about-origin">
        <div className="about-origin-image">
          <Image
            src="/images/me.jpg"
            alt="At my first Hellfest in France in 2014"
            width={1600}
            height={1200}
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />

          <span className="about-image-caption">
            HELLFEST / FRANCE / 2014
          </span>
        </div>

        <div className="about-origin-copy">
          <p className="eyebrow">WHERE IT ALL STARTED / 2013–2014</p>

          <h2>
            One big band.
            <br />
            <span>One lifetime goal.</span>
          </h2>

          <p>
            Back in 2013, I remember thinking that I wanted to
            see at least one really big band live in my lifetime.
            That alone would have been enough.
          </p>

          <p>
            Then Hellfest announced its 2014 lineup. Iron Maiden,
            Black Sabbath, and Slayer were all on the bill. That
            was my cue. I knew I had to make the trip.
          </p>

          <p>
            I went to my first Hellfest in 2014. On the morning
            of the second day, I woke up and immediately had one
            thought: <strong>I want to come back.</strong>
          </p>

          <p>
            And that was it. What started as a goal to see a few
            legendary bands turned into a passion for metal
            festivals, discovering new bands, travelling for
            music, and experiencing the atmosphere that only
            these events can create.
          </p>

          <p>
            I've been attending international metal festivals
            since 2014, and that passion has only grown with
            every edition, every stage, and every new memory.
          </p>
        </div>
      </section>

      <section className="about-story-grid">
        <div className="about-story-symbol">
          <Flame size={34} strokeWidth={1.2} />
        </div>

        <div>
          <p className="eyebrow">WHY THIS ARCHIVE EXISTS</p>
          <h2>
            Because a memory
            <br />
            deserves a place.
          </h2>
        </div>

        <div className="about-story-body">
          <p>
            Over the years, the memories started adding up:
            festival photographs, concert tickets, wristbands,
            cups, signed records, band shirts, and encounters
            with artists whose music has meant a lot to me.
          </p>

          <p>
            I wanted somewhere to bring all of it together.
            Not just a folder of photographs or a list of
            concerts, but a personal archive that gives every
            experience its own place.
          </p>

          <p>
            That's what INCINERATOR is. A growing record of
            the music I've followed, the places I've travelled
            to, the artists I've seen, and the things I've
            collected along the way.
          </p>
        </div>
      </section>

      <section className="about-pillars">
        <article>
          <Disc3 size={23} />
          <p className="eyebrow">01 / THE MUSIC</p>
          <h3>Records with history.</h3>
          <p>
            Vinyl, signed editions, and the albums that keep
            earning another spin.
          </p>
        </article>

        <article>
          <Camera size={23} />
          <p className="eyebrow">02 / THE MOMENTS</p>
          <h3>More than a setlist.</h3>
          <p>
            Festivals, live shows, artist encounters, and
            photographs from years spent following the music.
          </p>
        </article>

        <article>
          <Archive size={23} />
          <p className="eyebrow">03 / THE OBJECTS</p>
          <h3>Small things. Big stories.</h3>
          <p>
            Wristbands, cups, tickets, shirts, and memorabilia
            that bring a particular moment back.
          </p>
        </article>
      </section>

      <section className="about-end">
        <p className="eyebrow">A PERSONAL ARCHIVE / ALWAYS IN PROGRESS</p>

        <h2>
          More festivals.
          <br />
          More records.
          <br />
          More memories to keep.
        </h2>

        <p className="about-end-copy">
          This archive is far from complete. There are still
          photographs to add, stories to document, and plenty
          of music experiences ahead.
        </p>

        <Link
          className="button button-primary"
          href="/#explore-archive"
        >
          Explore the archive <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
