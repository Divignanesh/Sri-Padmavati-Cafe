import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { 
  PartyPopper, 
  Gift, 
  Cake, 
  Sparkles,
  Package,
  Check,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const boxes = [
  {
    name: "Classic Box",
    price: "₹165",
    description: "Perfect for small gatherings",
    items: [
      "Veg Sandwich / Burger",
      "Samosa / Nuggets",
      "Muffin / Brownie",
      "Juice / Soft Drink",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    name: "Premium Box",
    price: "₹225",
    description: "Our most popular choice",
    items: [
      "Mini Burger + Sandwich",
      "Spring Roll + Nuggets",
      "Pastry + Brownie",
      "Premium Beverage",
    ],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    name: "Deluxe Box",
    price: "₹299",
    description: "For special celebrations",
    items: [
      "Gourmet Sandwich Trio",
      "Assorted Snacks Platter",
      "Mini Cake + Desserts",
      "Premium Juice + Chocolate",
    ],
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=400&h=300&fit=crop",
  },
];

const occasions = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Make their special day memorable with our curated party boxes.",
  },
  {
    icon: Gift,
    title: "Corporate Gifting",
    description: "Impress clients and appreciate employees with delicious gift boxes.",
  },
  {
    icon: PartyPopper,
    title: "Celebrations",
    description: "Perfect for anniversaries, baby showers, and festive occasions.",
  },
  {
    icon: Sparkles,
    title: "Office Events",
    description: "Team lunches, farewell parties, and work celebrations made easy.",
  },
];

export default function PartySnackers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium mb-6">
                <Package className="w-4 h-4" />
                Party Snackers by Shri Padmavathi
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Delicious Party Boxes for{" "}
                <span className="text-primary">Every Celebration</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Curated snack boxes packed with love and flavor. Perfect for birthdays, 
                corporate events, and any occasion worth celebrating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gap-2">
                  <Link to="/contact">
                    Order Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+919876543210">Call for Bulk Orders</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                    alt="Party snacks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop"
                    alt="Desserts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Options */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Boxes</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Choose Your Perfect Box
            </h2>
            <p className="text-muted-foreground">
              Each box is thoughtfully curated with a mix of savory snacks, sweet treats, and refreshing beverages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {boxes.map((box) => (
              <Card 
                key={box.name} 
                className={`relative overflow-hidden ${
                  box.featured ? "ring-2 ring-primary shadow-xl" : "border-border/50"
                }`}
              >
                {box.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full z-10">
                    Best Seller
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {box.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {box.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{box.price}</span>
                    <span className="text-muted-foreground text-sm"> per box</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-sage shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant={box.featured ? "default" : "outline"} 
                    className="w-full"
                  >
                    <Link to="/contact">Order Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom box? We can create a personalized package just for you.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Create Custom Box</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Perfect For</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Every Occasion Deserves a Snack Box
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion) => (
              <div key={occasion.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <occasion.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {occasion.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {occasion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Order in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Box", desc: "Select from our curated options or create a custom box." },
              { step: "2", title: "Place Your Order", desc: "Tell us the quantity, date, and delivery details." },
              { step: "3", title: "We Deliver", desc: "Fresh boxes delivered right to your doorstep." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
