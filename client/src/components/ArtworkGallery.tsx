import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const artworks = [
  {
    id: 1,
    title: "Golden Geometry",
    price: "$299",
    image: artwork1,
    category: "Abstract",
    featured: true
  },
  {
    id: 2,
    title: "Flowing Forms",
    price: "$399",
    image: artwork2,
    category: "Contemporary",
    featured: true
  },
  {
    id: 3,
    title: "Type & Space",
    price: "$249",
    image: artwork3,
    category: "Typography",
    featured: false
  }
];

const ArtworkGallery = () => {
  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 yellow-accent inline-block">
            Featured Artwork
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully crafted to bring joy and sophistication to your space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {artwork.category}
                  </Badge>
                  {artwork.featured && (
                    <Badge className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{artwork.price}</span>
                  <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Artwork
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;