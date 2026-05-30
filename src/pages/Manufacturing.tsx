import { motion } from 'motion/react';

export default function Manufacturing() {
  const steps = [
    { title: "Timber Selection", desc: "We source only premium grade solid woods and robust veneers, ensuring structural longevity." },
    { title: "Precision Assembly", desc: "Using advanced machinery alongside hand-crafted joinery for perfect seams." },
    { title: "Finishing & Polish", desc: "Multiple coats of high-grade varnish, hand-rubbed to achieve our signature matte or high-gloss finishes." },
    { title: "Upholstery", desc: "Master tailors craft the interior linings using premium velvet, crepe, or linen." },
    { title: "Quality Assurance", desc: "Every unit undergoes a rigorous 15-point inspection before packaging." },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Industrial Manufacturing</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          Discover our process. From timber selection to precision cutting, finishing, upholstery, and final quality inspection.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
         {/* Vertical strict line */}
         <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>
         
         <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                 <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                    <div className={`w-full max-w-sm bg-white p-8 rounded-sm border border-gray-100 shadow-sm ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                       <h3 className="text-2xl font-serif text-charcoal-900 mb-3">{step.title}</h3>
                       <p className="text-charcoal-600 leading-relaxed">{step.desc}</p>
                    </div>
                 </div>
                 
                 <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 transform -translate-x-1/2 ring-4 ring-white shadow-sm"></div>

                 <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}

