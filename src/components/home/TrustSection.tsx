import { Shield, Truck, ThermometerSun, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "100% Live Arrival Guarantee",
    description: "Every plant arrives healthy or we replace it free — no questions asked.",
  },
  {
    icon: Truck,
    title: "Expertly Packaged",
    description: "Custom packaging designed by horticulturists to protect plants in transit.",
  },
  {
    icon: ThermometerSun,
    title: "Weather-Smart Shipping",
    description: "We monitor weather and use heat/cold packs to ensure safe delivery.",
  },
  {
    icon: BadgeCheck,
    title: "30-Day Guarantee",
    description: "Not thriving? Contact us within 30 days for a full refund or replacement.",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Plant Lovers Trust Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Shipping live plants is our specialty. We've perfected the process to ensure your plants arrive happy and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={item.title}
              className="trust-badge"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
