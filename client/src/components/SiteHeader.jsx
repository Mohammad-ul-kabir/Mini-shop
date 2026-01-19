import { Link, NavLink } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-semibold tracking-tight">
          Simple Shop
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-zinc-950" : "hover:text-zinc-950"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-zinc-950" : "hover:text-zinc-950"
            }
          >
            Shop
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
