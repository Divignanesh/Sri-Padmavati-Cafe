import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Coffee, PartyPopper, Store, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Coffee,
    title: "Tealogy Cafe",
    description: "A relaxed spot in Yelahanka for chai, coffee, and bites—dine in or take away.",
    features: [
      "Specialty teas and coffees",
      "Fresh beverages and snacks",
      "Cozy dine-in ambiance",
      "Takeaway available",
    ],
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
    href: "/about",
  },
  {
    icon: PartyPopper,
    title: "Party Snackers",
    description: "Hand-packed snack boxes for birthdays, office dos, and special occasions—pick a ready box or ask for a custom one.",
    features: [
      "Customizable box contents",
      "Vegetarian & non-veg options",
      "Elegant packaging",
      "Spillage Free Delivery",
      "Hygienic Cooking Practices",
      "On Time Service",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    href: "/party-snackers",
    featured: true,
  },
  {
    icon: Store,
    title: "Food Stalls",
    description: "We bring our kitchen to your venue—college fests, exhibitions, and private events.",
    features: [
      "Stall setup at your venue",
      "Colleges, events, exhibitions",
      "Trained staff",
      "Flexible menus and timelines",
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Cafe, Party Boxes & Food Stalls
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three ways to enjoy what we do: drop by the cafe, order a party box, or have us at your next event.
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
