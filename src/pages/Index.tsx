import Hero from "@/components/Hero";
import ArtworkGallery from "@/components/ArtworkGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ArtworkGallery />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold yellow-accent inline-block mb-2">
              Art Portfolio
            </h3>
            <p className="text-muted-foreground">
              Creating beautiful, minimalist art with a playful twist
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Behance
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Email
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Art Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
