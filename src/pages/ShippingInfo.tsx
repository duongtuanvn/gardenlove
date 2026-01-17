import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Truck, Clock, Thermometer, MapPin, Package, AlertCircle, CheckCircle, Mail, Phone, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ShippingInfo = () => {
  const shippingZones = [
    { zone: "Zone 1", states: "West Coast (CA, OR, WA)", time: "2-3 business days" },
    { zone: "Zone 2", states: "Mountain West (AZ, NV, UT, CO, NM)", time: "3-4 business days" },
    { zone: "Zone 3", states: "Midwest (TX, OK, KS, NE, IA, MN, etc.)", time: "4-5 business days" },
    { zone: "Zone 4", states: "Southeast & Northeast", time: "5-7 business days" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-medium">Fast & Safe Delivery</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Shipping Information
              </h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about how we ship live plants safely to your door.
              </p>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Shipping Summary
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="font-medium">1–2 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cut-off Time:</span>
                    <span className="font-medium">12:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carriers:</span>
                    <span className="font-medium">USPS, UPS, FedEx</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tracking:</span>
                    <span className="font-medium">Provided via email</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ship Days:</span>
                    <span className="font-medium">Mon–Wed only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Free Shipping:</span>
                    <span className="font-medium">Orders over $150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              
              {/* Order Processing */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Order Processing</h2>
                </div>
                <div className="pl-13 space-y-3 text-muted-foreground">
                  <p>Orders are processed within <strong className="text-foreground">1–2 business days</strong>. During peak seasons (spring/early summer), processing may take up to 3–5 business days.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Orders placed before 12:00 PM PST may ship the same day</li>
                    <li>You'll receive a confirmation email with tracking once shipped</li>
                    <li>We ship <strong className="text-foreground">Monday through Wednesday only</strong> to ensure plants don't spend weekends in transit</li>
                  </ul>
                </div>
              </div>

              {/* Shipping Methods & Rates */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Shipping Methods & Rates</h2>
                </div>
                <div className="bg-card rounded-xl p-6 border">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Standard Shipping</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between">
                          <span>Orders under $75:</span>
                          <span className="font-medium text-foreground">$9.99</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Orders $75–$149:</span>
                          <span className="font-medium text-foreground">$12.99</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Orders $150+:</span>
                          <span className="font-medium text-primary">FREE</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Expedited Shipping</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between">
                          <span>2-Day Express:</span>
                          <span className="font-medium text-foreground">From $24.99</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Overnight:</span>
                          <span className="font-medium text-foreground">From $39.99</span>
                        </li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">*Rates vary by location and weight</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Estimates */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Delivery Estimates</h2>
                </div>
                <p className="text-muted-foreground mb-4">We ship from our facilities in Oregon and Florida to optimize delivery times nationwide.</p>
                <div className="overflow-x-auto">
                  <table className="w-full bg-card rounded-xl border">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Zone</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">States</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shippingZones.map((zone, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4 text-sm font-medium text-primary">{zone.zone}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{zone.states}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{zone.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Where We Ship */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Where We Ship</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>We currently ship to the <strong className="text-foreground">contiguous 48 United States</strong>.</p>
                  <p><strong className="text-foreground">We cannot ship to:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Alaska</li>
                    <li>Hawaii</li>
                    <li>Puerto Rico and U.S. Territories</li>
                    <li>PO Boxes (live plants require signature)</li>
                    <li>International addresses</li>
                  </ul>
                  <p className="text-sm">Some plants have state-specific agricultural restrictions, which will be noted on the product page.</p>
                </div>
              </div>

              {/* Weather-Smart Shipping */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Live Plant Weather-Smart Shipping</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Live plants are sensitive to extreme temperatures. To protect your plants:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>We monitor weather along all shipping routes</li>
                    <li>We may implement <strong className="text-foreground">weather holds</strong> when temps fall below 35°F or exceed 95°F</li>
                    <li>Heat packs or cold packs are included when necessary (at no extra charge)</li>
                    <li>You'll be notified by email if your order is delayed due to weather</li>
                  </ul>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <p className="text-sm"><strong className="text-foreground">Weather Hold Policy:</strong> If conditions are unsafe, we'll hold your shipment and ship as soon as the forecast improves. Your patience ensures your plants arrive healthy!</p>
                  </div>
                </div>
              </div>

              {/* Tracking & Address Changes */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Tracking & Address Changes</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tracking information is emailed once your order ships</li>
                    <li>You can also view tracking in your account under "Order History"</li>
                    <li><strong className="text-foreground">Address changes:</strong> Contact us within 2 hours of placing your order. Once an order enters processing, we cannot modify the address.</li>
                  </ul>
                </div>
              </div>

              {/* Lost/Damaged in Transit */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary">Lost or Damaged in Transit</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>If your package is lost or arrives damaged:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Contact us within <strong className="text-foreground">48 hours</strong> of delivery</li>
                    <li>Provide photos of the damage (plant, packaging, and shipping label)</li>
                    <li>We'll arrange a replacement or refund under our <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link></li>
                  </ul>
                  <p>For full details, see our <Link to="/returns" className="text-primary hover:underline">Returns & Refunds</Link> and <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link> pages.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold mb-4">Questions About Shipping?</h2>
                <p className="text-primary-foreground/80 mb-4">Our support team is happy to help with any shipping questions.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:support@greenhaven-nursery.com" className="inline-flex items-center gap-2 text-primary-foreground hover:underline">
                    <Mail className="w-4 h-4" />
                    support@greenhaven-nursery.com
                  </a>
                  <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-primary-foreground hover:underline">
                    <Phone className="w-4 h-4" />
                    (555) 123-4567
                  </a>
                </div>
                <p className="text-xs text-primary-foreground/60 mt-4">Last updated: January 2025</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
