export default function PageLoading() {
  return (
    <main className="route-loading" role="status" aria-live="polite">
      <div className="route-loading-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="eyebrow">INCINERATOR / ARCHIVE</p>
      <p className="route-loading-label">Tuning the signal...</p>
      <span className="sr-only">Loading page content</span>
    </main>
  );
}
