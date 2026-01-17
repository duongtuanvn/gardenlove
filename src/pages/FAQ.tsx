import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Truck, Leaf, CreditCard, RotateCcw, ThermometerSun } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      icon: Truck,
      title: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Shipping times vary by location. West Coast orders typically arrive in 2-3 business days, while East Coast orders may take 5-7 business days. You'll receive tracking information once your order ships."
        },
        {
          question: "Do you ship to all 50 states?",
          answer: "We currently ship to the contiguous 48 states. Unfortunately, we cannot ship to Alaska, Hawaii, or Puerto Rico due to agricultural restrictions and extended transit times that could harm the plants."
        },
        {
          question: "What days do you ship?",
          answer: "We ship Monday through Wednesday to ensure your plants don't spend the weekend in a warehouse. This helps us maintain the highest quality during transit."
        },
        {
          question: "Is shipping free?",
          answer: "Yes! We offer free standard shipping on all orders over $150. Orders under $75 ship for $9.99, and orders between $75-$150 ship for $12.99."
        },
        {
          question: "How are plants packaged for shipping?",
          answer: "Each plant is carefully wrapped and secured in custom boxes designed to minimize movement. We use biodegradable materials, moisture-retaining wraps for roots, and include heat or cool packs when weather conditions require it."
        }
      ]
    },
    {
      icon: Leaf,
      title: "Plant Care",
      questions: [
        {
          question: "My plant looks stressed after arrival. Is this normal?",
          answer: "Yes, some transplant shock is normal! Plants may look droopy or have a few yellow leaves after their journey. Place your plant in appropriate light conditions, water it, and give it 1-2 weeks to acclimate. Most plants bounce back quickly."
        },
        {
          question: "How do I know what USDA Hardiness Zone I'm in?",
          answer: "You can find your USDA Hardiness Zone by entering your zip code on the USDA Plant Hardiness Zone Map (planthardiness.ars.usda.gov). We also display zone compatibility on each product page to help you choose plants that will thrive in your area."
        },
        {
          question: "Are your plants pet-safe?",
          answer: "Some of our plants are pet-safe, and we clearly label these on the product pages with a 'Pet Safe' badge. However, we recommend checking each product before purchasing if you have pets, as many common houseplants can be toxic to animals."
        },
        {
          question: "Do your plants come with care instructions?",
          answer: "Absolutely! Every plant ships with detailed care instructions specific to that variety. You'll also find comprehensive care guides on each product page, including light requirements, watering frequency, and seasonal tips."
        },
        {
          question: "What size are the plants you ship?",
          answer: "Plant sizes vary by species and are listed on each product page. We typically ship in pot sizes ranging from 4-inch starter plants to 3-gallon established specimens. Photos and measurements are provided for reference."
        }
      ]
    },
    {
      icon: RotateCcw,
      title: "Returns & Guarantees",
      questions: [
        {
          question: "What is your Live Arrival Guarantee?",
          answer: "We guarantee that every plant will arrive alive and in good health. If your plant arrives damaged or dead, contact us within 48 hours with photos, and we'll send a free replacement or issue a full refund—your choice."
        },
        {
          question: "What's your return policy?",
          answer: "Due to the perishable nature of live plants, we cannot accept returns of healthy plants. However, our 30-Day Satisfaction Guarantee covers any plant that fails to thrive despite proper care. Contact us with photos, and we'll work with you on a solution."
        },
        {
          question: "How do I file a claim for a damaged plant?",
          answer: "Email us at support@greenhaven-nursery.com within 48 hours of delivery with your order number and photos showing the damage. Please photograph the plant, the packaging, and any visible issues. We respond within 24 hours."
        },
        {
          question: "Can I cancel or modify my order?",
          answer: "You can cancel or modify your order within 2 hours of placing it by contacting us immediately. Once an order enters processing, we cannot make changes, as plants are selected and prepared for shipping."
        }
      ]
    },
    {
      icon: ThermometerSun,
      title: "Weather & Seasonal",
      questions: [
        {
          question: "What is a weather hold?",
          answer: "A weather hold means we've temporarily delayed your shipment due to extreme temperatures along the shipping route (below 35°F or above 95°F). This protects your plants from freeze damage or heat stress. We'll notify you by email and ship as soon as conditions improve."
        },
        {
          question: "Do you ship in winter?",
          answer: "Yes, we ship year-round! During cold months, we include heat packs in shipments to cold regions and may implement weather holds during extreme cold snaps. We monitor conditions closely to ensure your plants arrive safely."
        },
        {
          question: "When is the best time to order outdoor plants?",
          answer: "The best time depends on your climate and the plants you're ordering. Generally, spring (March-May) and fall (September-October) are ideal for planting. Our product pages include planting season recommendations for each variety."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Orders & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are securely processed and encrypted."
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes! Our digital gift cards are available in denominations from $25 to $500 and never expire. They're delivered instantly via email and can be redeemed on any order."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive an email with tracking information. You can also log into your account to view order status and tracking details at any time."
        },
        {
          question: "Do you offer wholesale or bulk pricing?",
          answer: "Yes, we offer wholesale pricing for landscapers, garden centers, and businesses ordering in bulk. Contact our wholesale team at wholesale@greenhaven-nursery.com for more information."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-forest/10 to-sage/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 text-forest mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-forest mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about ordering, shipping, plant care, and more. 
                Can't find what you're looking for? Contact our friendly support team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card rounded-xl p-6 md:p-8 shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-forest" />
                    </div>
                    <h2 className="text-xl font-display font-bold text-forest">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/30"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="text-foreground font-medium pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-primary">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our plant experts are here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@greenhaven-nursery.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Contact Page
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
