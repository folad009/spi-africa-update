
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-spi-primary text-white pt-20 overflow-hidden relative">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16">
          <div className="lg:w-1/3">
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The leading professional body for sales practitioners in Africa. Advancing excellence, ethics, and education since 2018.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-spi-teal hover:border-spi-teal transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-white/60 mb-6">Get weekly insights on sales trends in the African market.</p>
            
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="font-bold">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-black/20 border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-spi-teal transition-colors placeholder:text-white/30"
                />
                <button 
                  type="submit"
                  className="bg-spi-primary hover:bg-spi-secondary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 pb-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Sales Professionals Institute Africa.</p>
          <p>Lagos - Nigeria</p>
        </div>
      </div>
      
      {/* Large Typography Watermark */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
        <h1 className="text-[12rem] md:text-[20rem] font-black text-white text-center -mb-24 md:-mb-48 whitespace-nowrap">
          SPI AFRICA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
