import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
  RefreshCw,
  Sun,
  Minus,
  Plus,
  Check,
  Leaf,
  MapPin,
  Shovel,
  Calendar,
  Zap,
} from "lucide-react";

import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";

// Mock product data
const productData: Record<string, {
  id: number;
  name: string;
  slug: string;
  price: number;
  comparePrice: number | null;
  images: string[];
  badges: string[];
  rating: number;
  reviewCount: number;
  category: string;
  inStock: boolean;
  variants: { id: number; name: string; price: number; comparePrice?: number | null; inStock: boolean }[];
  description: string;
  careGuide: { usdaZone: string; sunlight: string; soilType: string; planting: string };
  features: string[];
  customerReviews: { id: number; author: string; rating: number; date: string; title: string; content: string; verified: boolean }[];
  faq: { question: string; answer: string }[];
}> = {
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
      usdaZone: "10-12",
      sunlight: "Bright indirect light",
      soilType: "Well-draining potting mix",
      planting: "Spring or early summer",
    },
    features: [
      "Air-purifying qualities",
      "Low maintenance requirements",
      "Dramatic tropical aesthetic",
      "Pet-friendly (non-toxic)",
    ],
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
  "echeveria-collection": {
    id: 2,
    name: "Echeveria Collection",
    slug: "echeveria-collection",
    price: 24.99,
    comparePrice: 34.99,
    images: [categorySucculents, categoryIndoor, categoryHerbs, categoryTrees],
    badges: ["Easy Care"],
    rating: 4.8,
    reviewCount: 156,
    category: "Succulents",
    inStock: true,
    variants: [
      { id: 1, name: "3-Pack", price: 24.99, comparePrice: 34.99, inStock: true },
      { id: 2, name: "6-Pack", price: 44.99, comparePrice: 59.99, inStock: true },
      { id: 3, name: "12-Pack", price: 79.99, comparePrice: 99.99, inStock: true },
    ],
    description:
      "Our Echeveria Collection features a beautiful assortment of rosette-forming succulents in various colors and sizes. These drought-tolerant plants are perfect for beginners and make stunning additions to any sunny windowsill or outdoor garden.",
    careGuide: {
      usdaZone: "9-11",
      sunlight: "Full sun to bright light",
      soilType: "Well-draining cactus mix",
      planting: "Spring or summer",
    },
    features: [
      "Drought tolerant",
      "Low maintenance",
      "Vibrant colors",
      "Great for beginners",
    ],
    customerReviews: [
      {
        id: 1,
        author: "Emily K.",
        rating: 5,
        date: "2024-01-12",
        title: "Beautiful variety!",
        content:
          "Received 3 gorgeous echeverias, each one different and healthy. Very happy with my purchase!",
        verified: true,
      },
      {
        id: 2,
        author: "David P.",
        rating: 5,
        date: "2024-01-08",
        title: "Perfect condition",
        content:
          "Plants arrived well-packaged and in perfect condition. Colors are even more vibrant in person.",
        verified: true,
      },
    ],
    faq: [
      {
        question: "How often should I water succulents?",
        answer:
          "Water only when the soil is completely dry, typically every 1-2 weeks in summer and less frequently in winter. Overwatering is the most common cause of succulent death.",
      },
      {
        question: "Can these be planted outdoors?",
        answer:
          "Yes, in USDA zones 9-11 they can be planted outdoors year-round. In colder climates, grow them in containers that can be brought indoors during winter.",
      },
    ],
  },
  "bougainvillea-live-flowering-vines": {
    id: 3,
    name: "2 Bougainvillea Plants Live Flowering Vines Drought Tolerant Tropical Climbers Full Sun Garden Trellis Patio Container Fast Growing Outdoor Plant",
    slug: "bougainvillea-live-flowering-vines",
    price: 33.99,
    comparePrice: 44.99,
    images: [categoryTrees, categoryHerbs, categoryIndoor, categorySucculents, categoryTrees, categoryHerbs],
    badges: ["zone 9", "Fast Growing", "Drought Tolerant"],
    rating: 5.0,
    reviewCount: 0,
    category: "Outdoor Plants",
    inStock: true,
    variants: [
      { id: 1, name: "Barbara Karst Bougainvillea / 4 To 6 Inches Height Rooted", price: 33.99, inStock: true },
      { id: 2, name: "Helen Bougainvillea / 4 To 6 Inches Height Rooted", price: 33.99, inStock: true },
      { id: 3, name: "California Gold Bougainvillea / 4 To 6 Inches Height Rooted", price: 35.99, inStock: true },
      { id: 4, name: "Sundown Orange Bougainvillea / 4 To 6 Inches Height Rooted", price: 35.99, inStock: true },
      { id: 5, name: "Blueberry Ice Bougainvillea / 4 To 6 Inches Height Rooted", price: 37.99, inStock: true },
      { id: 6, name: "New River Bougainvillea / 4 To 6 Inches Height Rooted", price: 33.99, inStock: false },
      { id: 7, name: "San Diego Red Bougainvillea / 4 To 6 Inches Height Rooted", price: 34.99, inStock: true },
      { id: 8, name: "Purple Queen Bougainvillea / 4 To 6 Inches Height Rooted", price: 36.99, inStock: true },
    ],
    description:
      "Transform your garden into a tropical paradise with our stunning Bougainvillea collection! These drought-tolerant flowering vines are renowned for their spectacular cascades of vibrant, papery bracts that bloom profusely throughout the warm season. Perfect for trellises, arbors, fences, or containers, Bougainvillea brings explosive color to any sunny space. Originally from South America, these fast-growing climbers thrive in full sun and are remarkably low-maintenance once established. Each plant arrives healthy, rooted, and ready to bring years of breathtaking beauty to your outdoor living spaces.",
    careGuide: {
      usdaZone: "9-11",
      sunlight: "Full sun (6+ hours direct sunlight)",
      soilType: "Well-draining, slightly acidic soil",
      planting: "Spring after last frost",
    },
    features: [
      "Drought tolerant once established",
      "Fast-growing climber (up to 30ft)",
      "Blooms multiple times per year",
      "Attracts butterflies and hummingbirds",
      "Deer and rabbit resistant",
      "Heat and salt tolerant",
    ],
    customerReviews: [],
    faq: [
      {
        question: "How do I get my Bougainvillea to bloom more?",
        answer:
          "Bougainvillea blooms best when slightly stressed. Allow soil to dry between waterings, provide full sun (6+ hours), and use a low-nitrogen, high-phosphorus fertilizer. Slight root-binding in containers can also encourage blooming.",
      },
      {
        question: "Can Bougainvillea survive frost?",
        answer:
          "Bougainvillea is frost-sensitive. In zones 9-11, they're typically hardy outdoors. In colder zones, grow in containers and bring indoors when temperatures drop below 40°F. Light frosts may cause leaf drop but established plants often recover.",
      },
      {
        question: "How fast does Bougainvillea grow?",
        answer:
          "In optimal conditions (full sun, warm temperatures, well-draining soil), Bougainvillea can grow 3-5 feet per year. Some varieties can reach 30+ feet when given proper support for climbing.",
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

// Helper function to get estimated delivery date
const getEstimatedDelivery = () => {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 10);
  return deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product data based on slug, fallback to monstera for demo
  const product = (slug && productData[slug]) ? productData[slug] : productData["monstera-deliciosa"];

  const currentVariant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        variant: currentVariant.name,
        price: currentVariant.price,
        image: product.images[0],
      },
      quantity
    );
    toast.success(`${product.name} added to cart`, {
      description: `${quantity} × ${currentVariant.name}`,
      action: {
        label: "View Cart",
        onClick: () => navigate("/cart"),
      },
    });
  };

  const handleBuyNow = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        variant: currentVariant.name,
        price: currentVariant.price,
        image: product.images[0],
      },
      quantity
    );
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 border-b border-border">
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

      {/* SECTION 1: Product Overview */}
      <section className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative w-full rounded-2xl overflow-hidden bg-muted">
              <div className="aspect-[4/3] sm:aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sale Badge - Only show discount percentage */}
              {product.comparePrice && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-accent text-accent-foreground shadow-sm">
                    -{Math.round((1 - product.price / product.comparePrice) * 100)}%
                  </span>
                </div>
              )}
              <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>
            </div>

            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
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
          <div className="space-y-6 min-w-0 overflow-hidden">
            <div>
              <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 leading-tight line-clamp-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
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

            {/* Price with Sale styling */}
            {(() => {
              const variantComparePrice = currentVariant.comparePrice ?? product.comparePrice;
              const hasSale = variantComparePrice && variantComparePrice > currentVariant.price;
              const discountPercent = hasSale ? Math.round((1 - currentVariant.price / variantComparePrice) * 100) : 0;
              
              return (
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-3xl font-bold ${hasSale ? "text-accent" : "text-foreground"}`}>
                    ${currentVariant.price.toFixed(2)}
                  </span>
                  {hasSale && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ${variantComparePrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        Save {discountPercent}%
                      </span>
                    </>
                  )}
                </div>
              );
            })()}

            {/* Variants */}
            <div className="min-w-0">
              <label className="text-sm font-medium text-foreground mb-3 block">Select Option</label>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    disabled={!variant.inStock}
                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    className={`w-full px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                      selectedVariant === index
                        ? "border-primary bg-primary/5 text-primary"
                        : variant.inStock
                        ? "border-border hover:border-primary/50 text-foreground"
                        : "border-border bg-muted text-muted-foreground cursor-not-allowed line-through"
                    }`}
                  >
                    {variant.name}
                    {variant.price !== product.price && (
                      <span className="block text-xs mt-0.5 text-muted-foreground">
                        ${variant.price.toFixed(2)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 sm:w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  size="lg"
                  className="w-full h-14 text-base font-semibold"
                  disabled={!currentVariant.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {currentVariant.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  size="lg"
                  className="w-full h-14 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={!currentVariant.inStock}
                  onClick={handleBuyNow}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Plant Care Info */}
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Plant Care</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">USDA Zone</p>
                    <p className="text-sm font-medium">{product.careGuide.usdaZone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Sunlight</p>
                    <p className="text-sm font-medium">{product.careGuide.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shovel className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Soil Type</p>
                    <p className="text-sm font-medium">{product.careGuide.soilType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Planting</p>
                    <p className="text-sm font-medium">{product.careGuide.planting}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Shipping & Returns</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Order today, get it by <span className="font-medium text-foreground">{getEstimatedDelivery()}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Returns & Refunds</p>
                    <p className="text-sm text-muted-foreground">
                      30-day return policy. Full refund if plant arrives damaged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Description */}
      <section className="bg-muted/30 py-10 md:py-14">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">About This Plant</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Transform your garden into a lush tropical paradise with this set of 2 Bougainvillea Plants. Famous for their intense, paper-like bracts that appear in brilliant shades of magenta, red, orange, and purple, these flowering vines are the ultimate choice for adding vertical color to your landscape. Whether you are looking to cover a bare wall, decorate an arbor, or simply brighten up a sunny patio with container plants, these vigorous growers deliver spectacular results. They are highly resilient, thriving in heat and requiring little water once established, making them a favorite among water-wise gardeners.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Key Features:</h3>
            <ul className="space-y-3 text-foreground list-none pl-0">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Vibrant Blooms:</strong> Produces profuse, colorful bracts throughout spring, summer, and fall for long-lasting color.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Impressive Height:</strong> Can climb 20 to 30 feet tall when provided with structural support like a trellis or fence.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Drought Tolerance:</strong> Requires minimal watering once the root system is established, perfect for xeriscaping.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Versatile Growth:</strong> Excellent for ground cover, climbing structures, or hanging baskets and containers.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Climate Suitability:</strong> Thrives outdoors in USDA Zones 9-11; ideal as an indoor-outdoor plant in cooler zones.</span>
              </li>
            </ul>

            <p className="text-foreground leading-relaxed text-lg mt-8 mb-8">
              Adding these Bougainvillea plants to your collection brings more than just visual appeal; it brings a hardy, low-maintenance solution to garden design. Their thorny branches can act as an effective natural security barrier when planted along fences, while their nectar-rich blooms serve as a magnet for butterflies and hummingbirds, enhancing the biodiversity of your yard. With their ability to tolerate poor soil and intense heat, these vines are forgiving and rewarding, offering a high return of beauty for very little maintenance effort.
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-6">Frequently Asked Questions:</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Q: How much sun do Bougainvillea plants need?</p>
                <p className="text-muted-foreground">A: These plants are sun-lovers and require at least 6 hours of full, direct sunlight daily to produce the maximum amount of blooms.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Q: Are these vines hard to maintain?</p>
                <p className="text-muted-foreground">A: No, they are relatively low maintenance. They are drought-tolerant once established and mainly require pruning to keep them in your desired shape.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Q: Can I grow Bougainvillea in a pot?</p>
                <p className="text-muted-foreground">A: Absolutely. They thrive in containers where their root growth is slightly restricted, which often encourages heavier blooming. Just ensure the pot has drainage holes.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Q: What USDA zones are best for these plants?</p>
                <p className="text-muted-foreground">A: They grow best outdoors in USDA Zones 9 through 11. In colder climates (Zones 4-8), they should be grown in containers and brought inside before the first frost.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Q: When do Bougainvillea vines bloom?</p>
                <p className="text-muted-foreground">A: In warm climates, they can bloom intermittently year-round, with the heaviest flush of flowers occurring in the spring, summer, and autumn months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Customer Reviews - Judge.me Style */}
      <section className="py-10 md:py-14 bg-background" id="reviews">
        <div className="container-custom">
          {/* Review Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">Customer Reviews</h2>
            </div>
            <Button className="w-fit bg-primary hover:bg-primary/90">
              Write a Review
            </Button>
          </div>

          {/* Rating Summary - Judge.me Style */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 mb-10 pb-8 border-b border-border bg-card rounded-2xl p-6">
            {/* Left: Overall Rating */}
            <div className="text-center md:text-left md:border-r md:border-border md:pr-8">
              <div className="text-6xl font-bold text-primary mb-2">{product.rating}</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on <span className="font-semibold text-foreground">{product.reviewCount}</span> reviews
              </p>
            </div>

            {/* Right: Rating Distribution Bars */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                // Mock distribution data
                const distributions: Record<number, number> = { 5: 75, 4: 15, 3: 7, 2: 2, 1: 1 };
                const percentage = distributions[stars];
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors min-w-[50px]">
                      {stars} <Star className="w-4 h-4 fill-primary text-primary" />
                    </button>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground min-w-[45px] text-right">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-5">
            {product.customerReviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-shadow"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-semibold text-primary-foreground text-lg">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{review.author}</span>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3" />
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{review.content}</p>

                {/* Review Actions - Judge.me Style */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Was this review helpful?</span>
                  <button className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-primary/10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Yes (0)
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-primary/10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                    </svg>
                    No (0)
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Pagination */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More Reviews
            </Button>
          </div>

          {/* Powered by Judge.me */}
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Reviews powered by <span className="font-semibold text-primary">Judge.me</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="bg-muted/30 py-10 md:py-14">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {product.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 5: Related Products */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-card transition-all duration-300"
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
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background border-t border-border lg:hidden z-40 safe-area-pb">
        <div className="grid grid-cols-2 gap-2">
          <Button 
            size="lg" 
            className="h-12 text-sm font-semibold" 
            disabled={!currentVariant.inStock} 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-1.5" />
            Add to Cart
          </Button>
          <Button 
            size="lg" 
            className="h-12 text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground" 
            disabled={!currentVariant.inStock} 
            onClick={handleBuyNow}
          >
            <Zap className="w-4 h-4 mr-1.5" />
            Buy Now
          </Button>
        </div>
      </div>
      
      {/* Spacer for sticky bottom bar on mobile */}
      <div className="h-20 lg:hidden" />

      <Footer />
    </div>
  );
}
