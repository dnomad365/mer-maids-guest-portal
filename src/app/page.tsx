import Link from "next/link";
import { properties } from "@/lib/properties";

const featuredProperties = properties.slice(0, 6);

const upsells = [
  {
    title: "Kayaks on Demand",
    description:
      "Same-day kayak delivery for your guests. Choose your drop-off time, unlock by SMS, and let the photos sell your listing.",
    cta: "Book Kayaks",
    href: "https://kayaksondemand.com/book",
  },
  {
    title: "Mid-Stay Refresh",
    description:
      "Offer a fresh set of linens, a light clean, or a full turnover during longer stays. Stripe checkout ready for instant upsells.",
    cta: "Add Cleaning Upgrade",
    href: "#mid-stay",
  },
  {
    title: "Trash Valet",
    description:
      "Daily trash pull, exterior sweep, and guest-ready curb checks handled by Titus & Talon. Automate it with Hostaway events.",
    cta: "Schedule Valet",
    href: "#trash-valet",
  },
  {
    title: "Local Experiences",
    description:
      "Bundle partner offers: sunset cruises, grocery drops, beach gear rentals. Earn affiliate income while delighting guests.",
    cta: "Curate Offers",
    href: "#experiences",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
      <header className="mx-auto max-w-6xl px-6 py-16 sm:flex sm:flex-col sm:gap-6">
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-600">Mer-Maids Guest Concierge Hub</p>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          One QR code unlocks every house detail, every upsell, every guest delight.
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Drop this portal into every SWFL rental you service. Guests scan a QR code, get WiFi + house rules, and can instantly upgrade
          their stay with Kayaks on Demand, mid-stay cleans, trash valet, or hand-picked local experiences. Automations feed your ops team
          via Slack/Telegram—and cash hits the account while you sleep.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#upsells"
            className="rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-500"
          >
            Explore Upsell Blocks
          </a>
          <a
            href="#properties"
            className="rounded-full border border-emerald-200 px-6 py-3 text-emerald-700 transition hover:border-emerald-600 hover:text-emerald-900"
          >
            Property Data Feed
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <section id="upsells" className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-emerald-50 backdrop-blur">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-emerald-600">Monetize every stay</p>
            <h2 className="text-3xl font-semibold text-slate-900">Turn guests into revenue with plug-and-play upsell blocks</h2>
            <p className="text-slate-600">
              Each block becomes a CTA in the portal. Tie them to Stripe checkout, Calendly, or internal automations. Events push into Slack/Telegram so
              Titus & Talon know exactly what to deliver.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upsells.map((upsell) => (
              <div key={upsell.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow">
                <h3 className="text-xl font-semibold text-slate-900">{upsell.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{upsell.description}</p>
                <Link
                  href={upsell.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                >
                  {upsell.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="properties" className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-emerald-600">Live data feed</p>
            <h2 className="text-3xl font-semibold text-slate-900">30 Mer-Maids properties, ready for QR deployment</h2>
            <p className="text-slate-600">
              This feed mirrors your Bubbles knowledge base. Each property block auto-populates the guest portal with address, trash day, and optional
              WiFi/notes (door codes only surface in secure contexts).
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProperties.map((property) => (
              <article key={property.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">SWFL</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{property.name}</h3>
                <p className="text-sm text-slate-600">{property.address}</p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <div className="rounded-xl bg-emerald-50 px-3 py-1 text-emerald-700">Trash Day: {property.trashDay}</div>
                  <div className="rounded-xl bg-slate-50 px-3 py-1 text-slate-600">Door Code: {property.doorCode}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            Need the full 30-house CSV or API feed? Hook into /api/properties for real-time sync.
          </div>
        </section>

        <section className="rounded-3xl border border-white/60 bg-slate-900 p-8 text-white shadow-emerald-200">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-emerald-200">Automation Hooks</p>
            <h2 className="text-3xl font-semibold">Hostaway → QR → Inbox, fully autonomous</h2>
            <p className="text-white/70">
              - Hostaway check-in event triggers QR email + SMS with property-specific URL.<br />
              - Guest clicks an upsell → Slack/Telegram alert + Google Calendar event for Titus/Talon.<br />
              - Post-stay drip nurtures owners for PM contracts and guests for repeat bookings.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold text-emerald-200">Check-in trigger</p>
              <p className="text-sm text-white/80">Auto-send QR link + printable card.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold text-emerald-200">Upsell signals</p>
              <p className="text-sm text-white/80">Stripe, KoD, or partner bookings alert ops instantly.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold text-emerald-200">Analytics</p>
              <p className="text-sm text-white/80">QR scans, upsell revenue, partner commissions.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/80 py-8 text-center text-xs text-slate-500">
        Mer-Maids Concierge Hub • Powered by Nomad • SWFL ▸ QR-first guest experience
      </footer>
    </div>
  );
}
