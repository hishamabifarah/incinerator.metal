const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/",
    },
    {
        name: "Last.fm",
        href: "https://www.last.fm/user/incinerator",
    },
    {
        name: "Discogs",
        href: "https://www.discogs.com/user/incinerator.metal/collection",
    },
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div className="footer-identity">
                    <a href="/" className="footer-brand" aria-label="Incinerator Metal home">
                        INCINERATOR<span>.</span>
                    </a>

                    <p className="footer-tagline">A life shaped by metal.</p>
                </div>

                <nav className="footer-socials" aria-label="Social media">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit Incinerator Metal on ${link.name}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <p className="footer-copyright">
                    © 2026 Incinerator Metal
                </p>
            </div>
        </footer>
    );
}