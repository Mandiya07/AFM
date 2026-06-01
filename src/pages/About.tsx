import { motion } from 'motion/react';
import { DR_IMAGES } from '../images';

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Our Heritage</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p className="text-lg text-charcoal-700">
          A commitment to dignity, crafted through decades of master woodworking and industrial manufacturing excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <img 
            src={DR_IMAGES[6]} 
            alt="Craftsmanship" 
            className="w-full h-[500px] object-cover rounded-sm shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif text-charcoal-900 mb-6">The AFM Philosophy</h2>
          <p className="text-charcoal-700 leading-relaxed mb-6">
            At Art Furniture and Mouldings, we believe that the final resting place should be a profound reflection of a life lived. Operating from our expansive facility in Industria, Johannesburg, we merge traditional artisanal woodworking with modern industrial scale.
          </p>
          <p className="text-charcoal-700 leading-relaxed">
            Our mission is to supply premier funeral parlours and distributors with products that never compromise on quality. Every edge, finish, and upholstery stitch is inspected to ensure it meets our exacting standard of respect and dignity.
          </p>
        </div>
      </div>
    </div>
  );
}
