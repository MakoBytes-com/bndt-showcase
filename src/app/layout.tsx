import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteCartProvider } from "@/components/QuoteCart";
import { CartDrawer } from "@/components/CartDrawer";
import { BackToTop } from "@/components/BackToTop";
import { DemoPill } from "@/components/DemoPill";
import "./globals.css";

// Fonts are loaded at runtime via a <link> to Google Fonts (see <head> below)
// rather than next/font/google. next/font downloads the font files from Google
// *at build time*, which makes `next build` fail whenever a CI runner cannot
// reach Google Fonts — an intermittent, ~30% failure that never hit Vercel's
// build (its egress is reliable). The runtime stylesheet keeps the build
// hermetic. The site's CSP (next.config.ts) already allows fonts.googleapis.com
// and fonts.gstatic.com for exactly this. The --font-inter / --font-display CSS
// variables consumed by globals.css are supplied on <html> below.
const fontVariables = {
  "--font-inter": "Inter",
  "--font-display": "Sora",
} as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "NDT equipment rental",
    "non-destructive testing",
    "ultrasonic testing",
    "RVI rental",
    "PMI analyzer rental",
    "X-Ray inspection",
    "industrial inspection equipment",
    "calibration services",
    "Texas NDT",
    "Olympus Eddyfi Niton rental",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#organization`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.primaryPhone,
  email: SITE.email,
  description: SITE.description,
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    streetAddress: "832 S. Broadway St.",
    addressLocality: "La Porte",
    addressRegion: "TX",
    postalCode: "77571",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/company/burton-ndt-rentals/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" style={fontVariables}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {/* Runtime font stylesheet. React hoists these <link>s into <head>.
            CSP (next.config.ts) already permits fonts.googleapis.com/gstatic.com. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Sora:wght@500;600;700;800&display=swap"
        />
        <DemoPill realUrl="https://www.bndtrentals.com" />
        <QuoteCartProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <CartDrawer />
          <BackToTop />
        </QuoteCartProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
