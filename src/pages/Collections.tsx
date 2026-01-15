import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, ShoppingCart, Star, SlidersHorizontal, X, ChevronRight } from "lucide-react";

import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";
import categoryPerennials from "@/assets/category-perennials.jpg";
import categoryShrubs from "@/assets/category-shrubs.jpg";

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    price: 45.99,
    comparePrice: null,
    image: categoryIndoor,
    badges: ["Best Seller", "Pet Safe"],
    rating: 4.9,
    reviews: 234,
    category: "Indoor Plants",
    type: "indoor",
    sunlight: "partial",
    zone: "10-12",
    tags: ["pet-safe", "easy-care"],
  },
  {
    id: 2,
    name: "Echeveria Collection",
    slug: "echeveria-collection",
    price: 24.99,
    comparePrice: 34.99,
    image: categorySucculents,
    badges: ["Easy Care", "Sale"],
    rating: 4.8,
    reviews: 156,
    category: "Succulents",
    type: "succulent",
    sunlight: "full",
    zone: "9-11",
    tags: ["easy-care", "beginner-friendly"],
  },
  {
    id: 3,
    name: "Japanese Maple",
    slug: "japanese-maple",
    price: 89.99,
    comparePrice: null,
    image: categoryTrees,
    badges: ["Premium"],
    rating: 5.0,
    reviews: 89,
    category: "Trees",
    type: "tree",
    sunlight: "partial",
    zone: "5-8",
    tags: ["fast-growing"],
  },
  {
    id: 4,
    name: "Herb Garden Starter Kit",
    slug: "herb-garden-starter",
    price: 29.99,
    comparePrice: null,
    image: categoryHerbs,
    badges: ["Beginner Friendly"],
    rating: 4.7,
    reviews: 312,
    category: "Herbs",
    type: "herb",
    sunlight: "full",
    zone: "4-10",
    tags: ["beginner-friendly", "easy-care"],
  },
  {
    id: 5,
    name: "Lavender Bundle",
    slug: "lavender-bundle",
    price: 34.99,
    comparePrice: 44.99,
    image: categoryPerennials,
    badges: ["Sale", "Fragrant"],
    rating: 4.6,
    reviews: 198,
    category: "Perennials",
    type: "perennial",
    sunlight: "full",
    zone: "5-9",
    tags: ["pet-safe"],
  },
  {
    id: 6,
    name: "Boxwood Shrub",
    slug: "boxwood-shrub",
    price: 54.99,
    comparePrice: null,
    image: categoryShrubs,
    badges: ["Classic"],
    rating: 4.5,
    reviews: 145,
    category: "Shrubs",
    type: "shrub",
    sunlight: "partial",
    zone: "5-9",
    tags: ["easy-care"],
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    price: 79.99,
    comparePrice: null,
    image: categoryIndoor,
    badges: ["Trending"],
    rating: 4.4,
    reviews: 267,
    category: "Indoor Plants",
    type: "indoor",
    sunlight: "partial",
    zone: "10-12",
    tags: [],
  },
  {
    id: 8,
    name: "Aloe Vera",
    slug: "aloe-vera",
    price: 19.99,
    comparePrice: null,
    image: categorySucculents,
    badges: ["Easy Care", "Medicinal"],
    rating: 4.9,
    reviews: 423,
    category: "Succulents",
    type: "succulent",
    sunlight: "full",
    zone: "9-11",
    tags: ["easy-care", "beginner-friendly", "pet-safe"],
  },
];

const plantTypes = [
  { value: "indoor", label: "Indoor Plants" },
  { value: "tree", label: "Trees" },
  { value: "shrub", label: "Shrubs" },
  { value: "perennial", label: "Perennials" },
  { value: "succulent", label: "Succulents" },
  { value: "herb", label: "Herbs" },
];

const sunlightOptions = [
  { value: "full", label: "Full Sun" },
  { value: "partial", label: "Partial Shade" },
  { value: "shade", label: "Full Shade" },
];

