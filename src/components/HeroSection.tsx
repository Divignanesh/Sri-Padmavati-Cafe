import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, PartyPopper } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Building2 className="w-4 h-4" />
              Trusted by 50+ Corporate Clients
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
              From daily corporate meals to grand celebrations, we bring authentic flavors 
              and exceptional service to your workplace and events. Experience the taste 
              of tradition with modern convenience.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" asChild className="gap-2">
                <Link to="/corporate-food">
                  Explore Corporate Food
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { value: "9+", label: "Years Experience" },
                { value: "50+", label: "Corporate Clients" },
                { value: "10K+", label: "Meals Delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div 
            className="relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6" />
              <div className="absolute inset-8 rounded-3xl bg-secondary overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=600&fit=crop"
                  alt="Delicious food spread"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Corporate Meals</p>
                    <p className="text-xs text-muted-foreground">Daily delivery</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <PartyPopper className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Party Snackers</p>
                    <p className="text-xs text-muted-foreground">Event boxes</p>
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
