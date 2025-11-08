import Hero from "./components/Hero";
import LessonCatalog from "./components/LessonCatalog";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-rose-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white font-bold">B</span>
            <span className="text-lg font-semibold">Blossom Bakery School</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#catalog" className="hover:text-rose-600">Lessons</a>
            <a href="#pricing" className="hover:text-rose-600">Pricing</a>
            <a href="#faq" className="hover:text-rose-600">FAQ</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-rose-500">Get a lesson</a>
        </div>
      </header>

      <main>
        <Hero />
        <LessonCatalog />
        <Pricing />
        <section id="faq">
          <FAQ />
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-rose-50/40">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Blossom Bakery School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#catalog" className="hover:text-rose-600">Catalog</a>
            <a href="#pricing" className="hover:text-rose-600">Pricing</a>
            <a href="#faq" className="hover:text-rose-600">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
