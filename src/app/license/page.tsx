import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_OWNER,
  LICENSE_CONTACT_URL,
  THIRD_PARTY_NOTICE,
} from "@/components/Copyright";

export const metadata: Metadata = {
  title: "License & Copyright",
  description: `What ${COPYRIGHT_OWNER} owns on this portfolio demo, what belongs to others, and how to license the design.`,
  alternates: { canonical: "/license" },
};

const PROTECTED = [
  {
    title: "The design",
    body: "The look and arrangement of the site taken together: the page layouts, the order of the sections, the home page hero, the equipment catalog structure, the quote cart, and the way color, type and spacing are combined across every page.",
  },
  {
    title: "The code",
    body: "The source code behind the site, including its components, the quote cart and drawer, the catalog and page templates, the styling and the way the pages are put together.",
  },
  {
    title: "Screenshots and recordings",
    body: "Any screenshot, screen recording or saved copy of these pages, to the extent it reproduces the design or code above.",
  },
];

const NOT_ALLOWED = [
  "Copying the layout, section order, page templates or overall look of this demo for another website, even with your own wording, photos or logo.",
  "Copying, downloading or reusing the site's code, styling or components.",
  "Using a screenshot of this demo as the reference or prompt for an AI design, image or website-building tool.",
  "Removing or covering the copyright notices on these pages.",
];

export default function LicensePage() {
  return (
    <>
      <PageHero
        eyebrow="License & copyright"
        title="This demo is protected by copyright"
        description={`${COPYRIGHT_LINE} You are welcome to look around and share the link. Reusing the design or code requires a written license.`}
      />

      <section className="bg-canvas py-16 lg:py-20">
        <Container size="narrow">
          <div className="space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              {COPYRIGHT_OWNER} designed and built this website for its client, Burton NDT Rentals.
              Burton&apos;s own site is live at{" "}
              <a
                href="https://www.bndtrentals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline underline-offset-4 hover:text-brand-light"
              >
                bndtrentals.com
              </a>
              . The copy you are looking at is a portfolio demo that {COPYRIGHT_OWNER} keeps to show
              its work.
            </p>
            <p>
              Using the design or code on your own website, in your marketing, or as the starting
              point for something new requires a written license from {COPYRIGHT_OWNER}.
            </p>
          </div>

          <section className="mt-14" aria-labelledby="protected-heading">
            <h2 id="protected-heading" className="text-2xl font-bold text-ink">
              What {COPYRIGHT_OWNER} owns here
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {PROTECTED.map((p) => (
                <div key={p.title} className="rounded-2xl border border-line bg-canvas-tint p-6">
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="others-heading">
            <h2 id="others-heading" className="text-2xl font-bold text-ink">
              What belongs to others
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              {THIRD_PARTY_NOTICE} {COPYRIGHT_OWNER} does not claim them, and does not license them.
              If you want to use any of them, ask the business or brand that owns it.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="not-allowed-heading">
            <h2 id="not-allowed-heading" className="text-2xl font-bold text-ink">
              Not allowed without a license
            </h2>
            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-ink-soft">
              {NOT_ALLOWED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 font-bold text-accent">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14" aria-labelledby="proof-heading">
            <h2 id="proof-heading" className="text-2xl font-bold text-ink">
              How ownership is recorded
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              {COPYRIGHT_OWNER} keeps the source code and its dated version history for every part of
              this build. Copies found elsewhere can be matched against it, and unlicensed use will be
              reported to the host and pursued.
            </p>
          </section>

          <section
            className="mt-14 rounded-2xl border border-brand/30 bg-canvas-tint p-8"
            aria-labelledby="license-heading"
          >
            <h2 id="license-heading" className="text-2xl font-bold text-ink">
              How to license the design or get one built
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
              Send {COPYRIGHT_OWNER} a message through Mako Studio and you will get a reply with
              terms and pricing. Please don&apos;t use this demo&apos;s quote or contact forms for
              this: those go to Burton NDT Rentals.
            </p>
            <a
              href={LICENSE_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-[15px] font-bold text-white hover:bg-[var(--color-accent-dark)]"
            >
              Contact Mako Studio about a license
            </a>
          </section>
        </Container>
      </section>
    </>
  );
}
