import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@artistportfolio.com",
    description: "Best for detailed inquiries and commissions"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    description: "Available Mon-Fri, 10AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Studio Location",
    content: "Brooklyn, NY",
    description: "Studio visits by appointment"
  },
  {
    icon: Instagram,
    title: "Social Media",
    content: "@artistportfolio",
    description: "Follow for daily inspiration"
  }
];

const faqs = [
  {
    question: "How long does a custom commission take?",
    answer: "Custom pieces typically take 2-4 weeks depending on size and complexity. I'll provide a detailed timeline during our consultation."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! I ship worldwide with secure packaging. Shipping costs and delivery times vary by location."
  },
  {
    question: "What's your return policy?",
    answer: "I offer a 30-day return policy for original condition pieces. Custom commissions are final unless damaged in shipping."
  },
  {
    question: "Can I see artwork in person before purchasing?",
    answer: "Absolutely! Studio visits can be arranged by appointment. I'm located in Brooklyn, NY."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 section-padding bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to discuss a custom piece, have questions about existing artwork, 
            or just want to chat about art? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">{method.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 yellow-accent inline-block">
                Send a Message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and I'll get back to you within 24 hours. 
                The more details you provide about your project or inquiry, the better 
                I can assist you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Free consultation for custom projects</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name *" required />
                    <Input placeholder="Last Name *" required />
                  </div>
                  
                  <Input placeholder="Email Address *" type="email" required />
                  <Input placeholder="Phone Number (Optional)" type="tel" />
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Inquiry Type *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commission">Custom Commission</SelectItem>
                      <SelectItem value="purchase">Purchase Existing Artwork</SelectItem>
                      <SelectItem value="exhibition">Exhibition Inquiry</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Input placeholder="Budget Range (Optional)" />
                  
                  <Textarea 
                    placeholder="Tell me about your project, questions, or how I can help you... *"
                    className="min-h-[120px]"
                    required
                  />
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your information is kept private and secure.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center yellow-accent inline-block">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered?
            </p>
            <Button variant="outline" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;