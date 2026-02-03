import { Layout } from "@/components/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_NUMBER, EMAIL, FSSAI_LICENSE_NUMBER, GSTIN, whatsAppUrl } from "@/lib/constants";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our cafe, party boxes, or event stalls? 
              We'd love to hear from you. Reach out on WhatsApp or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Get in Touch - Left */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Ground floor No – 689, Shri Padmavathi Cafe,<br />
                    3rd A Cross, Yelahanka Newtown, Bengaluru – 560064
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">Mon - Sat: 8AM - 10PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-medium min-w-[5rem]">FSSAI</span>
                  <span className="text-muted-foreground">{FSSAI_LICENSE_NUMBER}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground text-sm font-medium min-w-[5rem]">GSTIN</span>
                  <span className="text-muted-foreground">{GSTIN}</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                >
                  <a href={whatsAppUrl("Hi")} target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Connect on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href={`tel:+${PHONE_NUMBER}`}>
                    <Phone className="w-4 h-4" />
                    Drop us a call
                  </a>
                </Button>
              </div>
            </div>

            {/* Map - Right */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.5882313!3d13.0993762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1917ddef283f%3A0x83437e48c985cf7a!2sTealogy%20Yelahanka!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tealogy Yelahanka - Shri Padmavathi Cafe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
