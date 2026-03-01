import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // when the user submits their email we forward it to a backend endpoint
  // if you don't yet have an API, the TODO below explains you can keep
  // the previous behavior for now, but the code is structured so the
  // success/reset logic only runs after we receive a positive response.
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setError(null);
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        throw new Error(`Status ${res.status}`);
      }
      // only mark as subscribed after success
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      console.error('subscription error', err);
      setError('Unable to subscribe at this time. Please try again later.');
    }
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
            {error && (
              <div className="text-red-400 text-xs mt-2">
                {error}
              </div>
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
              <li><Link to="/about#mission" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Our Mission & Vision</Link></li>
              <li><Link to="/about#leadership" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Leadership</Link></li>
              <li><Link to="/about#pillars" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Strategic Pillars</Link></li>
              <li><Link to="/about#governance" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Governance & Transparency</Link></li>
              <li><Link to="/about#ethics" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Code of Ethics</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Membership & Programs
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/community" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Join the Community</Link></li>
              <li><Link to="/certification" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Certification Pathways</Link></li>
              <li><Link to="/training" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Training & Development</Link></li>
              <li><Link to="/partners" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Corporate Partnerships</Link></li>
              <li><Link to="/events" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Events & Conferences</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Resources
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/insights" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Insights & Publications</Link></li>
              <li><Link to="/research" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Research & Industry Reports</Link></li>
              <li><Link to="/blog" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Blog</Link></li>
              <li><Link to="/press" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Media & Press</Link></li>
              <li><Link to="/careers" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-white/90">
              Legal & Policies
            </h5>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/privacy" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Privacy Policy</Link></li>
              <li><Link to="/data-protection" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Data Protection Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Terms of Use</Link></li>
              <li><Link to="/cookies" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Accessibility Statement</Link></li>
              <li><Link to="/sitemap" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">Sitemap</Link></li>
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