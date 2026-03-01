import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-[#1e2f6e] text-white overflow-hidden">
      {/* Background dotted pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Brand + Description */}
          <div className="max-w-sm">
            <div className="mb-4">
              <img
                src="/logo-light.svg"
                alt="SPI Africa"
                className="h-10 mb-4"
              />
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              The leading professional body for sales practitioners in Africa.
              Advancing excellence, ethics, and education since 2018.
            </p>
          </div>

          {/* Right: Newsletter */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md lg:ml-auto">
            <h4 className="font-semibold mb-1">
              Subscribe to our newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Get weekly insights on sales trends in the African market.
            </p>

            {subscribed ? (
              <div className="text-green-300 text-sm font-medium">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-yellow-400"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-sm">
          
          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              About SPI Africa
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="#">Our Mission & Vision</Link></li>
              <li><Link to="#">Leadership</Link></li>
              <li><Link to="#">Strategic Pillars</Link></li>
              <li><Link to="#">Governance & Transparency</Link></li>
              <li><Link to="#">Code of Ethics</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Membership & Programs
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="#">Join the Community</Link></li>
              <li><Link to="#">Certification Pathways</Link></li>
              <li><Link to="#">Training & Development</Link></li>
              <li><Link to="#">Corporate Partnerships</Link></li>
              <li><Link to="#">Events & Conferences</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Resources
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="#">Insights & Publications</Link></li>
              <li><Link to="#">Research & Industry Reports</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Media & Press</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Legal & Policies
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Data Protection Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Cookie Policy</Link></li>
              <li><Link to="#">Accessibility Statement</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Sales Professional Institute Africa |
            Code of Ethics | Governance | Data Protection
          </p>
          <p>Lagos - Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;