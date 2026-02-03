import { useEffect, useRef, useState } from "react";
import { Coffee, UtensilsCrossed, Store, PartyPopper } from "lucide-react";

const milestones = [
  {
    year: "The Beginning",
    title: "Shri Padmavathi Cafe — Restaurant",
    description: "Shri Padmavathi Cafe started as a restaurant, serving authentic flavours and building a name for quality food and warmth.",
    icon: UtensilsCrossed,
  },
  {
    year: "Next Chapter",
    title: "Tealogy Cafe",
    description: "We moved to Tealogy Cafe—specialty teas, coffees, and a cozy space in Bangalore. Same heart, a new home.",
    icon: Coffee,
  },
  {
    year: "Expanding Reach",
    title: "Events & Food Stalls",
    description: "We began setting up at events—colleges, exhibitions, and occasions—bringing our quality and taste to every venue.",
    icon: Store,
  },
  {
    year: "Today",
    title: "Party Snackers",
    description: "We launched Party Snackers—curated party boxes for birthdays, corporate events, and celebrations. Snack up your celebrations.",
    icon: PartyPopper,
  },
];

export function JourneySection() {
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = () => setIsLarge(mql.matches);
    setIsLarge(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const refs = milestoneRefs.current.filter(Boolean) as HTMLDivElement[];
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveIndex((prev) => Math.max(prev, index));
          }
        });
      },
      { root: null, rootMargin: "-10% 0px -30% 0px", threshold: 0.1 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLarge]);

  const fillPercent = activeIndex < 0 ? 0 : ((activeIndex + 1) / milestones.length) * 100;

  return (
    <section id="journey" className="py-20 lg:py-28 bg-background border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            The Journey So Far
          </h2>
          <p className="text-muted-foreground">
            From our first restaurant to Tealogy Cafe, events, and Party Snackers—here's how we've grown 
            with quality first and a passion for great food.
          </p>
        </div>

        {/* Vertical timeline – mobile / small screens */}
        <div className="relative max-w-4xl mx-auto lg:hidden">
          {/* Gray line (full) */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-border"
            aria-hidden
          />
          {/* Red line (fills as you scroll) */}
          <div
            className="absolute left-4 top-0 w-px bg-primary transition-[height] duration-500 ease-out origin-top"
            style={{ height: `${fillPercent}%` }}
            aria-hidden
          />
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              ref={(el) => { milestoneRefs.current[index] = el; }}
              className="relative flex items-start gap-8 mb-12 last:mb-0"
            >
              <div className="flex-1 ml-12">
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
              <div className={`absolute left-0 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${index <= activeIndex ? "bg-primary" : "bg-border"}`}>
                <milestone.icon className={`w-4 h-4 ${index <= activeIndex ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal timeline – large screens */}
        <div className="hidden lg:block relative max-w-6xl mx-auto pt-4">
          {/* Gray line (full) */}
          <div
            className="absolute left-0 right-0 top-9 h-px bg-border"
            aria-hidden
          />
          {/* Red line (fills left to right as you scroll) */}
          <div
            className="absolute left-0 top-9 h-px bg-primary transition-[width] duration-500 ease-out origin-left"
            style={{ width: `${fillPercent}%` }}
            aria-hidden
          />
          <div className="grid grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                ref={(el) => { milestoneRefs.current[index] = el; }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg shrink-0 transition-colors duration-300 ${index <= activeIndex ? "bg-primary" : "bg-border"}`}>
                  <milestone.icon className={`w-4 h-4 ${index <= activeIndex ? "text-primary-foreground" : "text-muted-foreground"}`} />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <span className="text-primary font-semibold text-sm">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-serif font-semibold text-foreground leading-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
