import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-warm-brown text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">SP</span>
              </div>
              <div>
                <p className="font-serif font-semibold leading-tight">Shri Padmavathi</p>
                <p className="text-xs text-cream/70">Cafe & Catering</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              From our humble beginnings as a neighborhood cafe to becoming a trusted name in corporate catering, 
              we've been serving happiness on a plate since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Corporate Food", href: "/corporate-food" },
                { name: "Party Snackers", href: "/party-snackers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-cream/80 hover:text-cream transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Tealogy Cafe",
                "Corporate Meals",
                "Party Snack Boxes",
                "Event Catering",
                "Exhibition Food Stalls",
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-light shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">
                  123, Main Street, Koramangala,<br />
                  Bangalore - 560034, Karnataka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-terracotta-light shrink-0" />
                <a href="tel:+919876543210" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-terracotta-light shrink-0" />
                <a href="mailto:info@shripadmavathicafe.com" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  info@shripadmavathicafe.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-terracotta-light shrink-0" />
                <span className="text-cream/80 text-sm">
                  Mon - Sat: 8AM - 10PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Shri Padmavathi Cafe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-cream/60 hover:text-cream transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-cream/60 hover:text-cream transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
