import HomeHero from "../components/HomeHero";
import SimpleFooter from "../components/SimpleFooter";
import SiteHeader from "../components/SiteHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <HomeHero />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <Feature
            title="Minimal UI"
            text="Neutral palette, spacing, clean cards."
          />
          <Feature
            title="Minimal logic"
            text="Hardcoded products, simple cart."
          />
          <Feature
            title="Grow later"
            text="Add routing, API, checkout when ready."
          />
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-3xl border border-zinc-200 p-6">
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-1 text-sm text-zinc-600">{text}</div>
    </div>
  );
}
