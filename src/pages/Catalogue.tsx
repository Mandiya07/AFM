import { Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Catalogue() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Request Catalogue</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          Download our comprehensive product catalogue or request a physical copy for your funeral parlour.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-charcoal-900 p-12 rounded-sm text-center border border-charcoal-800 text-white shadow-lg"
         >
            <FileText className="w-16 h-16 text-gold-500 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-2xl font-serif mb-4">Digital Catalogue (PDF)</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
               Instantly download our latest 2026 product collection featuring high-resolution imagery, specifications, and available finishes.
            </p>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-sm font-medium transition-colors w-full">
               <Download className="w-5 h-5" />
               Download PDF
            </button>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-sm border border-gray-200 shadow-sm"
         >
            <h2 className="text-2xl font-serif text-charcoal-900 mb-6">Request Physical Copy</h2>
            <form className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1">Company / Parlour</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1">Delivery Address</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none"></textarea>
               </div>
               <button className="w-full py-3 bg-charcoal-900 hover:bg-gold-600 text-white font-medium rounded-sm transition-colors mt-2">
                  Request Delivery
               </button>
            </form>
         </motion.div>
      </div>
    </div>
  );
}

