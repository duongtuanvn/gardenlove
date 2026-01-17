import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const navigation = [
  { name: "Shop All", href: "/collections" },
  { 
    name: "Categories", 
    href: "#",
    children: [
      { name: "Indoor Plants", href: "/collections/indoor" },
      { name: "Trees & Shrubs", href: "/collections/trees" },
      { name: "Perennials", href: "/collections/perennials" },
      { name: "Succulents", href: "/collections/succulents" },
      { name: "Herbs & Edibles", href: "/collections/herbs" },
    ]
  },
  { name: "New Arrivals", href: "/collections/new" },
  { name: "Plant Care", href: "/plant-care" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        🌿 Free Shipping on Orders $75+ | 100% Live Arrival Guarantee
      </div>

      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-foreground">Green Haven</span>
              <span className="text-xs block text-muted-foreground -mt-1">Nursery</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-card rounded-xl shadow-elevated p-2 min-w-[200px] border border-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="hero" size="sm" className="hidden sm:flex">
              Shop Now
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block py-3 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
