import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FullLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* full-bleed area */}
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
