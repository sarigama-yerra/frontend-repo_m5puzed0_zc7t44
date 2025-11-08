import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Cake Basics",
    desc: "Foundations for sponges, fillings and frostings.",
    price: 10,
    perks: ["Step-by-step video", "Ingredient list & tools", "Lifetime access"],
  },
  {
    name: "Decoration Essentials",
    desc: "Piping, flowers, textures and finishes.",
    price: 20,
    perks: ["Intermediate skills", "Practice templates", "Chef tips"],
    highlighted: true,
  },
  {
    name: "Advanced Showpieces",
    desc: "Mirror glaze, tiers, structure & transport.",
    price: 30,
    perks: ["Advanced techniques", "Pro checklists", "HD closeups"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-rose-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, per-video pricing</h2>
          <p className="mt-2 text-gray-600">Purchase only what you need. No subscription required.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100 ${
                t.highlighted ? "border-2 border-rose-500 shadow-lg" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
              <div className="mt-4 text-4xl font-extrabold text-gray-900">${t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {p}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-rose-600 px-4 py-2 font-medium text-white transition hover:bg-rose-500">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
