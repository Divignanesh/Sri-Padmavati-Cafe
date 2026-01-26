import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Coffee, Building2, PartyPopper, UtensilsCrossed, Store, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Coffee,
    title: "Tealogy Cafe",
    description: "Experience our signature cafe with a diverse range of specialty teas, coffees, and quick bites.",
    features: [
      "15+ varieties of specialty teas",
      "Fresh coffee and beverages",
      "Authentic South Indian snacks",
      "Cozy dine-in ambiance",
      "Takeaway options available",
    ],
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
    href: "/about",
  },
  {
    icon: Building2,
    title: "Corporate Food Services",
    description: "Reliable daily meal solutions designed for modern workplaces with diverse dietary needs.",
    features: [
      "Daily breakfast & lunch delivery",
      "High-tea for meetings & events",
      "Customizable meal plans",
      "Dietary accommodations",
      "Dedicated account manager",
    ],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    href: "/corporate-food",
    featured: true,
  },
  {
    icon: PartyPopper,
    title: "Party Snackers",
    description: "Curated snack boxes perfect for birthdays, celebrations, and corporate gifting.",
    features: [
      "Customizable box contents",
      "Vegetarian & non-veg options",
      "Elegant packaging",
      "Bulk order discounts",
      "Same-day delivery available",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    href: "/party-snackers",
  },
  {
    icon: UtensilsCrossed,
    title: "Event Catering",
    description: "Full-service catering for weddings, corporate events, and special occasions.",
    features: [
      "Customized menu planning",
      "Live counters & stations",
      "Professional service staff",
      "Setup & cleanup included",
      "Events of all sizes",
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    href: "/contact",
  },
  {
    icon: Store,
    title: "Exhibition Food Stalls",
    description: "Professional food stall setup for exhibitions, trade shows, and public events.",
    features: [
      "Complete stall setup",
      "Branded presentation",
      "Trained serving staff",
      "High-volume service",
      "Flexible menu options",
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Complete Food Solutions for Every Need
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our cozy cafe to large-scale corporate catering, we offer a comprehensive 
              range of food services tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {service.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-sage" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="gap-2">
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
