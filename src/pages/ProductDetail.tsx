import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronRight,
  Truck,
  Shield,
  RefreshCw,
  Sun,
  Droplets,
  Thermometer,
  Ruler,
  PawPrint,
  Minus,
  Plus,
  Check,
} from "lucide-react";

import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";

// Mock product data
const productData = {
  "monstera-deliciosa": {
    id: 1,
    name: "Monstera Deliciosa",
    slug: "monstera-deliciosa",
    price: 45.99,
    comparePrice: null,
    images: [categoryIndoor, categorySucculents, categoryTrees, categoryHerbs],
    badges: ["Best Seller", "Pet Safe"],
    rating: 4.9,
    reviewCount: 234,
    category: "Indoor Plants",
    inStock: true,
    variants: [
      { id: 1, name: "Small (4\" pot)", price: 45.99, inStock: true },
      { id: 2, name: "Medium (6\" pot)", price: 69.99, inStock: true },
      { id: 3, name: "Large (8\" pot)", price: 99.99, inStock: false },
    ],
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is one of the most iconic and beloved houseplants. Native to the tropical forests of Central America, this stunning plant features large, glossy, heart-shaped leaves that develop unique perforations as they mature.",
    careGuide: {
      sunlight: "Bright indirect light. Avoid direct sunlight which can burn leaves.",
      water: "Water when top 2 inches of soil are dry. Typically every 1-2 weeks.",
      zone: "10-12 (Indoor in cooler zones)",
      matureSize: "6-8 feet indoors, can reach 10+ feet with proper support",
      petSafe: true,
      difficulty: "Easy",
    },
    features: [
      "Air-purifying qualities",
      "Low maintenance requirements",
      "Dramatic tropical aesthetic",
      "Pet-friendly (non-toxic)",
    ],
    shippingInfo:
      "Ships in 2-3 business days. Live plants ship Monday-Wednesday to ensure freshness. Weather holds may apply for extreme temperatures.",
    customerReviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2024-01-15",
        title: "Absolutely stunning!",
        content:
          "This plant arrived in perfect condition and is even more beautiful than the photos. Already seeing new growth after just 2 weeks!",
        verified: true,
      },
      {
        id: 2,
        author: "Michael R.",
        rating: 5,
        date: "2024-01-10",
        title: "Great packaging",
        content:
          "The care that went into packaging this plant was impressive. No damage during shipping and the plant was well-hydrated on arrival.",
        verified: true,
      },
      {
        id: 3,
        author: "Jennifer L.",
        rating: 4,
        date: "2024-01-05",
        title: "Healthy plant",
        content:
          "Plant arrived healthy with some minor shipping stress. Recovered beautifully within a week. Very happy with my purchase.",
        verified: true,
      },
    ],
    faq: [
      {
        question: "How often should I water my Monstera?",
        answer:
          "Water your Monstera when the top 2-3 inches of soil feel dry. In most indoor environments, this is typically every 1-2 weeks. Reduce watering in winter months.",
      },
      {
        question: "Why are the leaves not developing holes?",
        answer:
          "Young Monstera leaves are typically solid. Fenestrations (holes) develop as the plant matures, usually appearing on leaves after the plant reaches 2-3 years of age with proper light exposure.",
      },
      {
        question: "Is this plant toxic to pets?",
        answer:
          "Monstera is mildly toxic if ingested by cats and dogs. While typically not life-threatening, it can cause oral irritation, drooling, and vomiting. Keep out of reach of curious pets.",
      },
    ],
  },
};

const relatedProducts = [
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    price: 79.99,
    image: categoryIndoor,
    rating: 4.4,
  },
  {
    id: 3,
    name: "Bird of Paradise",
    slug: "bird-of-paradise",
    price: 89.99,
    image: categoryTrees,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Pothos Golden",
    slug: "pothos-golden",
    price: 24.99,
    image: categorySucculents,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Peace Lily",
    slug: "peace-lily",
    price: 34.99,
    image: categoryHerbs,
    rating: 4.6,
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product data (default to monstera for demo)
  const product = productData["monstera-deliciosa"];

  const currentVariant = product.variants[selectedVariant];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              to="/collections"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              to="/collections/indoor-plants"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              {/* Wishlist */}
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                <Heart className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-accent font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">
                ${currentVariant.price.toFixed(2)}
              </span>
              {product.comparePrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.comparePrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Variants */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Size</label>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    disabled={!variant.inStock}
                    className={`px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedVariant === index
                        ? "border-primary bg-primary/5 text-primary"
                        : variant.inStock
                        ? "border-border hover:border-primary/50 text-foreground"
                        : "border-border bg-muted text-muted-foreground cursor-not-allowed line-through"
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="flex-1 h-12"
                disabled={!currentVariant.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {currentVariant.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Live Arrival Guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">Free Shipping $75+</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">30-Day Returns</p>
              </div>
            </div>

            {/* Quick Care Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Sun className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Light</p>
                  <p className="text-sm font-medium">Bright Indirect</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Droplets className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Water</p>
                  <p className="text-sm font-medium">Every 1-2 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Thermometer className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Zone</p>
                  <p className="text-sm font-medium">{product.careGuide.zone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <PawPrint className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Pet Safety</p>
                  <p className="text-sm font-medium">
                    {product.careGuide.petSafe ? "Pet Friendly" : "Toxic to Pets"}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 md:mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 space-x-8">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="care"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Care Guide
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Shipping
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose prose-green max-w-none">
                <p className="text-foreground leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Sun className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Sunlight</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.careGuide.sunlight}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Droplets className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Watering</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.careGuide.water}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Thermometer className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Hardiness Zone</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.careGuide.zone}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Ruler className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Mature Size</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.careGuide.matureSize}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <div className="space-y-4">
                <p className="text-foreground">{product.shippingInfo}</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Live Arrival Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      If your plant arrives damaged, we'll replace it free of charge.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Truck className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Expert Packaging</h4>
                    <p className="text-sm text-muted-foreground">
                      Each plant is carefully packaged to ensure safe transit.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <RefreshCw className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">30-Day Returns</h4>
                    <p className="text-sm text-muted-foreground">
                      Not satisfied? Return within 30 days for a full refund.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="flex items-center gap-6 p-6 bg-muted/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground">{product.rating}</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {product.customerReviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-6 bg-card rounded-xl border border-border"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{review.author}</span>
                            {review.verified && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating
                                      ? "fill-accent text-accent"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">{review.title}</h4>
                      <p className="text-sm text-muted-foreground">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {product.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Related Products */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{relatedProduct.rating}</span>
                  </div>
                  <p className="text-lg font-bold text-foreground mt-2">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border lg:hidden z-40">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{currentVariant.name}</p>
            <p className="text-xl font-bold">${currentVariant.price.toFixed(2)}</p>
          </div>
          <Button size="lg" className="flex-1" disabled={!currentVariant.inStock}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            {currentVariant.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
