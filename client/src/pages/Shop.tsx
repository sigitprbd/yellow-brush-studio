import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const collections = [
  {
    title: "Original Paintings",
    description: "Hand-painted originals on canvas",
    items: 12,
    image: artwork1
  },
  {
    title: "Prints",
    description: "High-quality art prints",
    items: 24,
    image: artwork2
  },
  {
    title: "Abstract Series",
    description: "Contemporary abstract collections",
    items: 8,
    image: artwork3
  }
];

const featuredArtworks = [
  {
    id: 1,
    title: "Golden Geometry",
    price: 299,
    originalPrice: 399,
    image: artwork1,
    category: "Abstract",
    isOnSale: true
  },
  {
    id: 3,
    title: "Type & Space",
    price: 249,
    image: artwork3,
    category: "Typography",
    isOnSale: false
  },
  {
    id: 4,
    title: "Minimalist Study",
    price: 199,
    image: artwork1,
    category: "Minimalist",
    isOnSale: false
  },
  {
    id: 5,
    title: "Yellow Dreams",
    price: 349,
    originalPrice: 449,
    image: artwork2,
    category: "Abstract",
    isOnSale: true
  },
  {
    id: 6,
    title: "Clean Lines",
    price: 279,
    image: artwork3,
    category: "Modern",
    isOnSale: false
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop <span className="text-primary">Artwork</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover unique pieces that transform your space with minimalist beauty and playful creativity
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {collections.map((collection, index) => (
              <div key={index} className="artwork-card group text-center">
                <div className="aspect-square overflow-hidden mb-4">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-muted-foreground mb-2">{collection.description}</p>
                <p className="text-sm text-primary font-medium mb-4">{collection.items} items</p>
                <Button variant="outline" className="w-full">
                  View Collection
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold yellow-accent inline-block">
              Featured Artwork
            </h2>
            <div className="flex items-center space-x-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="contemporary">Contemporary</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id} className="artwork-card group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {artwork.isOnSale && (
                    <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                      Sale
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {artwork.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">${artwork.price}</span>
                      {artwork.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${artwork.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;