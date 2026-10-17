import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteCartProvider } from "@/components/QuoteCart";
import { CartDrawer } from "@/components/CartDrawer";
import { BackToTop } from "@/components/BackToTop";
import { DemoPill } from "@/components/DemoPill";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_NOTICE,
  COPYRIGHT_OWNER,
  COPYRIGHT_YEAR,
  THIRD_PARTY_NOTICE,
} from "@/components/Copyright";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

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
  authors: [{ name: COPYRIGHT_OWNER, url: "https://makoai.studio" }],
  creator: COPYRIGHT_OWNER,
  publisher: COPYRIGHT_OWNER,
  other: { copyright: COPYRIGHT_LINE },
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

// The demo's own design and code belong to Mako Logics LLC; the business it depicts is
// Burton NDT Rentals. Both appear in the graph so neither claim is confused for the other.
const copyrightHolder = {
  "@type": "Organization",
  "@id": `${SITE.url}#copyright-holder`,
  name: COPYRIGHT_OWNER,
  url: "https://makoai.studio",
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  url: SITE.url,
  name: `${SITE.name} (portfolio demo by ${COPYRIGHT_OWNER})`,
  about: { "@id": `${SITE.url}#organization` },
  creator: { "@id": copyrightHolder["@id"] },
  publisher: { "@id": copyrightHolder["@id"] },
  copyrightHolder: { "@id": copyrightHolder["@id"] },
  copyrightYear: COPYRIGHT_YEAR,
  copyrightNotice: `${COPYRIGHT_NOTICE} ${THIRD_PARTY_NOTICE}`,
  license: `${SITE.url}/license`,
};

const orgSchema = {
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
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [copyrightHolder, websiteSchema, orgSchema],
            }),
          }}
        />
      </body>
    </html>
  );
}
