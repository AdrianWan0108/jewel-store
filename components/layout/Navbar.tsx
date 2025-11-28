import Link from "next/link";
import CartIcon from "@/components/cart/CartIcon";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-brand-gold/20 bg-brand-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl text-brand-purple">
          VIVE JEWEL
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 text-sm text-brand-purple md:flex">
          <Link href="/necklaces">Necklaces</Link>
          <Link href="/rings">Rings</Link>
          <Link href="/earrings">Earrings</Link>
          <Link href="/bracelets">Bracelets</Link>
          <Link href="/about">About</Link>

          {/* Cart with count */}
          <CartIcon />
        </div>

        {/* Mobile placeholder */}
        <div className="md:hidden">
          {/* later: mobile menu */}
          <CartIcon />
        </div>
      </div>
    </nav>
  );
}
