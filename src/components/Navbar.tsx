import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAFE_MAPS_URL } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Party Snackers", href: "/party-snackers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/SHRI-PADMAVATHI-CAFE.png" alt="Shri Padmavathi Cafe" className="h-12 sm:h-14 lg:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="lg" className="gap-1.5">
              <a href={CAFE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" />
                Visit our cafe
              </a>
            </Button>
            <Button asChild size="lg">
              <Link to="/party-snackers#boxes">Explore Party Boxes</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Button asChild variant="outline" className="w-full gap-1.5">
                  <a href={CAFE_MAPS_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <MapPin className="w-4 h-4" />
                    Visit our cafe
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/party-snackers#boxes" onClick={() => setIsOpen(false)}>Explore Party Boxes</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