const zoneOptions = [
  { value: "3-5", label: "Zones 3-5 (Cold)" },
  { value: "5-8", label: "Zones 5-8 (Moderate)" },
  { value: "8-10", label: "Zones 8-10 (Warm)" },
  { value: "10-12", label: "Zones 10-12 (Tropical)" },
];

const badgeFilters = [
  { value: "pet-safe", label: "Pet Safe" },
  { value: "easy-care", label: "Easy Care" },
  { value: "beginner-friendly", label: "Beginner Friendly" },
  { value: "fast-growing", label: "Fast Growing" },
];

export default function Collections() {
  const { category } = useParams();
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSunlight, setSelectedSunlight] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setPriceRange([0, 100]);
    setSelectedTypes([]);
    setSelectedSunlight([]);
    setSelectedZones([]);
    setSelectedBadges([]);
  };

  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedSunlight.length > 0 ||
    selectedZones.length > 0 ||
    selectedBadges.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 100;

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
      return false;
    }
    if (selectedSunlight.length > 0 && !selectedSunlight.includes(product.sunlight)) {
      return false;
    }
    if (selectedBadges.length > 0 && !selectedBadges.some((b) => product.tags.includes(b))) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={5}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>

      {/* Plant Type */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Plant Type</h4>
        <div className="space-y-3">
          {plantTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedTypes.includes(type.value)}
                onCheckedChange={() => toggleFilter(type.value, selectedTypes, setSelectedTypes)}
              />
              <span className="text-sm text-foreground">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sunlight */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Sunlight</h4>
        <div className="space-y-3">
          {sunlightOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedSunlight.includes(option.value)}
                onCheckedChange={() =>
                  toggleFilter(option.value, selectedSunlight, setSelectedSunlight)
                }
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* USDA Zone */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">USDA Hardiness Zone</h4>
        <div className="space-y-3">
          {zoneOptions.map((zone) => (
            <label key={zone.value} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedZones.includes(zone.value)}
                onCheckedChange={() => toggleFilter(zone.value, selectedZones, setSelectedZones)}
              />
              <span className="text-sm text-foreground">{zone.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Features</h4>
        <div className="space-y-3">
          {badgeFilters.map((badge) => (
            <label key={badge.value} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedBadges.includes(badge.value)}
                onCheckedChange={() => toggleFilter(badge.value, selectedBadges, setSelectedBadges)}
              />
              <span className="text-sm text-foreground">{badge.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearAllFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">
              {category ? category.replace("-", " ") : "All Plants"}
            </span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container-custom py-12 md:py-16 lg:py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {category ? "Collection" : "All Collections"}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 capitalize tracking-tight">
              {category ? category.replace("-", " ") : "Shop All Plants"}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Browse our carefully curated collection of healthy, nursery-grown plants. Each plant
              comes with our <span className="text-primary font-medium">100% Live Arrival Guarantee</span>.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{allProducts.length}+</p>
                <p className="text-sm text-muted-foreground">Varieties</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">Free</p>
                <p className="text-sm text-muted-foreground">Shipping $75+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-xl p-6 shadow-soft">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">Filters</h3>
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                      {hasActiveFilters && (
                        <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                          !
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{sortedProducts.length}</span>{" "}
                  products
                </p>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                  >
                    {plantTypes.find((t) => t.value === type)?.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                {selectedBadges.map((badge) => (
                  <button
                    key={badge}
                    onClick={() => toggleFilter(badge, selectedBadges, setSelectedBadges)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                  >
                    {badgeFilters.find((b) => b.value === badge)?.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products match your filters
                </p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: { product: (typeof allProducts)[0] }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/products/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                badge === "Sale"
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
          <Heart className="w-4 h-4 text-foreground" />
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <Button variant="default" className="w-full" size="sm">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
          {product.comparePrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.comparePrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
