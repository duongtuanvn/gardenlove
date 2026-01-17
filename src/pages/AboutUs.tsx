import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  MapPin, Mail, Phone, Clock, 
  Package, Truck, ThermometerSun, Shield, 
  Leaf, BookOpen, Headphones,
  ChevronRight, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutUs = () => {
  const shippingProcess = [
    {
      icon: Leaf,
      title: "Inspected Before Packing",
      description: "Every plant is hand-selected and health-checked by our team before it leaves our facility."
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Custom boxes with biodegradable materials protect roots and foliage during transit."
    },
    {
      icon: Truck,
      title: "Tracking Provided",
      description: "You'll receive tracking info via email so you always know where your plants are."
    },
    {
      icon: ThermometerSun,
      title: "Weather-Smart Shipping",
      description: "We monitor conditions and may hold shipments during extreme heat or cold to protect your plants."
    }
  ];

  const whatMakesUsDifferent = [
    {
      icon: BookOpen,
      title: "USDA Zone Guidance",
      description: "Every product page shows zone compatibility so you pick plants that thrive in your area."
    },
    {
      icon: Leaf,
      title: "Healthy Roots Guaranteed",
      description: "We inspect root systems before shipping—no root-bound or stressed plants leave our nursery."
    },
    {
      icon: ThermometerSun,
      title: "Seasonally Appropriate Shipping",
      description: "We ship Mon–Wed and adjust schedules based on weather forecasts along your delivery route."
    },
    {
      icon: Shield,
      title: "Clear Policies",
      description: "Transparent shipping, returns, and guarantee policies—no surprises, no fine print."
    },
    {
      icon: Headphones,
      title: "Responsive Support",
      description: "Real humans answering emails within 24 hours. We're here to help you succeed."
    },
    {
      icon: Package,
      title: "Eco-Friendly Packaging",
      description: "We use recyclable and biodegradable materials because we care about the planet too."
    }
  ];

  const faqs = [
    {
      question: "Where do you ship?",
      answer: "We ship to all 48 contiguous U.S. states. Unfortunately, we cannot ship to Alaska, Hawaii, or U.S. territories due to agricultural restrictions and extended transit times."
    },
    {
      question: "When will my order ship?",
      answer: "Orders are processed within 1–2 business days and ship Monday through Wednesday. You'll receive tracking information via email once your order is on its way."
    },
    {
      question: "What if my plant arrives damaged?",
      answer: "Contact us within 48 hours of delivery with photos of the plant and packaging. We'll send a replacement or issue a full refund—your choice. See our Live Arrival Guarantee for details."
    },
    {
      question: "How do I choose the right plant for my zone?",
      answer: "Each product page displays USDA Hardiness Zone compatibility. Enter your zip code on the USDA Plant Hardiness Zone Map to find your zone, then look for plants that match."
    },
    {
      question: "Do you offer care guides?",
      answer: "Yes! Every plant ships with printed care instructions, and you'll find detailed care guides on each product page covering light, water, soil, and seasonal tips."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Matching Contact/Policy pages style */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-cream via-sage/20 to-forest/10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-forest/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-forest" />
                <span className="text-sm font-medium text-forest">About Green Haven Nursery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-forest mb-6">
                Quality Plants, Clear Policies, Real People
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Green Haven Nursery is an online plant store offering live trees, shrubs, perennials, and houseplants shipped directly to homes across the United States.
              </p>
            </div>
          </div>
        </section>

        {/* Where We're Based - Business Info */}
        <section className="py-12 md:py-16 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
                    Where We're Based
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We operate from Portland, Oregon with partner growers across the country, allowing us to ship healthy, climate-appropriate plants to your door.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Portland, Oregon, USA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">support@greenhaven-nursery.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">(503) 555-0123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Support Hours</p>
                        <p className="text-sm text-muted-foreground">Mon–Fri, 9am–5pm PT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-sage/30 to-forest/20 rounded-2xl p-8 text-center">
                  <Leaf className="w-16 h-16 text-forest mx-auto mb-4" />
                  <p className="text-forest font-medium text-lg mb-2">Partner Grower Network</p>
                  <p className="text-sm text-muted-foreground">
                    Plants sourced from trusted nurseries in Oregon, Florida, and California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Ship Live Plants */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
                  How We Ship Live Plants
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Shipping live plants requires special care. Here's our process to ensure your plants arrive healthy.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {shippingProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/shipping">
                  <Button variant="outline" className="gap-2">
                    Shipping Info <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/guarantee">
                  <Button variant="outline" className="gap-2">
                    Live Arrival Guarantee <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Arrival Guarantee Highlight */}
        <section className="py-12 md:py-16 bg-forest text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-sage" />
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Live Arrival Guarantee
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Every plant we ship is backed by our Live Arrival Guarantee. If your plant arrives damaged or dead, 
                contact us within <strong>48 hours</strong> of delivery with photos. We'll send a replacement or issue a full refund—your choice.
              </p>
              <Link to="/guarantee">
                <Button variant="secondary" size="lg" className="gap-2">
                  Learn More About Our Guarantee <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 md:py-16 bg-cream/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
                  What Makes Us Different
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We focus on what matters: healthy plants, clear policies, and real support when you need it.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whatMakesUsDifferent.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-forest" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 rounded-full mb-4">
                  <HelpCircle className="w-4 h-4 text-forest" />
                  <span className="text-sm font-medium text-forest">Quick Answers</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-forest">
                  Common Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="border border-border rounded-lg px-4 bg-card data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="text-foreground font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link to="/faq">
                  <Button variant="outline" className="gap-2">
                    View All FAQs <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-primary">
              Ready to Start Growing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Browse our collection of healthy, inspected plants ready to ship to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Shop All Plants <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/shipping">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Shipping Info
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
