import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya S.",
    role: "Birthday party host",
    content: "Ordered Party Snackers for my daughter's birthday. The boxes looked great and the snacks were fresh and delicious. Everyone asked where we got them from!",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "College event organizer",
    content: "We had Tealogy set up a stall at our college fest. Quality food, quick service, and the team was a pleasure to work with. Will definitely call them again.",
    rating: 5,
  },
  {
    name: "Kavitha N.",
    role: "Regular at Tealogy Cafe, Yelahanka",
    content: "Tealogy Yelahanka is my go-to for kulhad chai and a quick bite. Consistent quality, cozy vibe, and their Party Snackers boxes are perfect for small get-togethers.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: intro + nav (like 2nd image) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-center lg:text-left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              Don't just take our word for it – here's what our valued clients have to say about our services.
            </p>
            {/* Circular nav buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: carousel – 1 visible on mobile, 2 on desktop */}
          <div className="lg:col-span-8 overflow-hidden w-full max-w-md mx-auto md:max-w-none md:mx-0">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 md:pl-4 basis-full md:basis-1/2"
                  >
                    <Card className="h-full bg-background border-0 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <CardContent className="p-6 pt-10 relative">
                        <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Quote className="w-4 h-4 text-primary-foreground" />
                        </div>

                        <div className="flex gap-1 mb-4 pl-12">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <span className="text-sm font-semibold text-secondary-foreground">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                            <p className="text-muted-foreground text-xs truncate">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
