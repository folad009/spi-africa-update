import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "ABOUT US", path: "/about" },
    { id: 3, name: "PROGRAMS & CERTIFICATION", path: "/programs" },
    { id: 4, name: "EVENTS", path: "/events" },
    { id: 5, name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex space-x-2">
              <img
                src="/images/spi-logo-2.png"
                alt="SPI Africa Logo"
                className="h-52 w-full"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm font-azo font-medium transition-colors hover:text-spi-primary capitalize ${
                  isActive(link.path) ? "text-spi-primary" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/community"
              className="bg-spi-primary font-azo text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-spi-secondary transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Join Our Community
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-spi-primary p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-azo font-medium ${
                isActive(link.path)
                  ? "bg-spi-primary/10 text-spi-primary"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/community"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-spi-primary text-white px-3 py-3 rounded-md text-base font-semibold"
          >
            Join Our Community
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
