import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";

import categoryPerennials from "@/assets/category-perennials.jpg";
import categoryShrubs from "@/assets/category-shrubs.jpg";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    price: 45.99,
    comparePrice: null,
    image: categoryIndoor,
    badges: ["Best Seller"],
    rating: 4.9,
    reviews: 234,
    category: "Indoor Plants",
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
  },
  {
    id: 5,
    name: "Lavender English",
    slug: "lavender-english",
    price: 18.99,
    comparePrice: null,
    image: categoryPerennials,
    badges: ["Fragrant"],
    rating: 4.8,
    reviews: 198,
    category: "Perennials",
  },
  {
    id: 6,
    name: "Hydrangea Endless Summer",
    slug: "hydrangea-endless-summer",
    price: 54.99,
    comparePrice: 64.99,
    image: categoryShrubs,
    badges: ["Sale", "Popular"],
    rating: 4.9,
    reviews: 276,
    category: "Shrubs",
  },
  {
    id: 7,
    name: "Snake Plant Laurentii",
    slug: "snake-plant-laurentii",
    price: 32.99,
    comparePrice: null,
    image: categoryIndoor,
    badges: ["Low Light", "Pet Safe"],
    rating: 4.9,
    reviews: 421,
    category: "Indoor Plants",
  },
  {
    id: 8,
    name: "Succulent Variety Pack",
    slug: "succulent-variety-pack",
    price: 39.99,
    comparePrice: 49.99,
    image: categorySucculents,
    badges: ["Sale", "Gift Idea"],
    rating: 4.7,
    reviews: 183,
    category: "Succulents",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Trending Now
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Customer Favorites
            </h2>
          </div>
          <Link 
            to="/collections/bestsellers" 
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            View all bestsellers →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  // Calculate discount percentage
  const discountPercent = product.comparePrice 
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null;

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
          {product.badges
            .filter(badge => badge !== "Sale") // Remove "Sale" text badge, we'll show % instead
            .map((badge) => (
              <span
                key={badge}
                className="text-xs font-medium px-2 py-1 rounded-full bg-primary text-primary-foreground"
              >
                {badge}
              </span>
            ))}
          {/* Show discount percentage badge if on sale */}
          {discountPercent && (
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-accent text-accent-foreground">
              -{discountPercent}%
            </span>
          )}
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
          <span className="text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
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
