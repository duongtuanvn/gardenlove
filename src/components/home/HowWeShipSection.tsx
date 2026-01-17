import { Link } from "react-router-dom";
import { Search, Package, Truck, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Pick & Inspect",
    description: "Our experts hand-select each plant, inspecting for health, root development, and overall quality before it leaves our nursery.",
  },
  {
    icon: Package,
    title: "Pack for Transit",
    description: "We carefully wrap roots, secure soil, and cushion plants in custom eco-friendly packaging designed to minimize stress during shipping.",
  },
  {
    icon: Truck,
    title: "Ship with Care",
    description: "Every order includes tracking and detailed care instructions. We ship Mon-Wed to avoid weekend warehouse delays.",
  },
];

export default function HowWeShipSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Safe & Secure Delivery
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            How We Ship Live Plants
          </h2>
          <p className="text-muted-foreground mt-4">
            We treat every plant like it's going to our own garden. Here's how we ensure your plants arrive healthy and ready to thrive.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-background rounded-2xl p-6 text-center shadow-soft">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Live Arrival Guarantee
              </h3>
              <p className="text-muted-foreground">
                Every plant is backed by our 100% Live Arrival Guarantee. If your plant arrives damaged, we'll replace it or refund you—no questions asked.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="default">
                <Link to="/shipping-policy">
                  <FileText className="w-4 h-4 mr-2" />
                  Shipping Policy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
