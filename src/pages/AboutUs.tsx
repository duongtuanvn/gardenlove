import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Leaf, Heart, Award, Users, Truck, Shield } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Leaf,
      title: "Quality First",
      description: "Every plant is hand-selected and inspected before shipping to ensure you receive only the healthiest specimens."
    },
    {
      icon: Heart,
      title: "Passion for Plants",
      description: "Our team of horticulturists brings decades of combined experience and genuine love for what we do."
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "We're not just sellers—we're plant parents who understand the joy and challenges of growing."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We've helped over 50,000 customers bring nature into their homes and gardens."
    }
  ];

  const milestones = [
    { year: "2008", event: "Founded as a small family greenhouse in Oregon" },
    { year: "2012", event: "Expanded to 5 acres of growing facilities" },
    { year: "2016", event: "Launched nationwide shipping program" },
    { year: "2020", event: "Reached 25,000 happy customers milestone" },
    { year: "2024", event: "Opened second growing facility in Florida" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-forest/10 to-sage/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest mb-6">
                Growing with Love Since 2008
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Green Haven Nursery is a family-owned nursery dedicated to bringing the beauty 
                of nature to homes across America. What started as a passion project has grown 
                into a trusted destination for plant lovers nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-6">
                  From Our Family to Yours
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our journey began in a small greenhouse in the Pacific Northwest, where 
                    our founder, Margaret Chen, started growing plants as a hobby while raising 
                    her three children. What began as a way to teach her kids about nature and 
                    responsibility quickly blossomed into something much bigger.
                  </p>
                  <p>
                    Today, Green Haven Nursery spans over 15 acres of state-of-the-art growing 
                    facilities across two locations. Our team of dedicated horticulturists works 
                    tirelessly to ensure every plant that leaves our nursery is healthy, vibrant, 
                    and ready to thrive in its new home.
                  </p>
                  <p>
                    We believe that everyone deserves to experience the joy of growing. Whether 
                    you're a seasoned gardener or just starting your plant journey, we're here 
                    to support you every step of the way with quality plants, expert advice, and 
                    genuine care.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage/30 to-forest/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Leaf className="w-16 h-16 text-forest mx-auto mb-4" />
                    <p className="text-forest font-medium">Our Growing Facilities</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-cream/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide everything we do, from how we grow our plants to how we serve our customers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-4">
                Our Journey
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-medium text-terracotta">{milestone.year}</span>
                      <p className="text-foreground mt-1">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-24 bg-forest text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="w-12 h-12 mx-auto mb-4 text-sage" />
                <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
                <p className="text-white/80">Every plant backed by our Live Arrival Guarantee</p>
              </div>
              <div>
                <Truck className="w-12 h-12 mx-auto mb-4 text-sage" />
                <h3 className="text-xl font-semibold mb-2">Nationwide Shipping</h3>
                <p className="text-white/80">Weather-smart delivery to 48 states</p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 text-sage" />
                <h3 className="text-xl font-semibold mb-2">50,000+ Happy Customers</h3>
                <p className="text-white/80">Join our growing community of plant lovers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
