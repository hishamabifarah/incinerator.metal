import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// A simple shared footer keeps navigation consistent across every route.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-brand" href="/">INCINERATOR<span>.</span></Link>
        <p>A personal archive of heavy music and the things it leaves behind.</p>
      </div>
      <div className="footer-links">
        <Link href="/archive/live">Live history</Link>
        <Link href="/archive/vinyl">Vinyl vault</Link>
        <Link href="/about">About this archive <ArrowUpRight size={13} /></Link>
      </div>
      <div className="footer-bottom">
        <span>BUILT FROM LOUD MEMORIES</span>
        <span>© {new Date().getFullYear()} INCINERATOR</span>
      </div>
    </footer>
  );
}
