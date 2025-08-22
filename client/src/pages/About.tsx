import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Palette, Users } from "lucide-react";

const milestones = [
  { year: "2020", event: "Started artistic journey with digital minimalism" },
  { year: "2021", event: "First solo exhibition 'Clean Lines'" },
  { year: "2022", event: "Featured in Contemporary Art Magazine" },
  { year: "2023", event: "Launched mentorship program for emerging artists" },
  { year: "2024", event: "Opened online shop and reached 1000+ collectors" }
];

const values = [
  {
    icon: Palette,
    title: "Minimalist Beauty",
    description: "I believe in the power of simplicity to create profound emotional connections."
  },
  {
    icon: Heart,
    title: "Joyful Expression",
    description: "Art should bring happiness and positive energy into everyday spaces."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Supporting fellow artists and collectors in their creative journeys."
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every piece is created with attention to detail and lasting quality."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 section-padding bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About the <span className="text-primary">Artist</span>
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a contemporary artist passionate about creating minimalist works 
                  that bring joy and sophistication to modern spaces. My journey began with 
                  a simple belief: that art should be both beautiful and accessible.
                </p>
                <p>
                  Working primarily with warm yellows and clean geometric forms, I explore 
                  the intersection of simplicity and playfulness. Each piece is designed to 
                  complement contemporary living while adding a spark of creative energy.
                </p>
                <p>
                  Beyond creating art, I'm dedicated to building a community of artists and 
                  collectors who appreciate the transformative power of thoughtful design.
                </p>
              </div>
              <div className="pt-8">
                <Button size="lg" className="mr-4">
                  View My Work
                </Button>
                <Button variant="outline" size="lg">
                  Commission Piece
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Creating Since 2020</h3>
                  <p className="text-muted-foreground">
                    Over 200 pieces created<br/>
                    50+ happy collectors<br/>
                    3 solo exhibitions
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full" />
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-primary/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            My Values & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            My Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <Badge variant="outline" className="min-w-[60px] text-center font-bold">
                  {milestone.year}
                </Badge>
                <div className="w-3 h-3 bg-primary rounded-full" />
                <p className="text-lg">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Artworks Created</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Happy Collectors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Countries Shipped</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Major Exhibitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something <span className="text-primary">Beautiful</span> Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for a custom piece or want to start your own artistic journey, 
            I'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Commission Artwork
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;