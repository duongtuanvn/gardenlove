import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, CheckCircle, XCircle, Camera, Clock, Mail, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LiveArrivalGuarantee = () => {
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">100% Guaranteed</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Live Arrival Guarantee
              </h1>
              <p className="text-lg text-muted-foreground">
                Every plant is guaranteed to arrive alive and healthy—or we'll make it right.
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
                  <Shield className="w-5 h-5" />
                  Guarantee Summary
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Claim Window:</span>
                    <span className="font-medium">48 hours from delivery</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution:</span>
                    <span className="font-medium">Replacement or full refund</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Required:</span>
                    <span className="font-medium">Photos of plant & packaging</span>
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
              
              {/* Our Promise */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Our Promise</h2>
                <p className="text-muted-foreground">
                  We stand behind every plant we ship. If your plant arrives damaged, dead, or significantly different from what was ordered, we'll replace it or issue a full refund—no questions asked. Your satisfaction is our top priority.
                </p>
              </div>

              {/* What's Covered vs Not Covered */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">What's Covered</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-5 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Covered by Guarantee
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Plant arrives dead or dying</li>
                      <li>• Severe damage during shipping (broken stems, crushed leaves)</li>
                      <li>• Wrong plant shipped</li>
                      <li>• Missing plants from order</li>
                      <li>• Plant arrives frozen or heat-damaged</li>
                      <li>• Significant pest infestation on arrival</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-destructive/20">
                    <h3 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Not Covered
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Claims made after 48 hours</li>
                      <li>• Damage due to improper care after delivery</li>
                      <li>• Delivery delays caused by incorrect address</li>
                      <li>• Package not retrieved promptly (left outside 24+ hours)</li>
                      <li>• Minor cosmetic issues (normal transit stress)</li>
                      <li>• Natural leaf drop or transplant shock</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Some transplant shock is normal. Minor wilting, leaf yellowing, or leaf drop can occur during transit. Most plants recover within 1–2 weeks with proper care. This is not considered damage.
                  </p>
                </div>
              </div>

              {/* How to File a Claim */}
              <div className="bg-secondary rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  How to File a Claim
                </h2>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-foreground mb-1">Document the Issue (Within 48 Hours)</p>
                      <p className="text-sm text-muted-foreground">Take clear photos immediately upon delivery. Don't discard any packaging.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email Us</p>
                      <p className="text-sm text-muted-foreground">
                        Send an email to <a href="mailto:support@greenhaven-nursery.com" className="text-primary hover:underline">support@greenhaven-nursery.com</a> with:
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Your order number</li>
                        <li>• Description of the issue</li>
                        <li>• Photos (see requirements below)</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-foreground mb-1">We'll Respond Within 24 Hours</p>
                      <p className="text-sm text-muted-foreground">Our team will review your claim and get back to you with a resolution—typically a free replacement or full refund.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Photo Requirements */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Required Photos for Claims
                </h2>
                <p className="text-muted-foreground mb-4">To process your claim quickly, please provide the following photos:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl p-4 border text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🌱</span>
                    </div>
                    <p className="font-medium text-foreground text-sm">The Plant</p>
                    <p className="text-xs text-muted-foreground mt-1">Clear photo showing the damage</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📦</span>
                    </div>
                    <p className="font-medium text-foreground text-sm">The Packaging</p>
                    <p className="text-xs text-muted-foreground mt-1">Box condition, inside packing</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🏷️</span>
                    </div>
                    <p className="font-medium text-foreground text-sm">Shipping Label</p>
                    <p className="text-xs text-muted-foreground mt-1">Visible tracking/order info</p>
                  </div>
                </div>
              </div>

              {/* Resolution Options */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Resolution Options</h2>
                <p className="text-muted-foreground mb-4">Once your claim is approved, you can choose:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl p-4 border">
                    <h3 className="font-semibold text-foreground mb-2">🔄 Free Replacement</h3>
                    <p className="text-sm text-muted-foreground">We'll ship a new plant at no charge (subject to availability).</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border">
                    <h3 className="font-semibold text-foreground mb-2">💳 Full Refund</h3>
                    <p className="text-sm text-muted-foreground">Refund to your original payment method within 5–7 business days.</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border">
                    <h3 className="font-semibold text-foreground mb-2">🎁 Store Credit</h3>
                    <p className="text-sm text-muted-foreground">Credit applied to your account for future purchases.</p>
                  </div>
                </div>
              </div>

              {/* Weather Delay Policy */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Weather Delay Policy
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>We proactively hold shipments when extreme weather is forecasted along the shipping route:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Temperatures below 35°F or above 95°F trigger automatic holds</li>
                    <li>You'll receive an email notification explaining the delay</li>
                    <li>Shipment resumes as soon as conditions are safe</li>
                  </ul>
                  <p>This policy helps us deliver healthy plants and reduces the need for claims. For more details, see our <Link to="/shipping" className="text-primary hover:underline">Shipping Information</Link> page.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold mb-4">File a Claim</h2>
                <p className="text-primary-foreground/80 mb-4">Remember: Claims must be submitted within 48 hours of delivery.</p>
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

export default LiveArrivalGuarantee;
