import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { PHONE_DISPLAY, PHONE_NUMBER, EMAIL, FSSAI_LICENSE_NUMBER, GSTIN } from "@/lib/constants";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Party Snackers", href: "/party-snackers" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: name, logo, links, contact, social – all left-aligned */}
          <div className="flex flex-col gap-4 text-left">
            <p className="font-serif font-semibold text-base leading-tight">Shri Padmavathi Cafe & Party Snackers</p>
            <img src="/SHRI-PADMAVATHI-CAFE.png" alt="Shri Padmavathi Cafe" className="h-16 w-auto object-contain self-start" />
            <p className="text-primary-foreground/80 text-xs">Quality food, celebrations, event stalls — Yelahanka, Bangalore</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
              <a href={`tel:+${PHONE_NUMBER}`} className="flex items-center gap-1.5 text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                <Phone className="w-3.5 h-3.5" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" /> {EMAIL}
              </a>
            </div>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: belief image + details below */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <img src="/WhatsApp%20Image%202026-02-04%20at%2012.25.10%20AM.jpeg" alt="Our belief" className="h-32 lg:h-40 w-auto object-contain rounded-md opacity-90" />
            <div className="mt-4 flex flex-col gap-2 text-xs text-primary-foreground/80">
              <p>© {new Date().getFullYear()} Shri Padmavathi Cafe. All rights reserved.</p>
              <p className="flex items-center justify-center lg:justify-end gap-1">
                <MapPin className="w-3 h-3 shrink-0" /> 3rd A Cross, Yelahanka Newtown, Bengaluru 560064 — Mon–Sat 8AM–10PM
              </p>
              <p className="flex flex-wrap items-center justify-center lg:justify-end gap-x-2 gap-y-1">
                <span>FSSAI: {FSSAI_LICENSE_NUMBER}</span>
                <span className="text-primary-foreground/50">|</span>
                <span>GSTIN: {GSTIN}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
