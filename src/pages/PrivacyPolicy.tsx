import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Mail, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
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
                <span className="text-sm font-medium">Your Data is Protected</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                How we collect, use, and protect your personal information.
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
                Green Haven Nursery LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, shipping and billing address</li>
                <li><strong className="text-foreground">Payment Information:</strong> Credit card details, billing address (processed securely by our payment provider)</li>
                <li><strong className="text-foreground">Account Information:</strong> Username, password, order history</li>
                <li><strong className="text-foreground">Communications:</strong> Emails, customer service inquiries, reviews</li>
              </ul>
              <p className="text-muted-foreground">We also automatically collect certain information when you visit our website, including IP address, browser type, device information, and browsing behavior through cookies and similar technologies.</p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations, shipping updates, and tracking information</li>
                <li>Respond to customer service inquiries</li>
                <li>Send marketing emails (with your consent)</li>
                <li>Improve our website and customer experience</li>
                <li>Prevent fraud and protect our business</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">3. Cookies and Analytics</h2>
              <p className="text-muted-foreground mb-4">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Remember your preferences and shopping cart</li>
                <li>Analyze website traffic (Google Analytics)</li>
                <li>Deliver targeted advertising (Meta Pixel, Google Ads)</li>
                <li>Improve website functionality</li>
              </ul>
              <p className="text-muted-foreground mt-4">You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong className="text-foreground">Payment Processors:</strong> To process transactions securely (e.g., Stripe, PayPal)</li>
                <li><strong className="text-foreground">Shipping Carriers:</strong> To deliver your orders (USPS, UPS, FedEx)</li>
                <li><strong className="text-foreground">Email Service Providers:</strong> To send transactional and marketing emails</li>
                <li><strong className="text-foreground">Analytics Providers:</strong> To analyze website usage</li>
                <li><strong className="text-foreground">Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-muted-foreground mt-4">We do not sell your personal information to third parties.</p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order information is typically retained for 7 years for tax and legal purposes.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong className="text-foreground">Access:</strong> Request a copy of your personal information</li>
                <li><strong className="text-foreground">Correct:</strong> Update inaccurate information</li>
                <li><strong className="text-foreground">Delete:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">To exercise these rights, contact us at <a href="mailto:privacy@greenhaven-nursery.com" className="text-primary hover:underline">privacy@greenhaven-nursery.com</a>.</p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">7. Marketing Communications</h2>
              <p className="text-muted-foreground">
                You can opt out of marketing emails by clicking the "unsubscribe" link at the bottom of any email. Please note that you will continue to receive transactional emails (order confirmations, shipping updates) even after unsubscribing from marketing.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">8. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology and processed by PCI-compliant payment processors.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-xl font-display font-bold text-primary mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our website after changes constitutes acceptance of the updated policy.
              </p>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 mt-8 not-prose">
                <h2 className="text-xl font-display font-bold mb-4">Contact Us</h2>
                <p className="text-primary-foreground/80 mb-4">For privacy-related questions or to exercise your rights:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:privacy@greenhaven-nursery.com" className="hover:underline">privacy@greenhaven-nursery.com</a>
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

export default PrivacyPolicy;
