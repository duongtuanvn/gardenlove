import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Clock,
  User,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

import categoryIndoor from "@/assets/category-indoor.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryTrees from "@/assets/category-trees.jpg";

// Mock blog post data
const blogPostData = {
  "complete-guide-indoor-plant-care-beginners": {
    id: 1,
    title: "The Complete Guide to Indoor Plant Care for Beginners",
    slug: "complete-guide-indoor-plant-care-beginners",
    excerpt: "Everything you need to know to keep your houseplants thriving.",
    image: categoryIndoor,
    author: {
      name: "Sarah Green",
      avatar: "S",
      bio: "Plant enthusiast and horticulturist with 10+ years of experience.",
    },
    date: "January 10, 2026",
    readTime: "8 min read",
    category: "Beginner Tips",
    content: `
      <p>Bringing plants into your home is one of the most rewarding decisions you can make. Not only do they purify the air and add natural beauty to your space, but caring for them can also be a meditative and fulfilling hobby.</p>
      
      <h2>Understanding Your Plant's Basic Needs</h2>
      <p>Every plant has four fundamental needs: light, water, nutrients, and the right temperature. Understanding these basics is the first step to becoming a successful plant parent.</p>
      
      <h3>Light Requirements</h3>
      <p>Light is perhaps the most important factor in plant health. Different plants have different light needs:</p>
      <ul>
        <li><strong>Bright indirect light:</strong> Most tropical houseplants thrive here. Think Monstera, Pothos, and Philodendrons.</li>
        <li><strong>Low light:</strong> Snake plants, ZZ plants, and Peace Lilies can tolerate darker corners.</li>
        <li><strong>Direct sunlight:</strong> Succulents and cacti love bright, direct sun.</li>
      </ul>
      
      <h3>Watering Wisdom</h3>
      <p>Overwatering is the number one killer of houseplants. Here's how to get it right:</p>
      <ol>
        <li>Check the soil moisture before watering - stick your finger 1-2 inches into the soil.</li>
        <li>Water thoroughly until it drains from the bottom.</li>
        <li>Never let your plant sit in standing water.</li>
        <li>Reduce watering in winter when growth slows.</li>
      </ol>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Even experienced plant parents make mistakes. Here are the most common ones:</p>
      <ul>
        <li>Overwatering - when in doubt, wait a day or two.</li>
        <li>Placing plants in unsuitable light conditions.</li>
        <li>Ignoring pest problems until they become severe.</li>
        <li>Repotting too frequently or using the wrong pot size.</li>
      </ul>
      
      <h2>Building Your Plant Care Routine</h2>
      <p>Consistency is key. Set aside time each week to check on your plants. Look for signs of stress, check soil moisture, and rotate your plants for even growth. With time, you'll develop an intuition for what your plants need.</p>
      
      <p>Remember, every plant parent loses a plant now and then. Don't be discouraged! Each experience teaches you something new about caring for your green friends.</p>
    `,
    comments: [
      {
        id: 1,
        author: "PlantLover123",
        avatar: "P",
        date: "Jan 11, 2026",
        content: "This is exactly what I needed! I just got my first Monstera and was so confused about watering. Thank you for the clear tips!",
        likes: 12,
      },
      {
        id: 2,
        author: "GreenThumb",
        avatar: "G",
        date: "Jan 11, 2026",
        content: "Great article! I would add that humidity is also super important for tropical plants. Getting a humidifier changed my plant game completely.",
        likes: 8,
      },
      {
        id: 3,
        author: "NewbiePlantMom",
        avatar: "N",
        date: "Jan 12, 2026",
        content: "I've killed 3 plants already 😅 But after reading this, I feel more confident. Going to try again with a pothos!",
        likes: 5,
      },
    ],
  },
};

const relatedPosts = [
  {
    id: 2,
    title: "How to Water Your Plants: Signs of Overwatering vs Underwatering",
    slug: "how-to-water-plants-signs-overwatering-underwatering",
    image: categorySucculents,
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Best Low-Light Plants for Dark Corners",
    slug: "best-low-light-plants-dark-corners",
    image: categoryTrees,
    readTime: "4 min read",
  },
];

export default function PlantCareDetail() {
  const { slug } = useParams();
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  // Get post data (default to first post for demo)
  const post = blogPostData["complete-guide-indoor-plant-care-beginners"];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Comment submitted! (Demo only)");
    setNewComment("");
    setCommentName("");
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
            <Link to="/plant-care" className="text-muted-foreground hover:text-primary transition-colors">
              Plant Care
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="container-custom py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            to="/plant-care"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {post.author.avatar}
                </div>
                <span className="font-medium text-foreground">{post.author.name}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">Share:</span>
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors ml-auto">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg prose-green max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-semibold flex-shrink-0">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Written by</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Comments ({post.comments.length})
            </h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="bg-card border border-border rounded-xl p-5 mb-6">
              <h3 className="font-semibold mb-4">Leave a Comment</h3>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="mb-3"
                  required
                />
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit">Post Comment</Button>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-foreground mb-3">{comment.content}</p>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/plant-care/${relatedPost.slug}`}
                  className="group flex gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-card transition-shadow"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
