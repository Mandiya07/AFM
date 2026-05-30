import { motion } from 'motion/react';
import { ArrowRight, Scissors, Edit3, Image as ImageIcon, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import casketBespoke from '../assets/images/casket_bespoke_1780108126500.png';

export default function CustomCaskets() {
  const steps = [
    { icon: Edit3, title: "1. Consultation", desc: "Meet with our master craftsmen to discuss your vision, honoring the legacy of your loved one." },
    { icon: Scissors, title: "2. Selection", desc: "Choose from ethically sourced solid woods, premium veneers, and luxurious interior fabrics." },
    { icon: ImageIcon, title: "3. Personalisation", desc: "Integrate custom engravings, symbolic artwork, or bespoke hardware and handle styles." },
    { icon: Box, title: "4. Creation", desc: "Our team meticulously constructs and hand-finishes your custom casket with unparalleled dignity." }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Bespoke Personalisation</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          A deeply personal tribute. Work with our master craftsmen to design a bespoke casket incorporating custom woods, specialized engravings, and luxurious custom interiors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="order-2 lg:order-1">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm"
                >
                  <step.icon className="w-8 h-8 text-gold-500 mb-4" />
                  <h3 className="text-xl font-serif text-charcoal-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">{step.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>
        <div className="order-1 lg:order-2">
           <img 
              src={casketBespoke} 
              alt="Bespoke Casket Details" 
              className="w-full h-[600px] object-cover rounded-sm shadow-md"
           />
        </div>
      </div>

      <div className="bg-charcoal-900 text-white rounded-sm p-10 md:p-16 text-center max-w-4xl mx-auto">
         <h2 className="text-3xl font-serif mb-6">Begin Your Custom Tribute</h2>
         <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Our compassionate team is ready to guide you through the bespoke process. Contact us to schedule a private consultation.
         </p>
         <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors duration-300 rounded-sm font-medium tracking-wide">
            Request Consultation
         </Link>
      </div>
    </div>
  );
}

