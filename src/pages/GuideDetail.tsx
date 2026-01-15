import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark,
  ChevronRight,
  Droplets,
  Sun,
  Thermometer,
  CheckCircle2
} from "lucide-react";

// Mock article data - in production this would come from CMS/database
const articleData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  content: React.ReactNode;
  relatedProducts: { name: string; slug: string; image: string; price: string }[];
}> = {
  "watering-guide-for-beginners": {
    title: "The Complete Watering Guide for Beginners",
    category: "Plant Care Basics",
    readTime: "8 min read",
    publishDate: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Proper watering is the foundation of healthy plant care. Whether you're a first-time plant parent 
          or looking to improve your skills, this guide will help you understand when, how, and how much 
          to water your plants.
        </p>

        <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">
          Understanding Your Plant's Water Needs
        </h2>
        <p className="text-muted-foreground mb-4">
          Different plants have vastly different water requirements. Succulents and cacti prefer to dry out 
          completely between waterings, while tropical plants like ferns prefer consistently moist soil. 
          Understanding your specific plant's needs is the first step to watering success.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-primary" />
            The Finger Test
          </h3>
          <p className="text-muted-foreground">
            Insert your finger 1-2 inches into the soil. If it feels dry at that depth, it's time to water. 
            If it still feels moist, wait a few more days. This simple test works for most houseplants.
          </p>
        </div>

        <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">
          Signs of Overwatering vs. Underwatering
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <Card className="border-destructive/30">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-3">🚫 Overwatering Signs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  Yellowing leaves, especially lower ones
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  Soft, mushy stems near the soil
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  Mold or fungus on soil surface
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  Root rot (brown, mushy roots)
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-accent/30">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-3">⚠️ Underwatering Signs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  Dry, crispy leaf edges
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  Wilting or drooping leaves
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  Soil pulling away from pot edges
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  Slow or stunted growth
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">
          Best Practices for Watering
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h4 className="font-semibold text-foreground">Water thoroughly</h4>
              <p className="text-muted-foreground text-sm">Water until it drains from the bottom holes. This ensures the entire root system gets moisture.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h4 className="font-semibold text-foreground">Use room temperature water</h4>
              <p className="text-muted-foreground text-sm">Cold water can shock roots. Let tap water sit for 24 hours to reach room temperature and allow chlorine to dissipate.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h4 className="font-semibold text-foreground">Empty saucers</h4>
              <p className="text-muted-foreground text-sm">Don't let plants sit in standing water. Empty saucers 30 minutes after watering to prevent root rot.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <h4 className="font-semibold text-foreground">Adjust for seasons</h4>
              <p className="text-muted-foreground text-sm">Plants need less water in winter when growth slows. Increase frequency in summer during active growth.</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">Pro Tip: Consider Your Pot Material</h3>
          <p className="text-muted-foreground text-sm">
            Terracotta pots are porous and dry out faster than plastic or glazed ceramic. Adjust your watering 
            schedule based on your pot material. Plants in terracotta may need watering twice as often as those 
            in plastic containers.
          </p>
        </div>
      </>
    ),
    relatedProducts: [
      { name: "Peace Lily", slug: "peace-lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=200&h=200&fit=crop", price: "$24.99" },
      { name: "Snake Plant", slug: "snake-plant", image: "https://images.unsplash.com/photo-1593691058482-a00e9aaa1f73?w=200&h=200&fit=crop", price: "$19.99" },
      { name: "Pothos", slug: "pothos", image: "https://images.unsplash.com/photo-1597055181300-e3633a917e90?w=200&h=200&fit=crop", price: "$14.99" },
    ],
  },
};

// Default article for routes not found
const defaultArticle = {
  title: "Plant Care Guide",
  category: "Plant Care Basics",
  readTime: "5 min read",
  publishDate: "January 2026",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
  content: (
    <p className="text-lg text-muted-foreground">
      This guide is coming soon! Check back later for detailed plant care information.
    </p>
  ),
  relatedProducts: [],
};

const relatedGuides = [
  { slug: "understanding-sunlight-requirements", title: "Understanding Sunlight Requirements", category: "Plant Care Basics" },
  { slug: "repotting-guide", title: "When and How to Repot Your Plants", category: "Plant Care Basics" },
  { slug: "common-plant-pests-and-solutions", title: "Common Plant Pests & Natural Solutions", category: "Troubleshooting" },
];

const GuideDetail = () => {
  const { slug } = useParams();
  const article = slug && articleData[slug] ? articleData[slug] : defaultArticle;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">
              Learning Center
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/guides" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Learning Center
            </Link>

            <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Bookmark className="w-4 h-4 mr-1" />
                  Save
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-10">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            {article.content}
          </div>

          {/* Related Products */}
          {article.relatedProducts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Perfect Plants for Beginners
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {article.relatedProducts.map((product) => (
                  <Link key={product.slug} to={`/products/${product.slug}`}>
                    <Card className="group hover:shadow-md transition-all">
                      <CardContent className="p-4 text-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full aspect-square object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform"
                        />
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-primary font-semibold">{product.price}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Guides */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Continue Learning
            </h3>
            <div className="space-y-4">
              {relatedGuides.map((guide) => (
                <Link 
                  key={guide.slug} 
                  to={`/guides/${guide.slug}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">{guide.category}</Badge>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {guide.title}
                    </h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideDetail;
