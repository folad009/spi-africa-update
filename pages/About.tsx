
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-in');
      
      gsap.fromTo(elements, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-32 bg-slate-50 overflow-hidden animate-in">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-spi-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-spi-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-spi-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-black text-spi-secondary mb-8 leading-tight">
            Advancing the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l  from-spi-primary to-spi-teal-secondary">Profession of Sales</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We are the premier body for sales professionals in Africa, dedicated to ethics, education, and excellence.
          </p>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="bg-spi-secondary py-20 text-white animate-in">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold leading-normal">
             "SPI Africa exists to raise the bar. We are committed to advancing sales excellence and promoting ethical selling across Africa and beyond."
           </h2>
        </div>
      </section>

      {/* The Challenge & Opportunity (Zig Zag) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-16 items-center mb-32 animate-in">
            <div className="w-full md:w-1/2">
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-spi-gold/20 rounded-full z-0"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
                   alt="Team meeting" 
                   className="relative z-10 rounded-[2rem] shadow-2xl w-full object-cover h-[500px]" 
                 />
                 <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-spi-brown/10 rounded-[2rem] -z-10"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-spi-secondary font-bold uppercase tracking-wider mb-2">The Challenge</h3>
              <h2 className="text-4xl font-bold text-spi-primary mb-6">Bridging the Gap</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sales is the lifeblood of every organization. Yet, for too long, the profession has lacked clear standards, formal training pathways, and widely accepted ethical frameworks.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This gap has led to a misunderstanding of the profession. We are here to change that narrative by establishing a unified standard of excellence that businesses can trust and professionals can aspire to.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center animate-in">
            <div className="w-full md:w-1/2">
               <div className="relative">
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-spi-teal/20 rounded-full z-0"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                   alt="Modern sales professional" 
                   className="relative z-10 rounded-[2rem] shadow-2xl w-full object-cover h-[500px]" 
                 />
                 <div className="absolute -top-6 -left-6 w-full h-full border-2 border-spi-teal/10 rounded-[2rem] -z-10"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-spi-secondary font-bold uppercase tracking-wider mb-2">The Future</h3>
              <h2 className="text-4xl font-bold text-spi-primary mb-6">Unlocking Africa's Potential</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Professional sales is a highly skilled, consultative, and data-driven discipline. With Africa's youthful population, we have a unique opportunity to transform the continent’s economic landscape.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By equipping brilliant minds with world-class capabilities, we turn selling into a catalyst for enterprise growth, innovation, and sustainable development across the region.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values - Redesigned */}
      <section className="bg-spi-primary text-white py-24 animate-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-spi-secondary font-bold tracking-widest uppercase text-sm mb-4">Our DNA</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Core Values</h3>
            <div className="w-24 h-1 bg-spi-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <h4 className="text-2xl font-bold mb-4">Integrity First</h4>
              <p className="text-slate-400 leading-relaxed">
                We believe trust is the currency of sales. We promote ethical frameworks that prioritize the customer's needs and build long-term relationships.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <h4 className="text-2xl font-bold mb-4">Collective Impact</h4>
              <p className="text-slate-400 leading-relaxed">
                We work with individuals, corporations, and universities. We believe that by lifting each other up, we raise the standard for the entire continent.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <h4 className="text-2xl font-bold mb-4">Relentless Excellence</h4>
              <p className="text-slate-400 leading-relaxed">
                We provide best-in-class training that competes with global standards while respecting the unique nuances of the local African context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 animate-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-spi-primary mb-6">Be Part of the Solution</h2>
          <p className="text-lg text-slate-600 mb-10">
            Whether you are a seasoned sales director or just starting your career, your voice matters in shaping the future of our profession.
          </p>
          <Link to="/contact" className="inline-block bg-spi-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-spi-primary hover:shadow-xl transition-all">
            Join SPI Africa Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
