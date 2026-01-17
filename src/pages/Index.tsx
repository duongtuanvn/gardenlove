import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowWeShipSection from "@/components/home/HowWeShipSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <HowWeShipSection />
        <HomeFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
