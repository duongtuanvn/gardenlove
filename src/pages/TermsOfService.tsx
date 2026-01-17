import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Legal Terms</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our website or making a purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-gray">
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 not-prose">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Effective Date:</strong> January 1, 2025<br />
                  <strong className="text-foreground">Last Updated:</strong> January 2025
                </p>
              </div>

              <p className="text-muted-foreground">
                Welcome to Green Haven Nursery. These Terms of Service ("Terms") govern your use of our website and purchases. By accessing our website or placing an order, you agree to be bound by these Terms.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">1. General Terms</h2>
              <p className="text-muted-foreground">
                Green Haven Nursery LLC ("we," "us," "our") operates this website. By using our website, you represent that you are at least 18 years old or have parental consent, and that you have the legal capacity to enter into these Terms.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">2. Products and Availability</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>All products are subject to availability. We reserve the right to limit quantities.</li>
                <li>Product images are for illustration purposes. Live plants may vary in size, shape, and color due to natural variation and seasonal factors.</li>
                <li>We make every effort to display accurate colors, but monitor settings may affect how colors appear.</li>
                <li>We reserve the right to discontinue any product at any time without notice.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">3. Pricing and Taxes</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>All prices are listed in US Dollars (USD).</li>
                <li>Prices are subject to change without notice.</li>
                <li>Sales tax will be applied where required by law and calculated at checkout.</li>
                <li>We are not responsible for pricing errors. If an item is listed at an incorrect price, we will notify you and cancel the order if you do not agree to the correct price.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">4. Orders and Payment</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>By placing an order, you are making an offer to purchase. We reserve the right to accept or decline any order.</li>
                <li>We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay.</li>
                <li>Payment is processed at the time of order.</li>
                <li>You agree to provide accurate and complete payment and shipping information.</li>
                <li>You can cancel or modify your order within 2 hours of placing it by contacting us. After this window, orders cannot be changed.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground mb-2">
                Please review our <Link to="/shipping" className="text-primary hover:underline">Shipping Information</Link> page for complete details.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>We ship to the contiguous 48 United States only.</li>
                <li>Risk of loss passes to you upon delivery to the carrier.</li>
                <li>We are not responsible for delays caused by carriers, weather, or customs.</li>
                <li>You are responsible for providing an accurate shipping address. Additional charges may apply for re-delivery due to incorrect addresses.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">6. Returns, Refunds, and Guarantee</h2>
              <p className="text-muted-foreground mb-2">
                Please review our <Link to="/returns" className="text-primary hover:underline">Returns & Refunds</Link> and <Link to="/guarantee" className="text-primary hover:underline">Live Arrival Guarantee</Link> pages for complete details.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Non-live items may be returned within 30 days in original condition.</li>
                <li>Live plants are covered by our Live Arrival Guarantee. Claims must be made within 48 hours of delivery.</li>
                <li>Refunds are processed to the original payment method within 5–7 business days.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">7. Product Disclaimers</h2>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 my-4 not-prose">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Live Plant Variation:</strong> Live plants are natural products. Size, shape, color, and bloom stage may vary from photos due to seasonality, growing conditions, and natural variation. This is not considered a defect.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>We are not responsible for plant performance after delivery. Success depends on your local conditions and care.</li>
                <li>Some plants may have thorns, may be toxic to pets, or may cause allergic reactions. Please research before purchasing.</li>
                <li>Check your USDA Hardiness Zone before purchasing outdoor plants.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website—including text, images, logos, and graphics—is owned by Green Haven Nursery LLC and protected by copyright and trademark laws. You may not copy, reproduce, distribute, or create derivative works without our written permission.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">9. User Conduct</h2>
              <p className="text-muted-foreground mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the website's operation</li>
                <li>Submit false or misleading information</li>
                <li>Engage in any activity that harms or could harm us or other users</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE FULLEST EXTENT PERMITTED BY LAW, GREEN HAVEN NURSERY LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE PRODUCT GIVING RISE TO THE CLAIM.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">11. Dispute Resolution</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>These Terms are governed by the laws of the State of Oregon, without regard to conflict of law principles.</li>
                <li>Any disputes shall be resolved through binding arbitration in Portland, Oregon, in accordance with the rules of the American Arbitration Association.</li>
                <li>You waive any right to participate in class action lawsuits or class-wide arbitration.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified Terms.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">13. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 mt-8 not-prose">
                <h2 className="text-xl font-display font-bold mb-4">Contact Us</h2>
                <p className="text-primary-foreground/80 mb-4">Questions about these Terms? Contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:support@greenhaven-nursery.com" className="hover:underline">support@greenhaven-nursery.com</a>
                  </div>
                  <div className="flex items-start gap-2 text-primary-foreground">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>Green Haven Nursery LLC<br />1234 Garden Way<br />Portland, OR 97201</span>
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

export default TermsOfService;
