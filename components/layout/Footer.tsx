import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-brand-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-serif text-xl mb-4 text-brand-gold">VIVE JEWEL</h3>
          <p className="text-sm opacity-80">
            Wear your color, own your light.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-brand-gold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li><Link href="/necklaces">Necklaces</Link></li>
            <li><Link href="/rings">Rings</Link></li>
            <li><Link href="/earrings">Earrings</Link></li>
            <li><Link href="/bracelets">Bracelets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand-gold mb-2">About</h4>
          <ul className="space-y-1">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/care">Jewelry Care</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm py-4 border-t border-brand-gold/20">
        © 2025 VIVE JEWEL — All rights reserved.
      </div>
    </footer>
  );
}
