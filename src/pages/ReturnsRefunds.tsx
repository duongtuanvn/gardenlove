import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RotateCcw, CheckCircle, XCircle, Clock, Package, Mail, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ReturnsRefunds = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <RotateCcw className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Returns & Refunds
              </h1>
              <p className="text-muted-foreground">
                Our policies for returns, refunds, and exchanges. We want you to be completely satisfied.
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
                  Return & Refund Summary
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">Non-Live Items (pots, tools, accessories):</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Return window: 30 days</li>
                      <li>• Condition: Unused, original packaging</li>
                      <li>• Return shipping: Customer pays</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Live Plants:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• See <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link></li>
                      <li>• Claim window: 48 hours from delivery</li>
                      <li>• Resolution: Replacement or refund</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Refund Method:</span>
                    <span className="font-medium">Original payment method</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="font-medium">5–7 business days</span>
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
              
              {/* Eligibility */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Return Eligibility
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-5 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Eligible for Return
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pots, planters, and containers</li>
                      <li>• Gardening tools and accessories</li>
                      <li>• Unused fertilizers and soil (sealed)</li>
                      <li>• Gift cards (refund to store credit only)</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-destructive/20">
                    <h3 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Not Eligible for Return
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Live plants (see <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link>)</li>
                      <li>• Bulbs and seeds</li>
                      <li>• Opened fertilizers or soil</li>
                      <li>• Items marked "Final Sale"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Return Window */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Return Window
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>You have <strong className="text-foreground">30 days</strong> from the delivery date to initiate a return for eligible non-live items.</p>
                  <p>For live plants, our <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link> applies. You must report any issues within <strong className="text-foreground">48 hours</strong> of delivery.</p>
                </div>
              </div>

              {/* Return Conditions */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Return Conditions
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>To be eligible for a return, items must be:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Unused and in original condition</li>
                    <li>In original packaging with all tags attached</li>
                    <li>Free from damage caused by the customer</li>
                  </ul>
                  <p className="text-sm">Items that don't meet these conditions may be refused or subject to a restocking fee (up to 20%).</p>
                </div>
              </div>

              {/* Return Shipping Fees */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Return Shipping</h2>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-foreground">Standard returns:</strong> Customer is responsible for return shipping costs</li>
                    <li><strong className="text-foreground">Defective or wrong items:</strong> We provide a prepaid shipping label</li>
                    <li><strong className="text-foreground">Live plant issues:</strong> No return shipping required—see <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link></li>
                  </ul>
                  <p className="text-sm">We recommend using a trackable shipping method. We are not responsible for items lost in return transit.</p>
                </div>
              </div>

              {/* Refund Timing & Method */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Refund Timing & Method</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Once we receive and inspect your return:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>We'll email you within <strong className="text-foreground">2 business days</strong> to confirm approval</li>
                    <li>Approved refunds are processed to your <strong className="text-foreground">original payment method</strong></li>
                    <li>Refunds typically appear within <strong className="text-foreground">5–7 business days</strong> (depending on your bank)</li>
                  </ul>
                  <p className="text-sm">Original shipping costs are non-refundable unless the return is due to our error.</p>
                </div>
              </div>

              {/* Exchanges */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Exchanges</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>We currently do not offer direct exchanges. To exchange an item:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Return the original item for a refund</li>
                    <li>Place a new order for the item you want</li>
                  </ol>
                  <p className="text-sm">This ensures you get your new item as quickly as possible!</p>
                </div>
              </div>

              {/* Damaged/Incorrect Items */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Damaged or Incorrect Items
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>If you receive a damaged or incorrect item:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Contact us within <strong className="text-foreground">48 hours</strong> of delivery</li>
                    <li>Provide photos of the item, packaging, and shipping label</li>
                    <li>We'll arrange a replacement or full refund at no cost to you</li>
                  </ol>
                  <p>For live plants, please see our <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link> for the full claims process.</p>
                </div>
              </div>

              {/* How to Start a Return */}
              <div className="bg-secondary rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold text-primary mb-4">How to Start a Return</h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-sm text-muted-foreground">Send an email to <a href="mailto:support@greenhaven-nursery.com" className="text-primary hover:underline">support@greenhaven-nursery.com</a> with your order number and reason for return.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-foreground">Receive Instructions</p>
                      <p className="text-sm text-muted-foreground">We'll reply within 1 business day with return authorization and shipping instructions.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-foreground">Ship Your Return</p>
                      <p className="text-sm text-muted-foreground">Pack the item securely and ship to the address provided. Keep your tracking number!</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                    <div>
                      <p className="font-medium text-foreground">Receive Your Refund</p>
                      <p className="text-sm text-muted-foreground">Once inspected, we'll process your refund within 5–7 business days.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold mb-4">Need Help?</h2>
                <p className="text-primary-foreground/80 mb-4">Our customer support team is here to assist with returns and refunds.</p>
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

export default ReturnsRefunds;
