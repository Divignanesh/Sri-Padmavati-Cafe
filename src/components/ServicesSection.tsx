import { Link } from "react-router-dom";
import { Coffee, Building2, PartyPopper, UtensilsCrossed, Store, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Coffee,
    title: "Tealogy Cafe",
    description: "Our signature cafe offering a diverse range of specialty teas, coffees, and quick bites in a cozy ambiance.",
    href: "/about",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop",
  },
  {
    icon: Building2,
    title: "Corporate Food",
    description: "Reliable daily meal solutions for offices, including breakfast, lunch, and high-tea services.",
    href: "/corporate-food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    icon: PartyPopper,
    title: "Party Snackers",
    description: "Curated party boxes with delicious snacks perfect for birthdays, celebrations, and gifting.",
    href: "/party-snackers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Event Catering",
    description: "Full-service catering for weddings, corporate events, and special occasions with customized menus.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
  },
  {
    icon: Store,
    title: "Food Stalls",
    description: "Professional food stall setup for exhibitions, trade shows, and public events.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            From our cozy cafe to large-scale corporate catering, we've got all your food needs covered 
            with quality, consistency, and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group ${service.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card 
                className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 ${
                  service.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
