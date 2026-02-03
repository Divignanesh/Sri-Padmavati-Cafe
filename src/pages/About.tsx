import { Layout } from "@/components/Layout";
import { JourneySection } from "@/components/JourneySection";
import { CTASection } from "@/components/CTASection";
import { Heart, Leaf, Award, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Every dish we serve is crafted with love and attention to detail, with a passion for quality food and service.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the freshest ingredients to ensure quality and taste in every bite.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Quality first in everything we do—from our cafe to party boxes and event stalls. We have a keen focus on quality.",
  },
  {
    icon: Users,
    title: "Excellence",
    description: "From hygiene to presentation, we maintain the highest standards and excellence in everything we do.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Our Story of Serving Happiness
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shri Padmavathi Cafe started as a restaurant, then became Tealogy Cafe, followed by events and Party Snackers—trusted by many for quality food and celebrations in Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=450&fit=crop"
                  alt="Cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
                  alt="Tea service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                Good Food, Great Moments
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started with a simple belief: great food brings people together. Today we bring that same heart to our cafe, to your events, and to every celebration—one plate at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              These core values guide every decision we make and every meal we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneySection />
      <CTASection />
    </Layout>
  );
}
