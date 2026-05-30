import { motion } from 'motion/react';
import img1 from '../assets/images/casket_hero_1780108055321.png';
import img2 from '../assets/images/coffin_oak_1780108071438.png';
import img3 from '../assets/images/casket_dome_1780108087868.png';
import img4 from '../assets/images/moulding_wood_1780108104774.png';
import img5 from '../assets/images/casket_bespoke_1780108126500.png';
import img6 from '../assets/images/manufacturing_process_1780108145734.png';

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Gallery</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          A visual showcase of our master craftsmanship and premium finishes.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer"
          >
            <img src={src} alt={`AFM Craftsmanship ${i + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Detail</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

