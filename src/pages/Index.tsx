import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ZoneGuideSection from "@/components/home/ZoneGuideSection";
import SeasonalSection from "@/components/home/SeasonalSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <SeasonalSection />
        <TestimonialsSection />
        <ZoneGuideSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
