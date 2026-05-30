import { motion } from 'motion/react';
import { ArrowRight, Droplets, Hammer, Layers, Factory, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import casketHero from '../assets/images/casket_hero_1780108055321.png';
import manufacturingProcess from '../assets/images/manufacturing_process_1780108145734.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-900">
           <img 
              src={casketHero} 
              alt="Premium Woodworking Craftsmanship" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-5xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium mb-6 leading-tight tracking-tight"
          >
            Honouring Lives with<br/>Artistry and Dignity
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
          >
            Premier manufacturers of standard coffins, exquisite mouldings, and bespoke personalised caskets in Johannesburg.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogue" className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white transition-colors duration-300 rounded-sm font-medium tracking-wide">
              Request a Catalogue
            </Link>
            <Link to="/products" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-colors duration-300 rounded-sm font-medium tracking-wide">
              View Products
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-8"
          >
            A Legacy of Craftsmanship
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal-700 leading-relaxed font-light"
          >
            Based in the industrial heart of Johannesburg, we are premier manufacturers dedicated to creating dignified, high-quality final resting places. We combine master woodworking with deep respect to produce exquisite standard coffins, specialised mouldings, and bespoke, personalised caskets.
          </motion.p>
        </div>
      </section>

      {/* Why Choose AFM */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">Why Choose AFM</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Hammer, title: "Master Craftsmanship", desc: "Decades of woodworking expertise ensuring superior finishes and structural integrity." },
              { icon: Droplets, title: "Unmatched Personalisation", desc: "Bespoke modifications, custom engraving, and personalized trims for a unique tribute." },
              { icon: Layers, title: "Premium Materials", desc: "Ethically sourced solid woods and high-grade veneers selected for durability and beauty." },
              { icon: Factory, title: "Industrial Capacity", desc: "Robust manufacturing capabilities designed to meet high-volume wholesale demands consistently." },
              { icon: Users, title: "Direct B2B Support", desc: "Dedicated account management ensuring rapid fulfillment for funeral parlours and distributors." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-ivory p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-gray-50 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-charcoal-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-charcoal-900 mb-3">{feature.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">Manufacturing<br/><span className="text-gold-600">Excellence</span></h2>
              <p className="text-charcoal-700 leading-relaxed mb-8">
                Operating from our advanced industrial facility in Johannesburg, we maintain rigorous control over every stage of the manufacturing process. From raw timber selection to the final high-gloss polish, our quality assurance protocols ensure every casket meets our exacting standards.
              </p>
              <ul className="space-y-4 mb-10">
                {['Precision timber selection and curing', 'Advanced woodworking and joinery', 'Hand-applied premium finishing', 'Rigorous quality control inspection', 'Secure nationwide distribution'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-charcoal-700 font-medium tracking-wide">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/manufacturing" className="inline-flex items-center gap-2 text-charcoal-900 font-medium hover:text-gold-600 border-b border-charcoal-900 hover:border-gold-600 pb-1 transition-colors">
                Explore Our Process <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <img src={manufacturingProcess} alt="Manufacturing process" className="w-full h-full object-cover" />
               <div className="absolute inset-0 border-[12px] border-charcoal-900/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-charcoal-900 py-20 border-t-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { num: "35+", label: "Years Experience" },
              { num: "50k+", label: "Units Manufactured" },
              { num: "120+", label: "Distribution Partners" },
              { num: "Nationwide", label: "Coverage" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">{stat.num}</div>
                <div className="text-sm tracking-widest uppercase text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA Banner */}
      <section className="bg-charcoal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Abstract pattern placeholder */}
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Partner With AFM</h2>
          <p className="text-gray-300 text-lg mb-10 font-light max-w-2xl mx-auto">
            Discover how our industrial capacity and commitment to dignity can support your funeral business.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-sm font-medium transition-colors">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
