const About = () => {
  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 yellow-accent inline-block">
              About the Artist
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to my creative world! I'm passionate about creating minimalist art 
                that speaks to the soul while bringing joy and energy to everyday spaces.
              </p>
              <p>
                My work focuses on the beautiful intersection of simplicity and playfulness, 
                using clean lines, geometric forms, and vibrant yellow accents to create pieces 
                that are both timeless and contemporary.
              </p>
              <p>
                Each artwork is thoughtfully designed to complement modern living, 
                offering a perfect balance of sophistication and fun that transforms any environment.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Creating Joy</h3>
                <p className="text-muted-foreground">
                  Through minimalist design and playful elements
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;