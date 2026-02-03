import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, PartyPopper } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 lg:pt-28 overflow-hidden bg-background">
      {/* Subtle gradient so section 1 doesn’t match section 2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl min-w-0">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Building2 className="w-4 h-4" />
              Trusted by many
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Delicious Food for{" "}
              <span className="text-primary">Every Occasion</span>
            </h1>
            
            <p 
              className="text-lg text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              From our cozy cafe to curated party boxes and event stalls, we bring authentic 
              flavors and exceptional service to your celebrations. Experience the taste 
              of tradition with modern convenience.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" asChild className="gap-2">
                <Link to="/party-snackers#boxes">
                  Explore our party boxes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Celebrations Catered" },
                { value: "1000+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - hidden on small screens to avoid overlap, or constrained */}
          <div 
            className="relative opacity-0 animate-scale-in mt-8 lg:mt-0 max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto lg:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-square w-full">
              {/* Main Image Container */}
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6" />
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-3xl bg-secondary overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop"
                  alt="Party boxes with food and snacks"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card - Party Snackers (hidden on narrow screens to prevent overlap) */}
              <div className="absolute -right-2 sm:right-2 bottom-1/4 hidden sm:block bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <PartyPopper className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Party Snackers</p>
                    <p className="text-xs text-muted-foreground">Curated party boxes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
