import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Code, Palette, Layers } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "What is a Website?",
      description: "Learn the fundamental concepts and components that make up a website.",
      link: "/what-is-website",
    },
    {
      icon: Code,
      title: "How to Create",
      description: "Step-by-step guide to building your first website from scratch.",
      link: "/how-to-create",
    },
    {
      icon: Palette,
      title: "Design Tips",
      description: "Best practices for creating beautiful and user-friendly web designs.",
      link: "/design-tips",
    },
    {
      icon: Layers,
      title: "Web Technologies",
      description: "Explore the essential tools and technologies used in web development.",
      link: "/technologies",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                  Master the Art of{" "}
                  <span className="relative">
                    Web Development
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Discover everything you need to know about websites - from basic concepts to advanced 
                  design principles. Your journey to becoming a web developer starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/what-is-website">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow group"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 transition-smooth"
                    >
                      About This Guide
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroIllustration} 
                  alt="Web development illustration"
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-full blur-xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 accent-gradient rounded-full blur-2xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides covering all aspects of web development, from basic concepts 
              to advanced techniques and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full card-gradient border-border hover:shadow-card transition-spring group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-smooth">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 accent-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Build Your First Website?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join thousands of learners who have successfully created their first websites 
            using our comprehensive guides and tutorials.
          </p>
          <Link to="/how-to-create">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;