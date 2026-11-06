"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ArchiveImage } from "../../data/archive";

type ArchiveGalleryProps = {
  images: ArchiveImage[];
  title: string;
};

const IMAGES_PER_PAGE = 8;

export default function ArchiveGallery({ images, title }: ArchiveGalleryProps) {
  const [galleryImages, setGalleryImages] = useState(images);
  const [page, setPage] = useState(1);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  // Shuffle once when the gallery mounts so each visit gets a fresh sequence.
  // Keeping the initial server/client render in the original order avoids hydration mismatches.
  useEffect(() => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setGalleryImages(shuffled);
    setPage(1);
    setMobileIndex(0);
  }, [images]);

  const pageCount = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const pageImages = galleryImages.slice(
    (page - 1) * IMAGES_PER_PAGE,
    page * IMAGES_PER_PAGE
  );

  const showPrevious = () =>
    setActiveImage((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  const showNext = () =>
    setActiveImage((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // Navigation callbacks use the current image count and are stable for this gallery.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage, galleryImages.length]);

  if (galleryImages.length === 0) return null;

  const selectedImage = activeImage === null ? null : galleryImages[activeImage];
  const showMobilePrevious = () =>
    setMobileIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  const showMobileNext = () =>
    setMobileIndex((current) => (current + 1) % galleryImages.length);
  const mobileImage = galleryImages[mobileIndex];

  return (
    <section className="archive-gallery-section" aria-labelledby="archive-gallery-title">
      <div className="section-heading archive-gallery-heading">
        <div>
          <p className="eyebrow">MOMENTS FROM THE ARCHIVE</p>
          <h2 id="archive-gallery-title">Through the <span>lens.</span></h2>
          <p className="archive-gallery-intro">
            Live sets, festival atmosphere, and places along the way.
          </p>
        </div>
        <span className="archive-gallery-count">
          {String(galleryImages.length).padStart(2, "0")} PHOTOS
        </span>
      </div>

      <div className="archive-gallery-mobile" aria-label="Photo carousel">
        <div className="archive-gallery-mobile-image-wrap">
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            fill
            sizes="100vw"
            className="archive-gallery-image"
            priority={mobileIndex === 0}
          />
          <span className="archive-gallery-image-index">
            {String(mobileIndex + 1).padStart(2, "0")}
          </span>
          <div className="archive-gallery-mobile-arrows">
            <button
              type="button"
              onClick={showMobilePrevious}
              aria-label="Previous gallery image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showMobileNext}
              aria-label="Next gallery image"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
        <div className="archive-gallery-mobile-caption-row">
          <span className="archive-gallery-caption">{mobileImage.caption}</span>
          <span className="archive-gallery-mobile-count" aria-live="polite">
            {mobileIndex + 1} / {galleryImages.length}
          </span>
        </div>
      </div>

      <div className="archive-gallery-grid">
        {pageImages.map((image, index) => {
          const imageIndex = (page - 1) * IMAGES_PER_PAGE + index;
          return (
            <button
              className="archive-gallery-card"
              type="button"
              key={`${image.src}-${imageIndex}`}
              onClick={() => setActiveImage(imageIndex)}
              aria-label={`View photo: ${image.caption}`}
            >
              <span className="archive-gallery-image-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="archive-gallery-image"
                />
                <span className="archive-gallery-image-index">
                  {String(imageIndex + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="archive-gallery-caption">{image.caption}</span>
            </button>
          );
        })}
      </div>

      {pageCount > 1 ? (
        <nav className="archive-gallery-pagination" aria-label="Gallery pages">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span>PAGE {page} / {pageCount}</span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
            disabled={page === pageCount}
          >
            Next <ChevronRight size={16} />
          </button>
        </nav>
      ) : null}

      {selectedImage ? (
        <div
          className="archive-lightbox"
          role="presentation"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="archive-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} photo gallery`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="archive-lightbox-close"
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close photo viewer"
            >
              <X size={22} />
            </button>
            <button
              className="archive-lightbox-arrow archive-lightbox-prev"
              type="button"
              onClick={showPrevious}
              aria-label="Previous photo"
            >
              <ChevronLeft size={25} />
            </button>
            <div className="archive-lightbox-image-wrap">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                priority
                className="archive-lightbox-image"
              />
            </div>
            <button
              className="archive-lightbox-arrow archive-lightbox-next"
              type="button"
              onClick={showNext}
              aria-label="Next photo"
            >
              <ChevronRight size={25} />
            </button>
            <div className="archive-lightbox-caption">
              <span>{selectedImage.caption}</span>
              <small>{String((activeImage ?? 0) + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</small>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
