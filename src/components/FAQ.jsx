export default function FAQ() {
  const faqs = [
    {
      q: "How do I access purchased videos?",
      a: "After checkout, you'll receive instant access via your email plus they appear in your library. You can watch anytime, forever.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept major cards and secure wallets. All payments are encrypted and processed safely.",
    },
    {
      q: "Is there a refund if I'm not satisfied?",
      a: "Yes — 7‑day refund for lessons under 60 minutes if less than 30% watched.",
    },
    {
      q: "Can I download the recipes?",
      a: "Each lesson includes printable ingredient lists, tools and key steps.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked</h2>
          <p className="mt-2 text-gray-600">Everything you need to know about buying and watching lessons.</p>
        </div>
        <dl className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl bg-white p-5 shadow ring-1 ring-gray-100">
              <dt className="font-medium text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-gray-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
