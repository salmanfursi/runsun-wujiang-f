import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const item =
    "px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800 transition";
  const active = ({ isActive }: { isActive: boolean }) =>
    `${item} ${isActive ? "text-[#b35b28] font-semibold" : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Runsun
        </NavLink>

        {/* Left menu */}
        <div className="hidden md:flex gap-1">
          <NavLink to="/" className={active} end>
            Home
          </NavLink>
          <NavLink to="/collections" className={active}>
            Collections
          </NavLink>
          <NavLink to="/sustainability" className={active}>
            Sustainability
          </NavLink>
          <NavLink to="/colorcards" className={active}>
            Color Cards
          </NavLink>
          {/* Removed: Contact (left), Search bar */}
        </div>

        {/* Right-side Contract button */}
        <div className="flex items-center">
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 rounded-lg bg-[#b35b28] text-white hover:opacity-90 transition"
          >
            Contra----------ct
          </Link>
        </div>
      </nav>
    </header>
  );
}
