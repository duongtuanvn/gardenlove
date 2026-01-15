import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronRight, Clock, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";
import categoryShrubs from "@/assets/category-shrubs.jpg";
import categoryPerennials from "@/assets/category-perennials.jpg";

const categories = [
  { name: "All", slug: "all" },
  { name: "Beginner Tips", slug: "beginner-tips" },
  { name: "Watering", slug: "watering" },
  { name: "Light & Temperature", slug: "light-temperature" },
  { name: "Pest Control", slug: "pest-control" },
  { name: "Propagation", slug: "propagation" },
];

const featuredPost = {
  id: 1,
  title: "The Complete Guide to Indoor Plant Care for Beginners",
  slug: "complete-guide-indoor-plant-care-beginners",
  excerpt: "Everything you need to know to keep your houseplants thriving. From watering schedules to light requirements, this comprehensive guide covers all the basics.",
  image: categoryIndoor,
  author: "Sarah Green",
  date: "Jan 10, 2026",
  readTime: "8 min read",
  category: "Beginner Tips",
};

const blogPosts = [
  {
    id: 2,
    title: "How to Water Your Plants: Signs of Overwatering vs Underwatering",
    slug: "how-to-water-plants-signs-overwatering-underwatering",
    excerpt: "Learn to read your plants and understand exactly when they need water. Avoid the most common mistake new plant parents make.",
    image: categorySucculents,
    author: "Michael Torres",
    date: "Jan 8, 2026",
    readTime: "5 min read",
    category: "Watering",
  },
  {
    id: 3,
    title: "Best Low-Light Plants for Dark Corners",
    slug: "best-low-light-plants-dark-corners",
    excerpt: "Not every room has bright windows. Discover the best plants that thrive in low-light conditions.",
    image: categoryTrees,
    author: "Emily Chen",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    category: "Light & Temperature",
  },
  {
    id: 4,
    title: "Natural Pest Control: Keep Bugs Away Without Chemicals",
    slug: "natural-pest-control-keep-bugs-away",
    excerpt: "Safe and effective ways to protect your plants from common pests using natural remedies.",
    image: categoryHerbs,
    author: "Sarah Green",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    category: "Pest Control",
  },
  {
    id: 5,
    title: "Propagating Succulents: A Step-by-Step Guide",
    slug: "propagating-succulents-step-by-step-guide",
    excerpt: "Turn one succulent into many with these easy propagation techniques. Perfect for beginners.",
    image: categoryShrubs,
    author: "Michael Torres",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    category: "Propagation",
  },
  {
    id: 6,
    title: "Winter Plant Care: Preparing Your Plants for Cold Months",
    slug: "winter-plant-care-preparing-cold-months",
    excerpt: "Adjust your care routine to help your plants survive and thrive during winter.",
    image: categoryPerennials,
    author: "Emily Chen",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    category: "Light & Temperature",
  },
];

export default function PlantCare() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 border-b border-border">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Plant Care Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Plant Care Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert tips, guides, and inspiration to help you become a better plant parent.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 h-12 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat.slug === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-custom py-10 md:py-14">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6">
          Featured Article
        </h2>
        <Link
          to={`/plant-care/${featuredPost.slug}`}
          className="group grid md:grid-cols-2 gap-6 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-shadow"
        >
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
              {featuredPost.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {featuredPost.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featuredPost.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-primary font-medium">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Blog Posts Grid */}
      <section className="container-custom pb-14">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/plant-care/${post.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Get Plant Care Tips in Your Inbox
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter for weekly tips, guides, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1"
            />
            <Button size="lg" className="h-12">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
