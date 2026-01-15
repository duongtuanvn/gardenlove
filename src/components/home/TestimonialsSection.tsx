import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Portland, OR",
    rating: 5,
    text: "I was nervous about ordering plants online, but Green Haven exceeded my expectations! My Monstera arrived perfectly packaged and has been thriving for 6 months now. Their care guide was incredibly helpful too.",
    date: "December 2024",
    product: "Monstera Deliciosa",
  },
  {
    id: 2,
    name: "James K.",
    location: "Austin, TX",
    rating: 5,
    text: "Best plant nursery I've ordered from. The weather hold feature saved my order during a cold snap. Customer service was amazing and followed up to make sure everything arrived healthy.",
    date: "November 2024",
    product: "Japanese Maple",
  },
  {
    id: 3,
    name: "Emily R.",
    location: "Seattle, WA",
    rating: 5,
    text: "I've ordered from Green Haven multiple times and every plant arrives in perfect condition. The quality is noticeably better than big box stores. Highly recommend for anyone serious about plants!",
    date: "January 2025",
    product: "Fiddle Leaf Fig",
  },
  {
    id: 4,
    name: "Michael T.",
    location: "Denver, CO",
    rating: 5,
    text: "The succulent collection I ordered was absolutely gorgeous. Each plant was carefully labeled with care instructions. Love supporting a family-owned nursery that clearly cares about their craft.",
    date: "October 2024",
    product: "Succulent Collection",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Customer Love
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Trusted by 50,000+ Happy Plant Parents
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-primary-foreground/80">
            4.9 out of 5 based on 12,000+ reviews
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card bg-primary-foreground/5 border border-primary-foreground/10">
      <Quote className="w-8 h-8 text-accent mb-4" />
      
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      
      <div className="border-t border-primary-foreground/10 pt-4 mt-auto">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
        <p className="text-xs text-accent mt-1">Purchased: {testimonial.product}</p>
      </div>
    </div>
  );
}
