import { ArrowRight, Gift, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const promos = [
  {
    icon: Gift,
    title: "Free Shipping",
    subtitle: "On orders over $75",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Sparkles,
    title: "20% Off",
    subtitle: "First-time customers",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: Leaf,
    title: "Free Plant Food",
    subtitle: "With 3+ plants purchase",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
  },
];

export default function PromoBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 via-background to-secondary/10">
      <div className="container-custom">
        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {promos.map((promo, index) => (
            <div
              key={promo.title}
              className={`${promo.bgColor} rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${promo.color} flex items-center justify-center shrink-0 shadow-lg`}>
                <promo.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{promo.title}</h3>
                <p className="text-sm text-muted-foreground">{promo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 md:p-10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
                New to Plant Parenting?
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-xl">
                Discover detailed care guides and find the perfect plants for your space.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/plant-care">
                  Care Guides
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground font-semibold"
              >
                <Link to="/collections">
                  Browse Collection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
