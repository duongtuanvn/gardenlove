import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Leaf, RefreshCw } from "lucide-react";
import heroImage from "@/assets/hero-greenhouse.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Green Haven Nursery greenhouse filled with beautiful plants"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Leaf className="w-4 h-4" />
            Family-Owned Since 2015
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up delay-100">
            Healthy Plants Delivered to Your Door
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-lg animate-fade-in-up delay-200">
            From our greenhouse to your home — expertly grown plants shipped with care to thrive in your space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl">
              Shop Plants
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Guarantee
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
            <TrustItem icon={Shield} text="100% Live Arrival Guarantee" />
            <TrustItem icon={Truck} text="Expert Packaging & Fast Shipping" />
            <TrustItem icon={Leaf} text="Grown with Care in the USA" />
            <TrustItem icon={RefreshCw} text="30-Day Money-Back Guarantee" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span>{text}</span>
    </div>
  );
}
