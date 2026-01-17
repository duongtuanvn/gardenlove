import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Search as SearchIcon, X, SlidersHorizontal, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample products data - in a real app this would come from an API/database
const allProducts = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    category: "Indoor Plants",
    price: 49.99,
    image: "/placeholder.svg",
    description: "Popular statement plant with large, violin-shaped leaves",
    tags: ["indoor", "tropical", "low-light tolerant"]
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    category: "Indoor Plants",
    price: 39.99,
    image: "/placeholder.svg",
    description: "Iconic split-leaf tropical plant",
    tags: ["indoor", "tropical", "easy care"]
  },
  {
    id: 3,
    name: "Japanese Maple",
    slug: "japanese-maple",
    category: "Trees",
    price: 89.99,
    image: "/placeholder.svg",
    description: "Elegant ornamental tree with stunning fall color",
    tags: ["outdoor", "tree", "shade", "fall color"]
  },
  {
    id: 4,
    name: "Lavender",
    slug: "lavender",
    category: "Perennials",
    price: 12.99,
    image: "/placeholder.svg",
    description: "Fragrant purple flowering perennial",
    tags: ["outdoor", "perennial", "fragrant", "drought tolerant"]
  },
  {
    id: 5,
    name: "Aloe Vera",
    slug: "aloe-vera",
    category: "Succulents",
    price: 14.99,
    image: "/placeholder.svg",
    description: "Medicinal succulent easy to grow indoors",
    tags: ["indoor", "succulent", "easy care", "medicinal"]
  },
  {
    id: 6,
    name: "Snake Plant",
    slug: "snake-plant",
    category: "Indoor Plants",
    price: 29.99,
    image: "/placeholder.svg",
    description: "Hardy low-light plant perfect for beginners",
    tags: ["indoor", "low-light", "easy care", "air purifying"]
  },
  {
    id: 7,
    name: "Basil",
    slug: "basil",
    category: "Herbs",
    price: 6.99,
    image: "/placeholder.svg",
    description: "Aromatic culinary herb for cooking",
    tags: ["herb", "edible", "annual", "kitchen"]
  },
  {
    id: 8,
    name: "Rose Bush",
    slug: "rose-bush",
    category: "Shrubs",
    price: 34.99,
    image: "/placeholder.svg",
    description: "Classic flowering shrub with fragrant blooms",
    tags: ["outdoor", "shrub", "flowering", "fragrant"]
  },
  {
    id: 9,
    name: "Pothos",
    slug: "pothos",
    category: "Indoor Plants",
    price: 19.99,
    image: "/placeholder.svg",
    description: "Trailing vine perfect for hanging baskets",
    tags: ["indoor", "easy care", "low-light", "hanging"]
  },
  {
    id: 10,
    name: "Hydrangea",
    slug: "hydrangea",
    category: "Shrubs",
    price: 44.99,
    image: "/placeholder.svg",
    description: "Showy flowering shrub with large bloom clusters",
    tags: ["outdoor", "shrub", "flowering", "shade tolerant"]
  },
  {
    id: 11,
    name: "Echeveria",
    slug: "echeveria",
    category: "Succulents",
    price: 9.99,
    image: "/placeholder.svg",
    description: "Rosette-forming succulent in various colors",
    tags: ["succulent", "indoor", "easy care", "colorful"]
  },
  {
    id: 12,
    name: "Mint",
    slug: "mint",
    category: "Herbs",
    price: 5.99,
    image: "/placeholder.svg",
    description: "Fast-growing aromatic herb for teas and cooking",
    tags: ["herb", "edible", "perennial", "fragrant"]
  }
];

const categories = ["All", "Indoor Plants", "Trees", "Shrubs", "Perennials", "Succulents", "Herbs"];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "All";
  
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let results = allProducts;
    
    // Filter by search query
    if (query.trim()) {
      const searchTerms = query.toLowerCase().trim().split(/\s+/);
      results = results.filter(product => {
        const searchableText = `${product.name} ${product.description} ${product.category} ${product.tags.join(" ")}`.toLowerCase();
        return searchTerms.every(term => searchableText.includes(term));
      });
    }
    
    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    return results;
  }, [query, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedCategory !== "All") params.set("category", selectedCategory);
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category !== "All") params.set("category", category);
    setSearchParams(params);
  };

  const clearSearch = () => {
    setQuery("");
    setSelectedCategory("All");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Search Header */}
        <section className="py-8 md:py-12 bg-cream border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-display font-bold text-forest text-center mb-6">
                Search Plants
              </h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for plants, trees, succulents..."
                  className="pl-12 pr-24 h-14 text-lg rounded-full border-2 border-border focus:border-primary"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  {query && (
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setQuery("")}
                      className="h-10 w-10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  <Button type="submit" size="sm" className="h-10 px-4 rounded-full">
                    Search
                  </Button>
                </div>
              </form>

              {/* Quick category filters */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer text-sm py-1.5 px-4 ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                {query || selectedCategory !== "All" ? (
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> result{filteredProducts.length !== 1 ? "s" : ""}
                    {query && <> for "<span className="font-medium text-foreground">{query}</span>"</>}
                    {selectedCategory !== "All" && <> in <span className="font-medium text-foreground">{selectedCategory}</span></>}
                  </p>
                ) : (
                  <p className="text-muted-foreground">
                    Browse all <span className="font-semibold text-foreground">{allProducts.length}</span> plants
                  </p>
                )}
              </div>
              {(query || selectedCategory !== "All") && (
                <Button variant="ghost" size="sm" onClick={clearSearch} className="text-muted-foreground">
                  Clear filters
                </Button>
              )}
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-card/90 text-foreground text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-lg font-bold text-primary mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  No plants found
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn't find any plants matching your search. Try different keywords or browse our categories.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button variant="outline" onClick={clearSearch}>
                    Clear Search
                  </Button>
                  <Link to="/collections">
                    <Button>Browse All Plants</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Popular Searches */}
        {!query && selectedCategory === "All" && (
          <section className="py-8 bg-cream/50 border-t">
            <div className="container mx-auto px-4">
              <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
                Popular Searches
              </h2>
              <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
                {["Monstera", "Fiddle Leaf", "Snake Plant", "Succulents", "Low Light Plants", "Easy Care", "Outdoor Trees"].map((term) => (
                  <Badge
                    key={term}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors py-2 px-4"
                    onClick={() => {
                      setQuery(term);
                      setSearchParams({ q: term });
                    }}
                  >
                    {term}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
