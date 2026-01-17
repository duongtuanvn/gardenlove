import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, Leaf, ShoppingBag, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularLinks = [
    { name: "Shop All Plants", href: "/collections", icon: ShoppingBag },
    { name: "Search Products", href: "/search", icon: Search },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Decorative plant illustration */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-cream rounded-full flex items-center justify-center">
                <Leaf className="w-16 h-16 text-primary/40" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-7xl md:text-8xl font-display font-bold text-primary">
                  404
                </span>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Oops! This page has wilted away
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or may have been moved. 
              Let's get you back to greener pastures!
            </p>

            {/* Primary actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>

            {/* Popular links */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4">Or try one of these:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {popularLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center gap-2 px-4 py-2.5 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact support */}
            <p className="text-sm text-muted-foreground mt-8">
              Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
