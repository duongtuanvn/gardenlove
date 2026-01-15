import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Droplets, Sun, Thermometer, Bug, Scissors, Leaf } from "lucide-react";

const articles = [
  {
    slug: "watering-guide-for-beginners",
    title: "The Complete Watering Guide for Beginners",
    excerpt: "Learn the fundamentals of watering your plants correctly. Discover how to check soil moisture, understand drainage, and avoid common watering mistakes.",
    category: "Plant Care Basics",
    icon: Droplets,
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "understanding-sunlight-requirements",
    title: "Understanding Sunlight Requirements",
    excerpt: "Full sun, partial shade, or low light? Learn what these terms mean and how to match plants to the right spot in your home or garden.",
    category: "Plant Care Basics",
    icon: Sun,
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "usda-hardiness-zones-explained",
    title: "USDA Hardiness Zones Explained",
    excerpt: "Understanding your hardiness zone is crucial for outdoor plant success. Learn how to find your zone and choose plants that will thrive.",
    category: "Outdoor Growing",
    icon: Thermometer,
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "common-plant-pests-and-solutions",
    title: "Common Plant Pests & Natural Solutions",
    excerpt: "Identify common houseplant pests like spider mites, mealybugs, and fungus gnats, and learn organic methods to eliminate them.",
    category: "Troubleshooting",
    icon: Bug,
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&h=400&fit=crop",
  },
  {
    slug: "pruning-basics",
    title: "Pruning Basics: When and How to Trim",
    excerpt: "Proper pruning encourages healthy growth and beautiful form. Learn the right techniques for different plant types.",
    category: "Plant Care Basics",
    icon: Scissors,
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1617173944883-6ff655b26e28?w=600&h=400&fit=crop",
  },
  {
    slug: "repotting-guide",
    title: "When and How to Repot Your Plants",
    excerpt: "Signs your plant needs repotting and step-by-step instructions for a stress-free transition to a new container.",
    category: "Plant Care Basics",
    icon: Leaf,
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
  },
  {
    slug: "winter-plant-care",
    title: "Preparing Your Plants for Winter",
    excerpt: "Essential tips for protecting outdoor plants from frost and adjusting indoor plant care during the colder months.",
    category: "Seasonal Care",
    icon: Thermometer,
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&h=400&fit=crop",
  },
  {
    slug: "pet-safe-plants",
    title: "Pet-Safe Plants for Your Home",
    excerpt: "A comprehensive guide to beautiful houseplants that are non-toxic to cats and dogs, plus plants to avoid.",
    category: "Indoor Plants",
    icon: Leaf,
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&h=400&fit=crop",
  },
];

const categories = [
  { name: "All Guides", count: articles.length },
  { name: "Plant Care Basics", count: articles.filter(a => a.category === "Plant Care Basics").length },
  { name: "Outdoor Growing", count: articles.filter(a => a.category === "Outdoor Growing").length },
  { name: "Indoor Plants", count: articles.filter(a => a.category === "Indoor Plants").length },
  { name: "Seasonal Care", count: articles.filter(a => a.category === "Seasonal Care").length },
  { name: "Troubleshooting", count: articles.filter(a => a.category === "Troubleshooting").length },
];

const LearningCenter = () => {
  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Learning Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Plant Care Guides & Tips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Expert advice to help your plants thrive. From beginner basics to advanced techniques, 
              we've got you covered.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search guides..." 
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary first:bg-primary first:text-primary-foreground"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Featured Guides
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} to={`/guides/${article.slug}`}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            All Guides
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularArticles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Link key={article.slug} to={`/guides/${article.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Get Plant Care Tips in Your Inbox
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for seasonal care reminders, expert tips, and exclusive growing guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
            />
            <button className="px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningCenter;
