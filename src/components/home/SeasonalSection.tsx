import { Link } from "react-router-dom";
import { Snowflake, Sun, Leaf, Flower2 } from "lucide-react";

const seasons = [
  {
    name: "Winter Hardy",
    slug: "winter",
    icon: Snowflake,
    description: "Cold-resistant plants for frigid climates",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Spring Blooms",
    slug: "spring",
    icon: Flower2,
    description: "Early bloomers to brighten your garden",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    name: "Summer Stars",
    slug: "summer",
    icon: Sun,
    description: "Heat-loving plants for the sunny months",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Fall Foliage",
    slug: "fall",
    icon: Leaf,
    description: "Stunning autumn colors for your landscape",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export default function SeasonalSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Seasonal Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Shop by Season
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {seasons.map((season) => (
            <Link
              key={season.slug}
              to={`/collections/${season.slug}`}
              className="group bg-background rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${season.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <season.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {season.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {season.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
