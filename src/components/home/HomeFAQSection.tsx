import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you ship to my state?",
    answer: "We ship to all 48 contiguous U.S. states. Unfortunately, we cannot ship to Alaska, Hawaii, or Puerto Rico due to agricultural restrictions and extended transit times.",
  },
  {
    question: "When will my order ship?",
    answer: "Orders placed by 10 AM PST ship the same day (Mon-Wed). Orders placed after 10 AM or Thu-Sun ship the following Monday to avoid weekend warehouse delays.",
  },
  {
    question: "What if my plant arrives damaged?",
    answer: "We've got you covered! Our Live Arrival Guarantee means we'll replace any damaged plant for free or issue a full refund. Just send us photos within 48 hours of delivery.",
  },
  {
    question: "How big are the plants you ship?",
    answer: "Plant sizes vary by species and are clearly listed on each product page. We typically ship 4-inch starter plants to 3-gallon established specimens, with photos and measurements for reference.",
  },
  {
    question: "Can I choose a delivery date?",
    answer: "While we can't guarantee specific delivery dates, you can add delivery notes at checkout. We ship Mon-Wed and use expedited shipping to minimize transit time.",
  },
  {
    question: "How do I track my order?",
    answer: "You'll receive an email with tracking information as soon as your order ships. You can also log into your account anytime to view order status and tracking details.",
  },
];

export default function HomeFAQSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-border rounded-xl px-4 data-[state=open]:bg-muted/30 transition-colors"
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

          <div className="text-center mt-8">
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              <HelpCircle className="w-4 h-4" />
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
