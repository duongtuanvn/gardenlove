import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Info } from "lucide-react";

export default function ZoneGuideSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-primary p-8 md:p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Plant Zone Finder
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Not Sure What Grows in Your Area?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Use our USDA Hardiness Zone Guide to find plants that will thrive in your climate. Simply enter your zip code to discover your zone and get personalized plant recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/zone-guide">
                  <Button variant="hero" size="lg">
                    Find My Zone
                  </Button>
                </Link>
                <Link to="/plant-care">
                  <Button variant="heroOutline" size="lg">
                    <Info className="w-4 h-4" />
                    Care Guides
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                  Quick Zone Tips
                </h3>
                <ul className="space-y-3">
                  <ZoneTip 
                    zone="Zones 3-4" 
                    description="Northern regions with extreme cold winters" 
                  />
                  <ZoneTip 
                    zone="Zones 5-6" 
                    description="Midwest and Northern states with moderate winters" 
                  />
                  <ZoneTip 
                    zone="Zones 7-8" 
                    description="Southern regions with mild winters" 
                  />
                  <ZoneTip 
                    zone="Zones 9-11" 
                    description="Subtropical and tropical areas" 
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ZoneTip({ zone, description }: { zone: string; description: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded flex-shrink-0">
        {zone}
      </span>
      <span className="text-sm text-primary-foreground/80">{description}</span>
    </li>
  );
}
