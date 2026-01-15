import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Truck, Clock, Thermometer, MapPin, Package, AlertCircle, CheckCircle } from "lucide-react";

const ShippingPolicy = () => {
  const shippingZones = [
    { zone: "Zone 1", states: "West Coast (CA, OR, WA)", time: "2-3 business days" },
    { zone: "Zone 2", states: "Mountain West (AZ, NV, UT, CO, NM)", time: "3-4 business days" },
    { zone: "Zone 3", states: "Midwest (TX, OK, KS, NE, IA, MN, etc.)", time: "4-5 business days" },
    { zone: "Zone 4", states: "Southeast & Northeast", time: "5-7 business days" }
  ];

  const restrictedStates = ["Alaska", "Hawaii", "Puerto Rico"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-forest/10 to-sage/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Truck className="w-16 h-16 text-forest mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-forest mb-6">
                Shipping & Delivery
              </h1>
              <p className="text-lg text-muted-foreground">
                We take extra care to ensure your plants arrive healthy and happy. Learn about our 
                shipping process, delivery times, and what to expect.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Processing Time */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-forest mb-4">Processing Time</h2>
                    <p className="text-muted-foreground mb-4">
                      Orders are typically processed within <strong>1-3 business days</strong>. During peak 
                      seasons (spring and early summer), processing may take up to 5 business days.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-forest" />
                        Orders placed before 12 PM PST may ship same day
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-forest" />
                        You'll receive tracking info via email once shipped
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-forest" />
                        We ship Monday through Wednesday to avoid weekend delays
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery Zones */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-forest" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-forest mb-4">Delivery Zones & Transit Times</h2>
                    <p className="text-muted-foreground mb-6">
                      We ship from our facilities in Oregon and Florida to optimize delivery times across the country.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Zone</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">States Covered</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Est. Transit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {shippingZones.map((zone, index) => (
                            <tr key={index} className="border-b border-border/50">
                              <td className="py-3 px-4 text-sm font-medium text-forest">{zone.zone}</td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{zone.states}</td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{zone.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Holds */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-forest mb-4">Weather-Smart Shipping</h2>
                    <p className="text-muted-foreground mb-4">
                      Live plants are sensitive to extreme temperatures. To protect your plants, we may 
                      implement weather holds when temperatures along the shipping route fall below 35°F 
                      or exceed 95°F.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-amber-800">Weather Hold Notice</p>
                          <p className="text-sm text-amber-700 mt-1">
                            If a weather hold affects your order, we'll notify you by email and ship as soon 
                            as conditions are safe. Your patience ensures your plants arrive in the best condition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packaging */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-forest mb-4">Expert Packaging</h2>
                    <p className="text-muted-foreground mb-4">
                      Every plant is carefully packaged by our trained team using:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Custom-fit boxes to prevent shifting",
                        "Biodegradable packing materials",
                        "Moisture-retaining wraps for roots",
                        "Heat packs in winter (when needed)",
                        "Cool packs in summer (when needed)",
                        "Clear unpacking instructions"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-forest flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Restricted Areas */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border-l-4 border-terracotta">
                <h2 className="text-2xl font-display font-bold text-forest mb-4">Shipping Restrictions</h2>
                <p className="text-muted-foreground mb-4">
                  Due to agricultural regulations and the challenges of shipping live plants, we currently 
                  cannot ship to:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {restrictedStates.map((state, index) => (
                    <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                      {state}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Additionally, certain plants may have state-specific restrictions. These will be noted on 
                  the product page.
                </p>
              </div>

              {/* Shipping Rates */}
              <div className="bg-forest text-white rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Shipping Rates</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Shipping</h3>
                    <ul className="space-y-1 text-white/80 text-sm">
                      <li>Orders under $75: $9.99</li>
                      <li>Orders $75-$150: $12.99</li>
                      <li>Orders over $150: FREE!</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expedited Shipping</h3>
                    <ul className="space-y-1 text-white/80 text-sm">
                      <li>2-Day Express: Starting at $24.99</li>
                      <li>Overnight: Starting at $39.99</li>
                      <li>Available at checkout based on location</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
