import Hero from "@/components/Hero";
import ArtworkGallery from "@/components/ArtworkGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const featuredCollections = [
  {
    title: "Original Paintings",
    description: "Hand-painted originals on canvas",
    items: 12,
    image: artwork1,
    link: "/shop"
  },
  {
    title: "Prints & Reproductions",
    description: "High-quality art prints",
    items: 24,
    image: artwork2,
    link: "/shop"
  },
  {
    title: "Abstract Series",
    description: "Contemporary minimalist collections",
    items: 8,
    image: artwork3,
    link: "/shop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Collections */}
      <section id="featured-collections" className="py-20 section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 yellow-accent inline-block">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore curated collections of minimalist artwork designed to transform your space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCollections.map((collection, index) => (
              <Link key={index} to={collection.link}>
                <Card className="artwork-card group text-center h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                    <p className="text-muted-foreground mb-2">{collection.description}</p>
                    <Badge variant="outline" className="mb-4">
                      {collection.items} pieces
                    </Badge>
                    <Button variant="outline" className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Collection
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" className="px-8">
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artwork */}
      <ArtworkGallery />
      
      {/* About Preview */}
      <section className="py-20 section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 yellow-accent inline-block">
            About the Artist
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating minimalist art that brings joy and sophistication to modern spaces. 
            Each piece is thoughtfully designed to complement contemporary living while 
            adding a spark of creative energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="px-8">
                Learn More About Me
              </Button>
            </Link>
            <Link to="/for-artists">
              <Button variant="outline" size="lg" className="px-8">
                For Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-primary">Space</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover artwork that speaks to you, or let's create something custom together. 
            Your perfect piece is just a conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="px-8">
                Shop Artwork
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8">
                Commission Custom Piece
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
