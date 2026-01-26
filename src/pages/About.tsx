import { Layout } from "@/components/Layout";
import { JourneySection } from "@/components/JourneySection";
import { CTASection } from "@/components/CTASection";
import { Heart, Leaf, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Every dish we serve is crafted with love and attention to detail, using recipes perfected over generations.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the freshest ingredients daily from local markets to ensure quality and taste in every bite.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations and build lasting relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "From hygiene to presentation, we maintain the highest standards in everything we do.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Our Story of Serving Happiness
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small dream of serving authentic flavors has grown into a 
              comprehensive food service company trusted by thousands across Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=750&fit=crop"
                  alt="Cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop"
                  alt="Tea service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Est. 2015</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                From Humble Beginnings to Culinary Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shri Padmavathi Cafe was born from a simple belief: good food brings people together. 
                  In 2015, we opened our doors in a small corner of Bangalore with just a handful of 
                  tables and a passion for authentic South Indian cuisine.
                </p>
                <p>
                  Our specialty teas, particularly our signature "Tealogy" range, quickly became the 
                  talk of the neighborhood. The aroma of freshly brewed chai and the warmth of our 
                  hospitality drew crowds, and soon we were known as the go-to spot for a perfect cup.
                </p>
                <p>
                  As demand grew, so did our ambitions. Customers began asking us to cater their events, 
                  and we couldn't say no. From intimate birthday parties to grand corporate gatherings, 
                  we expanded our services while never compromising on the quality that made us special.
                </p>
                <p>
                  Today, we proudly serve over 50 corporate clients daily, manage Party Snackers for 
                  celebrations across the city, and continue to innovate with new concepts like 
                  exhibition food stalls. But at heart, we remain the same neighborhood cafe that 
                  believes in serving happiness, one plate at a time.
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
