import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-gray-300 pt-20 pb-10 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                AFM<span className="text-gold-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Premier manufacturers of standard coffins, exquisite mouldings, and bespoke personalised caskets in Johannesburg. Honouring lives with artistry and dignity.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                 <span className="sr-only">Facebook</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products & Services', path: '/products' },
                { name: 'Custom Caskets', path: '/custom-caskets' },
                { name: 'Wholesale / B2B', path: '/wholesale' },
                { name: 'Manufacturing Process', path: '/manufacturing' },
                { name: 'Request Catalogue', path: '/catalogue' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-charcoal-700 group-hover:text-gold-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Corner Telford Road & Albertina Sisulu Road,<br/>Industria, Johannesburg, 2093</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+27 (0)11 839 1911</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:info@afm.co.za" className="hover:text-white transition-colors">info@afm.co.za</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-serif font-medium text-lg mb-6">Business Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white mb-1">Monday – Friday</p>
                  <p>08:00 – 17:00</p>
                </div>
              </li>
              <li className="border-t border-charcoal-800 pt-4 mt-2">
                <p className="text-gray-400 italic">Closed Weekends & Public Holidays</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AFM (Art Furniture and Mouldings). All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
