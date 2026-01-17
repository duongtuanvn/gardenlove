import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accessibility as AccessibilityIcon, Mail, Phone, CheckCircle } from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AccessibilityIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Accessibility Statement
              </h1>
              <p className="text-muted-foreground">
                Our commitment to making gardening accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Last Updated:</strong> January 2025
                </p>
              </div>

              {/* Commitment */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  Green Haven Nursery is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
                </p>
              </div>

              {/* Standards */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Accessibility Standards</h2>
                <p className="text-muted-foreground mb-4">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
                </p>
                <div className="bg-card rounded-xl p-5 border">
                  <h3 className="font-semibold text-foreground mb-3">Our efforts include:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Providing text alternatives for non-text content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ensuring sufficient color contrast between text and backgrounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Making all functionality available from a keyboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Providing clear navigation and consistent page structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Using descriptive link text and headings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ensuring forms are accessible with proper labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supporting screen readers and assistive technologies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Known Limitations */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Known Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive for full accessibility, we acknowledge that some areas of our website may not yet fully meet all accessibility standards. Known limitations include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Some older product images may lack detailed alt text descriptions</li>
                  <li>Third-party content (such as embedded videos) may not be fully accessible</li>
                  <li>PDF documents may not be fully screen-reader compatible</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We are actively working to address these issues and improve accessibility across our website.
                </p>
              </div>

              {/* Assistive Technology */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Compatibility with Assistive Technology</h2>
                <p className="text-muted-foreground">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                </ul>
              </div>

              {/* Feedback */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Feedback and Contact</h2>
                <p className="text-muted-foreground mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know:
                </p>
                <div className="bg-card rounded-xl p-5 border">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:accessibility@greenhaven-nursery.com" className="text-primary hover:underline">accessibility@greenhaven-nursery.com</a>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:+15551234567" className="text-primary hover:underline">(555) 123-4567</a>
                    </li>
                  </ul>
                </div>
                <p className="text-muted-foreground mt-4">
                  When contacting us, please include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>The web page URL where you encountered the issue</li>
                  <li>A description of the accessibility barrier</li>
                  <li>The assistive technology you were using (if applicable)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We aim to respond to accessibility feedback within 2 business days.
                </p>
              </div>

              {/* Alternative Access */}
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-4">Alternative Access</h2>
                <p className="text-muted-foreground">
                  If you are unable to access any content or feature on our website, please contact us. We will work with you to provide the information or service you need through an alternative method.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-display font-bold mb-4">Need Assistance?</h2>
                <p className="text-primary-foreground/80 mb-4">
                  Our team is happy to assist you with any accessibility needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:accessibility@greenhaven-nursery.com" className="inline-flex items-center gap-2 text-primary-foreground hover:underline">
                    <Mail className="w-4 h-4" />
                    accessibility@greenhaven-nursery.com
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

export default Accessibility;
