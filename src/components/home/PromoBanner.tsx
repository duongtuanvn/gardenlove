import { Gift, Leaf, Sparkles } from "lucide-react";

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
    <section className="py-6 bg-gradient-to-r from-primary/5 via-background to-secondary/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
}
