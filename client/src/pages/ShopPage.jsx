import { Link } from "react-router-dom";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Shop</h1>
          <Link to="/" className="text-sm text-zinc-600">
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
          Shop page ✅
        </div>
      </main>
    </div>
  );
}
