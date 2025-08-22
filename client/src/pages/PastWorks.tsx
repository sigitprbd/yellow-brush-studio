import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const pastWorks = {
  "2024": [
    {
      id: 1,
      title: "Golden Geometry Series",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "24\" x 36\"",
      image: artwork1,
      description: "A minimalist exploration of geometric forms in warm yellow tones.",
      status: "Sold"
    },
  ],
  "2023": [
    {
      id: 3,
      title: "Type & Space Study",
      year: "2023",
      medium: "Digital Art",
      dimensions: "16\" x 20\"",
      image: artwork3,
      description: "Typography meets minimalist design in this contemporary piece.",
      status: "Sold"
    },
    {
      id: 4,
      title: "Yellow Dreams",
      year: "2023",
      medium: "Oil on Canvas",
      dimensions: "48\" x 60\"",
      image: artwork1,
      description: "Large-scale abstract work celebrating the energy of yellow.",
      status: "Private Collection"
    }
  ],
  "2022": [
    {
      id: 5,
      title: "Minimalist Study I",
      year: "2022",
      medium: "Watercolor",
      dimensions: "12\" x 16\"",
      image: artwork2,
      description: "Early exploration of minimalist principles.",
      status: "Sold"
    }
  ]
};

const exhibitions = [
  {
    title: "Minimalist Futures",
    location: "Modern Art Gallery",
    year: "2024",
    type: "Group Exhibition"
  },
  {
    title: "Yellow & Beyond",
    location: "Contemporary Space",
    year: "2023",
    type: "Solo Exhibition"
  },
  {
    title: "Emerging Artists",
    location: "City Museum",
    year: "2022",
    type: "Group Exhibition"
  }
];

const PastWorks = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 section-padding bg-gradient-to-br from-secondary/30 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Past <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A journey through my artistic evolution, exploring minimalism, color, and form
          </p>
        </div>
      </section>

      {/* Timeline of Works */}
      <section className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2022">2022</TabsTrigger>
            </TabsList>
            
            {Object.entries(pastWorks).map(([year, works]) => (
              <TabsContent key={year} value={year}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {works.map((work) => (
                    <div key={work.id} className="artwork-card group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={work.image} 
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge 
                            variant={work.status === "Available" ? "default" : "secondary"}
                            className={work.status === "Available" ? "bg-green-500" : ""}
                          >
                            {work.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{work.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{work.medium}</p>
                        <p className="text-muted-foreground text-sm mb-3">{work.dimensions}</p>
                        <p className="text-sm leading-relaxed mb-4">{work.description}</p>
                        {work.status === "Available" && (
                          <Button variant="outline" size="sm" className="w-full">
                            Inquire About This Piece
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            Exhibitions & Shows
          </h2>
          <div className="space-y-6">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exhibition.title}</h3>
                    <p className="text-muted-foreground">{exhibition.location}</p>
                  </div>
                  <div className="mt-3 md:mt-0 md:text-right">
                    <Badge variant="outline">{exhibition.type}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">{exhibition.year}</p>
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

export default PastWorks;