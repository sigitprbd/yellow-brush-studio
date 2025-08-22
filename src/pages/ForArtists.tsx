import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, Lightbulb, BookOpen, Star, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Art Mentorship",
    description: "One-on-one guidance to develop your unique artistic style and vision",
    features: ["Portfolio Review", "Technique Development", "Style Exploration", "Monthly Sessions"],
    price: "$150/session"
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Interactive sessions focusing on minimalist art techniques and color theory",
    features: ["Small Groups (6-8 people)", "3-hour Sessions", "All Materials Included", "Take Home Pieces"],
    price: "$85/person"
  },
  {
    icon: Lightbulb,
    title: "Creative Consulting",
    description: "Strategic guidance for artists looking to build their brand and business",
    features: ["Brand Development", "Marketing Strategy", "Online Presence", "Pricing Guidance"],
    price: "$200/session"
  },
  {
    icon: BookOpen,
    title: "Online Course",
    description: "Comprehensive course on minimalist art creation and business fundamentals",
    features: ["12 Video Modules", "Downloadable Resources", "Community Access", "Lifetime Access"],
    price: "$297"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Emerging Artist",
    content: "The mentorship program completely transformed my approach to art. I finally found my unique style and sold my first piece within 3 months!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Professional Artist",
    content: "The creative consulting sessions helped me triple my income and build a sustainable art business. Invaluable insights!",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Art Student",
    content: "The workshops are incredible. Learning minimalist techniques in such a supportive environment was exactly what I needed.",
    rating: 5
  }
];

const ForArtists = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For <span className="text-primary">Artists</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering artists to develop their unique voice and build sustainable creative careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            Services & Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="artwork-card group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            What Artists Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Elevate</span> Your Art?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community of artists committed to growth, creativity, and success. 
            Let's develop your unique artistic voice together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Course Preview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForArtists;