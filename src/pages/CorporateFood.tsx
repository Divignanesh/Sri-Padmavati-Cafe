import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Clock, 
  UtensilsCrossed, 
  Users, 
  Truck, 
  CalendarCheck,
  Check,
  ArrowRight,
  Coffee,
  Salad,
  ChefHat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Punctual delivery every day, so your team is never left hungry.",
  },
  {
    icon: UtensilsCrossed,
    title: "Diverse Menu",
    description: "Rotating menus with North & South Indian, Continental options.",
  },
  {
    icon: Users,
    title: "Scalable Plans",
    description: "From 10 to 1000+ employees, we scale with your needs.",
  },
  {
    icon: Truck,
    title: "Hassle-Free Setup",
    description: "We handle everything from cooking to cleanup.",
  },
];

const mealPlans = [
  {
    icon: Coffee,
    title: "Breakfast Plan",
    price: "₹60",
    unit: "per person",
    description: "Energize your team's morning",
    features: [
      "Fresh idli, dosa, or poha",
      "Tea/Coffee included",
      "Chutney & sambar",
      "Seasonal fruits option",
    ],
  },
  {
    icon: Salad,
    title: "Lunch Plan",
    price: "₹120",
    unit: "per person",
    description: "Complete nutritious lunch",
    features: [
      "Rice & 2 rotis",
      "Dal & 2 sabzis",
      "Raita or curd",
      "Salad & pickle",
    ],
    featured: true,
  },
  {
    icon: ChefHat,
    title: "High-Tea Plan",
    price: "₹80",
    unit: "per person",
    description: "Perfect for meetings",
    features: [
      "Assorted sandwiches",
      "Samosa or pakora",
      "Tea/Coffee service",
      "Cookies & snacks",
    ],
  },
];

const clients = [
  "Tech Solutions Pvt Ltd",
  "Infosys",
  "Wipro Technologies",
  "StartupHub Co",
  "Creative Agency",
  "Finance Corp",
];

export default function CorporateFood() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Serving 50+ Companies Daily
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Professional Meals for{" "}
                <span className="text-primary">Productive Workdays</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Keep your team energized and focused with fresh, delicious meals delivered 
                to your office daily. Customizable plans for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gap-2">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+919876543210">Call: +91 98765 43210</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                  alt="Corporate meal spread"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10,000+</p>
                    <p className="text-sm text-muted-foreground">Meals Delivered Monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Why Companies Trust Us
            </h2>
            <p className="text-muted-foreground">
              We understand the unique needs of corporate dining and deliver excellence every single day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Meal Plans</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Flexible Plans for Every Need
            </h2>
            <p className="text-muted-foreground">
              Choose from our range of meal plans or create a custom package that fits your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mealPlans.map((plan) => (
              <Card 
                key={plan.title} 
                className={`relative overflow-hidden ${
                  plan.featured ? "ring-2 ring-primary shadow-xl" : "border-border/50"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm"> {plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-sage" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant={plan.featured ? "default" : "outline"} 
                    className="w-full"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            * Prices are indicative. Final pricing based on quantity and customization.
          </p>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {clients.map((client) => (
              <span 
                key={client} 
                className="text-lg font-serif font-semibold text-muted-foreground/60"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
