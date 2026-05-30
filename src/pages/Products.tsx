import { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import { Link } from 'react-router-dom';

export default function Products() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'casket', label: 'Luxury Caskets' },
    { id: 'coffin', label: 'Standard Coffins' },
    { id: 'moulding', label: 'Mouldings & Trims' },
    { id: 'bespoke', label: 'Bespoke' },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Products & Services</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
          Explore our range of meticulously crafted coffins, caskets, and manufacturing components.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-sm text-sm font-medium transition-colors border ${
              filter === cat.id 
                ? 'bg-charcoal-900 text-white border-charcoal-900' 
                : 'bg-transparent text-charcoal-700 border-gray-300 hover:border-charcoal-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative h-80 overflow-hidden rounded-sm mb-6 bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-serif text-charcoal-900 mb-2">{product.name}</h3>
            <p className="text-sm text-gold-600 mb-3 tracking-wide uppercase">{product.material}</p>
            <p className="text-charcoal-600 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
            <Link to="/contact" className="text-sm font-medium border-b border-charcoal-900 pb-1 self-start hover:text-gold-600 hover:border-gold-600 transition-colors">
              Inquire Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
