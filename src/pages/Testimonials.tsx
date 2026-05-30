import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Partner Testimonials</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          Hear from the funeral directors and distributors who trust AFM as their manufacturing partner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm relative pt-12">
            <div className="text-gold-500 text-6xl font-serif absolute top-4 left-6 opacity-30">"</div>
            <p className="text-charcoal-700 italic mb-8 relative z-10 leading-relaxed">
              "{t.quote}"
            </p>
            <div>
              <p className="font-serif text-charcoal-900 font-medium">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
