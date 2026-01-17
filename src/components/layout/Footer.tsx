import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Clock } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Plants", href: "/collections" },
    { name: "Indoor Plants", href: "/collections/indoor" },
    { name: "Trees & Shrubs", href: "/collections/trees" },
    { name: "Perennials", href: "/collections/perennials" },
    { name: "New Arrivals", href: "/collections/new" },
  ],
  help: [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Live Arrival Guarantee", href: "/guarantee" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
  learn: [
    { name: "Plant Care Guides", href: "/plant-care" },
    { name: "USDA Zone Guide", href: "/zone-guide" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-display font-bold">Green Haven</span>
                <span className="text-xs block text-primary-foreground/70 -mt-1">Nursery</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Family-owned nursery delivering healthy, happy plants to homes across America since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2.5">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2.5">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Business Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-primary-foreground">Green Haven Nursery LLC</span>
                  <span className="block">1234 Garden Way</span>
                  <span className="block">Portland, OR 97201</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary-foreground transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@greenhaven.com" className="hover:text-primary-foreground transition-colors">
                  support@greenhaven.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">Mon - Fri: 8AM - 6PM PST</span>
                  <span className="block">Sat: 9AM - 4PM PST</span>
                  <span className="block">Sun: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Green Haven Nursery. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
