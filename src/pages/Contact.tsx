import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Contact Us</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-charcoal-900 mb-8">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-charcoal-900 hover:bg-gold-600 text-white rounded-sm font-medium transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div>
           <h2 className="text-2xl font-serif text-charcoal-900 mb-8">Our Location</h2>
           <div className="bg-charcoal-900 text-white p-8 rounded-sm mb-8">
             <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1 font-serif text-lg">Address</strong>
                    <span className="text-gray-300">Corner Telford Road & Albertina Sisulu Road,<br/>Industria, Johannesburg, 2093</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1 font-serif text-lg">Phone</strong>
                    <span className="text-gray-300">+27 (0)11 839 1911</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1 font-serif text-lg">Email</strong>
                    <a href="mailto:info@afm.co.za" className="text-gold-400 hover:text-white transition-colors">info@afm.co.za</a>
                  </div>
                </li>
             </ul>
           </div>
           
           <div className="h-64 bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center border border-gray-300">
              <span className="text-gray-500 font-medium">Google Maps Integration Placeholder</span>
           </div>
        </div>
      </div>
    </div>
  );
}
