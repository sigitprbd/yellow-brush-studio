import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Artist workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80" />
      </div>
      
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="hero-text">
            Creative Art & Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bringing minimalist beauty and playful creativity together. 
            Discover unique art pieces that transform spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-3 text-lg font-medium">
              View Gallery
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Shop Artwork
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative yellow accent */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;