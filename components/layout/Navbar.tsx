import Link from "next/link";
import CartIcon from "@/components/cart/CartIcon";

const navLinks = [
  { href: "/necklaces", label: "Necklaces" },
  { href: "/rings", label: "Rings" },
  { href: "/earrings", label: "Earrings" },
  { href: "/bracelets", label: "Bracelets" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-gold/20 bg-brand-white/70 backdrop-blur">
      {/* Full-width bar */}
      <div className="w-full px-6 lg:px-12">
        {/* 3-column layout */}
        <div className="grid h-16 grid-cols-3 items-center">
          {/* Left: Brand */}
          <div className="justify-self-start">
            <Link
              href="/"
              className="font-serif text-xl tracking-wide text-brand-purple"
            >
              VIVE JEWEL
            </Link>
          </div>

          {/* Center: Nav */}
          <nav className="justify-self-center hidden md:flex items-center gap-8 font-serif text-md text-brand-purple">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-brand-purple transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: Cart */}
          <div className="justify-self-end">
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
