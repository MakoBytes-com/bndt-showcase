import Link from "next/link";

// Copyright notice for this portfolio demo. Mako Logics LLC designed and built the site
// for its client Burton NDT Rentals (live at bndtrentals.com); this copy is a frozen
// showcase. Only Mako's own work is claimed here — the design, layout and code. Burton's
// name, logo, photos and business details, and the equipment brands and product images,
// belong to their owners, which is why no image on this demo carries a Mako watermark.

export const COPYRIGHT_OWNER = "Mako Logics LLC";
export const COPYRIGHT_YEAR = 2026;
export const COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved.`;
export const COPYRIGHT_NOTICE = `${COPYRIGHT_LINE} This demo is protected by copyright. Using its design, layout or code requires a license from ${COPYRIGHT_OWNER}.`;
export const THIRD_PARTY_NOTICE =
  "The Burton NDT Rentals name, logo, photos and business details, and the equipment brands and product images shown, belong to their respective owners and are shown for demonstration only.";
export const LICENSE_CONTACT_URL = "https://makoai.studio/#contact";

/** Sits at the foot of the home hero, in normal flow, so it can never cover the hero copy. */
export function HeroCopyrightNotice() {
  return (
    <aside aria-label="Copyright notice" className="border-t border-white/10 bg-black/45">
      <div className="mx-auto w-full max-w-6xl px-5 py-3 text-[12.5px] leading-snug text-white/75 sm:px-6 lg:px-8">
        <p>
          <strong className="font-semibold text-white">{COPYRIGHT_LINE}</strong> This demo is
          protected by copyright. Using its design, layout or code requires a license from{" "}
          {COPYRIGHT_OWNER}.{" "}
          <Link
            href="/license"
            className="font-semibold text-white underline decoration-[var(--color-accent)] underline-offset-4 hover:decoration-white"
          >
            License terms →
          </Link>
        </p>
      </div>
    </aside>
  );
}

/** Footer block: the full notice, the third-party line and the link to the license page. */
export function FooterCopyright() {
  return (
    <div className="mt-6 max-w-3xl space-y-2 text-[13px] leading-relaxed text-white/60">
      <p>
        <strong className="font-semibold text-white">{COPYRIGHT_LINE}</strong> This demo is
        protected by copyright. Using its design, layout or code requires a license from{" "}
        {COPYRIGHT_OWNER}.{" "}
        <Link
          href="/license"
          className="font-semibold text-white underline decoration-[var(--color-accent)] underline-offset-4 hover:decoration-white"
        >
          How to license it
        </Link>
      </p>
      <p>{THIRD_PARTY_NOTICE}</p>
    </div>
  );
}
