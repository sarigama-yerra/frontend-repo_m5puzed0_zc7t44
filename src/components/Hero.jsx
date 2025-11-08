import { Star, PlayCircle, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-rose-600 ring-1 ring-rose-200">
              <Star className="h-4 w-4 fill-rose-500/20" />
              <span className="text-sm font-medium">Bake like a pro — step-by-step videos</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Learn Modern Bakery & Cake Decoration
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Master cakes, decoration, pastries and more with bite-sized, paid lessons
              taught by expert pastry chefs. Clear techniques, beautiful results.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <PlayCircle className="h-5 w-5" />
                Browse Lessons
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-rose-600 ring-1 ring-rose-200 transition hover:bg-rose-50"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                Secure checkout
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                4.9/5 rated lessons
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl bg-white/80 p-3 shadow-xl ring-1 ring-rose-100 backdrop-blur">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1541782818602-87097bfa4d77?q=80&w=1470&auto=format&fit=crop"
                  alt="Elegant cake decoration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rotate-[-6deg] rounded-xl bg-rose-50 p-2 shadow md:block">
                <img
                  src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470&auto=format&fit=crop"
                  alt="French macarons"
                  className="h-28 w-28 rounded-lg object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -top-6 -right-6 hidden rotate-6 rounded-xl bg-rose-50 p-2 shadow md:block">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1470&auto=format&fit=crop"
                  alt="Chocolate glaze"
                  className="h-28 w-28 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
