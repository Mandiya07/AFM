import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Custom Caskets', path: '/custom-caskets' },
    { name: 'Wholesale / B2B', path: '/wholesale' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkBg = location.pathname === '/' && !isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            {/* Logo placeholder */}
            <div className={cn(
              "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
              isDarkBg ? "text-white" : "text-charcoal-900"
            )}>
              AFM<span className="text-gold-500">.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isDarkBg ? "text-gray-200" : "text-charcoal-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-500",
                  isDarkBg ? "text-gray-200" : "text-charcoal-800"
                )}>
                More <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                 <Link to="/gallery" className="block px-4 py-3 text-sm text-charcoal-800 hover:bg-gray-50 hover:text-gold-600">Gallery</Link>
                 <Link to="/catalogue" className="block px-4 py-3 text-sm text-charcoal-800 hover:bg-gray-50 hover:text-gold-600">Catalogue</Link>
                 <Link to="/testimonials" className="block px-4 py-3 text-sm text-charcoal-800 hover:bg-gray-50 hover:text-gold-600">Testimonials</Link>
                 <Link to="/faq" className="block px-4 py-3 text-sm text-charcoal-800 hover:bg-gray-50 hover:text-gold-600">FAQ</Link>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-sm text-white bg-charcoal-900 hover:bg-gold-600 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             {mobileMenuOpen ? (
                <X className={cn("w-6 h-6", isDarkBg && !isScrolled && !mobileMenuOpen ? "text-white" : "text-charcoal-900")} />
             ) : (
                <Menu className={cn("w-6 h-6", isDarkBg ? "text-white" : "text-charcoal-900")} />
             )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 x-50 h-screen overflow-y-auto pb-32"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal-800 py-2 border-b border-gray-100 uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
               <Link
                  to="/catalogue"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal-800 py-2 border-b border-gray-100 uppercase tracking-wider"
                >
                  Catalogue
                </Link>
                 <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal-800 py-2 border-b border-gray-100 uppercase tracking-wider"
                >
                  FAQ
                </Link>
            </div>
            <div className="px-4 mt-6">
              <a href="tel:+27118391911" className="flex items-center gap-3 text-charcoal-600 mb-6">
                <Phone className="w-5 h-5 text-gold-500" />
                <span className="font-medium">+27 (0)11 839 1911</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-sm text-white bg-charcoal-900 hover:bg-gold-600 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
