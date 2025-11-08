import { Play, Star } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Classic Vanilla Layer Cake",
    level: "Beginner",
    price: 12,
    rating: 4.9,
    runtime: "24 min",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Silky Swiss Meringue Buttercream",
    level: "Intermediate",
    price: 15,
    rating: 4.8,
    runtime: "19 min",
    image:
      "https://images.unsplash.com/photo-1599785209794-f76b5d4c5df1?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chocolate Mirror Glaze Mastery",
    level: "Advanced",
    price: 22,
    rating: 4.9,
    runtime: "32 min",
    image:
      "https://images.unsplash.com/photo-1614704081546-092b7b9bf9ad?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Modern Piping & Floral Decoration",
    level: "Intermediate",
    price: 18,
    rating: 4.7,
    runtime: "27 min",
    image:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function LessonCatalog() {
  return (
    <section id="catalog" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Lessons
          </h2>
          <p className="mt-2 text-gray-600">
            High-impact videos to level up your baking — each lesson is a one-time purchase.
          </p>
        </div>
        <a href="#pricing" className="hidden rounded-lg bg-rose-600 px-4 py-2 text-white shadow hover:bg-rose-500 sm:block">
          See Pricing
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((l) => (
          <article key={l.id} className="group overflow-hidden rounded-xl bg-white shadow ring-1 ring-gray-100">
            <div className="relative">
              <img src={l.image} alt={l.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                {l.level}
              </div>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">{l.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <span className="text-sm text-gray-700">{l.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{l.runtime}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${l.price}</span>
                <button className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-rose-500">
                  <Play className="h-4 w-4" /> Buy lesson
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
