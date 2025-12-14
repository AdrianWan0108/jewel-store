import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContainedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-12 py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
