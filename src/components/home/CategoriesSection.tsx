import { Link } from "react-router-dom";
import categoryIndoor from "@/assets/category-indoor.jpg";
import categoryTrees from "@/assets/category-trees.jpg";
import categoryPerennials from "@/assets/category-perennials.jpg";
import categorySucculents from "@/assets/category-succulents.jpg";
import categoryShrubs from "@/assets/category-shrubs.jpg";
import categoryHerbs from "@/assets/category-herbs.jpg";

const categories = [
  {
    name: "Indoor Plants",
    slug: "indoor",
    image: categoryIndoor,
    count: "120+ varieties",
  },
  {
    name: "Trees",
    slug: "trees",
    image: categoryTrees,
    count: "80+ varieties",
  },
  {
    name: "Perennials",
    slug: "perennials",
    image: categoryPerennials,
    count: "150+ varieties",
  },
  {
    name: "Succulents",
    slug: "succulents",
    image: categorySucculents,
    count: "60+ varieties",
  },
  {
    name: "Shrubs",
    slug: "shrubs",
    image: categoryShrubs,
    count: "90+ varieties",
  },
  {
    name: "Herbs & Edibles",
    slug: "herbs",
    image: categoryHerbs,
    count: "40+ varieties",
  },
];

export default function CategoriesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect plants for your space
            </p>
          </div>
          <Link 
            to="/collections" 
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/collections/${category.slug}`}
              className="category-card group"
            >
              <img
                src={category.image}
                alt={`${category.name} collection`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {category.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
