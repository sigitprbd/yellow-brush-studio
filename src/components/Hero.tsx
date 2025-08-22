import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('featured-collections');
    shopSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Artist workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto text-white">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block text-primary drop-shadow-lg">YOUR NAME</span>
            <span className="block text-4xl md:text-5xl font-normal mt-2 opacity-90">
              ARTIST
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-medium bg-white text-black hover:bg-white/90"
              onClick={scrollToShop}
            >
              SHOP NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-black"
            >
              FOR ARTISTS
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative yellow accents */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;