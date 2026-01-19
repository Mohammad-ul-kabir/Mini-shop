import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-10">
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Minimal online shop.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-zinc-600">
          Clean UI, tiny features. We’ll add functionality step by step.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link
            to="/shop"
            className="inline-flex rounded-2xl bg-zinc-950 px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Browse products
          </Link>

          <Link
            to="/shop"
            className="inline-flex rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 hover:text-zinc-950"
          >
            View cart later →
          </Link>
        </div>
      </div>
    </section>
  );
}
