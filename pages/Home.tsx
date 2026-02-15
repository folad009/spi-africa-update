import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Refs for GSAP
  const heroTextRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600&h=900",
      title: "Driving $50M+ in New Revenue",
      subtitle:
        "Empowering African Enterprises through data-driven sales strategies.",
      cta: "View Impact Report",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600&h=900",
      title: "10,000+ Professionals Strong",
      subtitle:
        "Join the continent's fastest-growing community of sales leaders.",
      cta: "Join Community",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600&h=900",
      title: "Ethical Sales Leadership",
      subtitle:
        "Setting the standard for integrity and trust in emerging markets.",
      cta: "Our Standards",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000); // Match transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 6000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [currentSlide]);

  // GSAP Animation for Hero Text whenever slide changes
  useEffect(() => {
    if (heroTextRef.current) {
      const title = heroTextRef.current.querySelector(".hero-title");
      const subtitle = heroTextRef.current.querySelector(".hero-subtitle");
      const buttons = heroTextRef.current.querySelector(".hero-buttons");

      // Reset
      gsap.set([title, subtitle, buttons], { opacity: 0, y: 30 });

      // Animate In
      gsap.to([title, subtitle, buttons], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, [currentSlide]);

  // Initial Page Load Animation for sections
  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
          },
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const testimonials = [
    {
      quote:
        "SPI Africa has redefined how our team approaches consultative selling. The impact on our Q4 revenue was immediate and substantial.",
      name: "Kwame Osei",
      designation: "VP of Sales, West African Tech Corp",
      image: "https://picsum.photos/seed/kwame/100/100",
    },
    {
      quote:
        "The focus on ethics and digital transformation is exactly what the continent needs. Being a member has opened doors to world-class mentorship.",
      name: "Sarah Mbeki",
      designation: "Enterprise Account Executive",
      image: "https://picsum.photos/seed/sarah/100/100",
    },
    {
      quote:
        "We partnered with SPI for our graduate trainee program, and the quality of sales talent they produce is truly unparalleled in the region.",
      name: "Chinelo Okoro",
      designation: "HR Director, Global FMCG Africa",
      image: "https://picsum.photos/seed/chinelo/100/100",
    },
  ];

  const insights = [
    {
      category: "Market Trends",
      title: "The Rise of Social Selling in Modern Africa",
      description:
        "How digital connectivity is shifting the landscape of B2B relationships across the continent.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      date: "Oct 24, 2024",
    },
    {
      category: "Sales Strategy",
      title: "Closing Complex Deals in Emerging Economies",
      description:
        "Navigating regulatory hurdles and building trust-based relationships in high-growth markets.",
      image:
        "https://images.unsplash.com/photo-1454165833762-0265129b0021?auto=format&fit=crop&q=80&w=600",
      date: "Oct 18, 2024",
    },
    {
      category: "Leadership",
      title: "Mentorship: The Secret Weapon for Sales Orgs",
      description:
        "Why internal coaching programs are the most effective way to scale sales excellence.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      date: "Oct 12, 2024",
    },
  ];

  return (
    <div className="bg-white">
      {/* Full Width Swiper Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-spi-primary">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear transform scale-105"
              style={{
                backgroundImage: `url(${slide.url})`,
                transform:
                  index === currentSlide ? "scale(110%)" : "scale(100%)",
              }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-spi-primary/90 via-spi-primary/40 to-transparent"></div>

            {/* Content Container (Only render content if active slide to allow ref targeting) */}
            {index === currentSlide && (
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div ref={heroTextRef} className="max-w-3xl">
                    <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg opacity-0">
                      {slide.title}
                    </h1>
                    <p className="hero-subtitle text-xl md:text-2xl text-slate-200 mb-10 max-w-xl leading-relaxed drop-shadow-md opacity-0">
                      {slide.subtitle}
                    </p>
                    <div className="hero-buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0">
                      <Link
                        to="/contact"
                        className="bg-spi-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-spi-secondary hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        Start Your Journey
                      </Link>
                      <Link
                        to="/about"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-spi-primary transition-all"
                      >
                        {slide.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {/* Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-spi-gold"
                      : "w-6 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-spi-brown transition-all backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-spi-brown transition-all backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section 
      <section ref={addToRefs} className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Global Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-bold text-slate-800 tracking-tighter">FORBES AFRICA</span>
             <span className="text-2xl font-bold text-slate-800 tracking-tighter">TECHCABAL</span>
             <span className="text-2xl font-bold text-slate-800 tracking-tighter">BUSINESS DAY</span>
             <span className="text-2xl font-bold text-slate-800 tracking-tighter">CNBC</span>
          </div>
        </div>
      </section>*/}

      {/* Pillars Section */}
      <section ref={addToRefs} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-spi-primary font-bold tracking-widest uppercase text-sm mb-4">
              Our Core Mission
            </h2>
            <h3 className="text-4xl font-extrabold text-spi-secondary mb-6">
              Built on Professionalism and Impact
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We bridge the gap between raw talent and elite sales execution
              through three primary pillars of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <h4 className="text-xl font-bold text-spi-primary mb-4">
                World Class Training
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Access globally recognized curriculum tailored for the unique
                dynamics of the African market.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <h4 className="text-xl font-bold text-spi-primary mb-4">
                Ethical Standards
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We promote integrity-based selling, ensuring long-term value for
                both sellers and customers.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <h4 className="text-xl font-bold text-spi-primary mb-4">
                Powerful Community
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Connect with mentors, industry leaders, and peers to accelerate
                your professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={addToRefs} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-spi-primary font-bold tracking-widest uppercase text-sm mb-4">
              Testimonials
            </h2>
            <h3 className="text-4xl font-extrabold text-spi-secondary mb-6">
              What Our Community Says
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Join thousands of professionals who have experienced the SPI
              Africa difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-spi-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check out our latest insights Section */}
      <section ref={addToRefs} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-spi-primary font-bold tracking-widest uppercase text-sm mb-4">
                Latest Thinking
              </h2>
              <h3 className="text-4xl font-extrabold text-spi-secondary mb-4">
                Check out our latest insights
              </h3>
              <p className="text-lg text-slate-600">
                Thought leadership and practical advice for navigating the
                complex world of modern sales in Africa.
              </p>
            </div>
            <Link
              to="/about"
              className="hidden md:flex items-center space-x-2 text-spi-primary font-bold hover:text-spi-teal-secondary transition-colors mt-4 md:mt-0"
            >
              <span>View All Articles</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-spi-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-slate-400 text-xs font-medium mb-2">
                    {article.date}
                  </span>
                  <h4 className="text-xl font-bold text-spi-primary mb-3 group-hover:text-spi-teal-secondary transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {article.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-spi-primary font-bold text-sm hover:text-spi-teal-secondary transition-colors"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-spi-primary font-bold"
            >
              <span>View All Articles</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={addToRefs} className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-spi-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
              Ready to redefine your sales career.
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of professionals across Africa who are setting new
              standards for the sales profession.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-spi-teal px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 relative z-10"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
