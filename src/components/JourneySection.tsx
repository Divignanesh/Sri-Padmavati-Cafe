import { Coffee, UtensilsCrossed, Store, PartyPopper, Building2 } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "Shri Padmavathi Cafe",
    description: "Started as a humble neighborhood cafe in Bangalore, serving authentic South Indian beverages and snacks.",
    icon: Coffee,
  },
  {
    year: "2017",
    title: "Catering Services",
    description: "Expanded into event catering, bringing our signature flavors to weddings and celebrations.",
    icon: UtensilsCrossed,
  },
  {
    year: "2019",
    title: "Exhibition Food Stalls",
    description: "Began setting up professional food stalls at trade shows, exhibitions, and public events.",
    icon: Store,
  },
  {
    year: "2021",
    title: "Party Snackers Launch",
    description: "Introduced our popular party box service, making celebrations delicious and hassle-free.",
    icon: PartyPopper,
  },
  {
    year: "2023",
    title: "Corporate Food Division",
    description: "Launched dedicated corporate meal services, now serving 50+ companies across Bangalore.",
    icon: Building2,
  },
];

export function JourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            The Journey So Far
          </h2>
          <p className="text-muted-foreground">
            From a small cafe to a comprehensive food service company, here's how we've grown 
            while staying true to our roots.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div 
                className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <span className="inline-block text-primary font-semibold text-sm mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <milestone.icon className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
