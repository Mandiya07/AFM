import { Shield, Truck, Package, Banknote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Wholesale() {
  const features = [
    { icon: Package, title: "High-Volume Production", desc: "Our Industria facility is equipped to handle bulk manufacturing without sacrificing quality or finish." },
    { icon: Truck, title: "Nationwide Logistics", desc: "Reliable, secure fleet delivery to funeral parlours and distribution centers across South Africa." },
    { icon: Shield, title: "Quality Guaranteed", desc: "Every unit undergoes strict quality assurance. We stand by the structural integrity of our products." },
    { icon: Banknote, title: "Trade Pricing", desc: "Competitive wholesale tiers exclusively structured for registered funeral directors and resellers." }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Wholesale & Distribution</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          Partner with AFM for reliable, high-volume supply. We equip funeral parlours and distributors with premium stock crafted efficiently in our Johannesburg facility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {features.map((f, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: idx * 0.1 }}
             className="bg-ivory p-8 border border-gray-100 rounded-sm text-center"
           >
             <f.icon className="w-10 h-10 text-gold-600 mx-auto mb-4" strokeWidth={1.5} />
             <h3 className="font-serif text-lg text-charcoal-900 mb-2">{f.title}</h3>
             <p className="text-sm text-charcoal-600 leading-relaxed">{f.desc}</p>
           </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-sm p-8 md:p-12 shadow-sm">
         <h2 className="text-3xl font-serif text-charcoal-900 mb-8 text-center">B2B Account Application</h2>
         <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Business Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
            </div>
            <div>
               <label className="block text-sm font-medium text-charcoal-700 mb-2">Estimated Monthly Volume</label>
               <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none bg-white">
                  <option>Less than 10 units</option>
                  <option>10 - 50 units</option>
                  <option>50 - 200 units</option>
                  <option>200+ units</option>
               </select>
            </div>
            <button className="w-full py-4 bg-charcoal-900 hover:bg-gold-600 text-white font-medium rounded-sm transition-colors mt-4">
               Submit Trade Inquiry
            </button>
         </form>
      </div>
    </div>
  );
}

