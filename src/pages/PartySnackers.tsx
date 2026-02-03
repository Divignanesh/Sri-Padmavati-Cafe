import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import {
  PartyPopper,
  Gift,
  Cake,
  Sparkles,
  Package,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsAppUrl, PHONE_NUMBER } from "@/lib/constants";

/* Snack boxes from partysnackers.in/snack-box/ */
const boxes = [
  {
    name: "Budget Delight Box",
    priceRange: "₹120 – ₹140",
    perPerson: true,
    description: "A simple and affordable option for light snacking.",
    items: [
      "Main: Sandwich or Fries",
      "Dessert: Muffins, Cupcakes, or Cookies",
      "Beverages: Mocktails",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    name: "Classic Treat Box",
    priceRange: "₹160 – ₹180",
    perPerson: true,
    description: "A well-balanced and filling choice.",
    items: [
      "Main: Burger or Pasta",
      "Dessert: Muffins, Cupcakes, or Cookies",
      "Beverages: Mocktails",
    ],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    name: "Celebration Box",
    priceRange: "₹200 – ₹230",
    perPerson: true,
    description: "A little more indulgent, with a premium feel.",
    items: [
      "Main: Garlic Bread or Momo's",
      "Snack: Fries",
      "Dessert: Muffins or Cupcake",
      "Drink: Mocktails",
    ],
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=400&h=300&fit=crop",
  },
  {
    name: "Party Special Box",
    priceRange: "₹280 – ₹320",
    perPerson: true,
    description: "Perfect for birthday parties and small gatherings.",
    items: [
      "Main: Pizza or Pasta",
      "Snack: Garlic Bread or Bites",
      "Dessert: Muffin or Cupcakes",
      "Drink: Mocktails",
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    name: "Grand Feast Box",
    priceRange: "₹400 – ₹500",
    perPerson: true,
    description: "The ultimate snack box for premium events.",
    items: [
      "Main: Pizza & Momo's",
      "Snack: Fries & Garlic Bread",
      "Dessert: Muffin or Cupcake",
      "Drink: Mocktails or Fresh Juice",
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
  },
];

const occasions = [
  { icon: Cake, title: "Birthday Parties", description: "Make their special day memorable with our curated party boxes." },
  { icon: Gift, title: "Corporate Gifting", description: "Impress clients and appreciate employees with delicious gift boxes." },
  { icon: PartyPopper, title: "Celebrations", description: "Perfect for anniversaries, baby showers, and festive occasions." },
  { icon: Sparkles, title: "Office Events", description: "Team lunches, farewell parties, and work celebrations made easy." },
];

const faqs = [
  {
    q: "How do I place an order for a snack box?",
    a: "You can WhatsApp us with your chosen box name, quantity, and delivery date. We'll confirm availability and take your order. You can say: 'I want to place an order for [Box Name]'.",
  },
  {
    q: "Can I customise the contents of a box?",
    a: "Yes! For customisation, drop us a message saying you'd like to check on customising the box. We'll discuss options and create a box that fits your theme and preferences.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "We cater to both small and large orders. Contact us on WhatsApp with your requirement and we'll let you know the minimum for your chosen box and delivery location.",
  },
  {
    q: "Do you deliver to my area?",
    a: "We deliver across Bangalore and nearby areas. Share your location and event date on WhatsApp and we'll confirm delivery availability.",
  },
  {
    q: "How far in advance should I order?",
    a: "We recommend ordering at least 2–3 days in advance for standard boxes. For customised boxes or large orders, a week's notice is ideal.",
  },
];

export default function PartySnackers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img src="/LOGO-PNG.png" alt="Party Snackers - Snack up your celebrations" className="h-28 md:h-32 w-auto object-contain mb-6" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Find a snack box of happiness for every occasion.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Birthdays, office events, anniversaries, or any celebration—our <strong>curated snack boxes</strong> bring the joy. Pick a ready box or customise one to match your vibe.
              </p>
              <p className="text-muted-foreground mb-8">
                From small get-togethers to big milestones, Party Snackers delivers delicious treats so you can focus on the moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
                  <a href={whatsAppUrl("Hi")} target="_blank" rel="noopener noreferrer">
                    Contact now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:+${PHONE_NUMBER}`}>Call for Bulk Orders</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" alt="Party snacks" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl mt-8">
                  <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop" alt="Desserts" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luscious options - Boxes */}
      <section id="boxes" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Luscious options</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Snack boxes — every snack tastes so good you want MORE!
            </h2>
            <p className="text-muted-foreground">
              Choose from our range of curated boxes or ask us for a custom box.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boxes.map((box) => (
              <Card
                key={box.name}
                className={`relative overflow-hidden ${box.featured ? "ring-2 ring-primary shadow-xl" : "border-border/50"}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={box.image} alt={box.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">{box.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{box.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">{box.priceRange}</span>
                    <span className="text-muted-foreground text-sm"> per person</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={box.featured ? "default" : "outline"} className="w-full" size="sm">
                    <a href={whatsAppUrl(`I want to place an order for this box: ${box.name}`)} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-secondary/50 p-8 md:p-10 text-center">
            <p className="text-lg font-medium text-foreground mb-4">Need a custom box? We can create a personalised package for you.</p>
            <Button asChild size="lg" className="gap-2 shadow-md">
              <a href={whatsAppUrl("I want to check with you on the customise of the box.")} target="_blank" rel="noopener noreferrer">
                Create Custom Box
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Perfect For</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Every occasion deserves a snack box
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion) => (
              <div key={occasion.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <occasion.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{occasion.title}</h3>
                <p className="text-muted-foreground text-sm">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Order now from us easily and quickly!
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Box", desc: "Select from our curated options or ask for a custom box." },
              { step: "2", title: "Place Your Order", desc: "WhatsApp us with quantity, date, and delivery details." },
              { step: "3", title: "We Deliver", desc: "Spillage-free, on-time delivery to your doorstep." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
