import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Users, Code, Heart } from "lucide-react";

const Credits = () => {
  const sources = [
    {
      category: "Educational Resources",
      icon: Book,
      items: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "Comprehensive web development documentation" },
        { name: "W3Schools", url: "https://www.w3schools.com", description: "Web development tutorials and references" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org", description: "Free coding education and certifications" },
        { name: "CSS-Tricks", url: "https://css-tricks.com", description: "Tips, tricks, and techniques on CSS" },
        { name: "Smashing Magazine", url: "https://www.smashingmagazine.com", description: "Web design and development articles" }
      ]
    },
    {
      category: "Design Inspiration",
      icon: Users,
      items: [
        { name: "Dribbble", url: "https://dribbble.com", description: "Design inspiration and community" },
        { name: "Behance", url: "https://www.behance.net", description: "Creative portfolio platform" },
        { name: "Awwwards", url: "https://www.awwwards.com", description: "Website design awards and inspiration" },
        { name: "UI Movement", url: "https://uimovement.com", description: "UI design inspiration" },
        { name: "Material Design", url: "https://material.io", description: "Google's design system guidelines" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: Code,
      items: [
        { name: "Visual Studio Code", url: "https://code.visualstudio.com", description: "Code editor used for development" },
        { name: "React", url: "https://reactjs.org", description: "JavaScript library for building user interfaces" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com", description: "Utility-first CSS framework" },
        { name: "Lucide Icons", url: "https://lucide.dev", description: "Beautiful & consistent icon library" },
        { name: "Unsplash", url: "https://unsplash.com", description: "High-quality stock photography" }
      ]
    }
  ];

  const contributors = [
    {
      role: "Content Research",
      description: "Extensive research from industry-leading web development resources and best practices documentation."
    },
    {
      role: "Technical Writing",
      description: "Original content creation based on years of web development experience and teaching."
    },
    {
      role: "Design & Development",
      description: "Modern, responsive interface built with React, TypeScript, and Tailwind CSS."
    },
    {
      role: "User Experience",
      description: "Intuitive navigation and content organization for optimal learning experience."
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            Credits & References
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Acknowledging the sources, tools, and inspiration that made this 
            educational resource possible.
          </p>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Our Gratitude
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This educational website was created to provide comprehensive, accessible 
                information about web development. We are deeply grateful to the open-source 
                community, educational platforms, and individual contributors who have shared 
                their knowledge and made resources freely available.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All content on this website is original writing based on established best 
                practices and industry standards. We've drawn inspiration from leading 
                educational resources while ensuring our explanations are unique and 
                tailored for beginning web developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Sources & References
            </h2>
            <p className="text-xl text-muted-foreground">
              Key resources that informed our content and approach.
            </p>
          </div>
          
          <div className="space-y-12">
            {sources.map((source, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                    <source.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {source.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {source.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="card-gradient border-border shadow-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-heading flex items-center justify-between">
                          {item.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          Visit Resource →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Project Contributors
            </h2>
            <p className="text-xl text-muted-foreground">
              The different aspects that went into creating this educational resource.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributors.map((contributor, index) => (
              <Card key={index} className="card-gradient border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{contributor.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{contributor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images & Media Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Images & Media
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Visual content and media sources used throughout the website.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Custom Illustrations
                  </h3>
                  <p className="text-muted-foreground">
                    Hero images and technical illustrations were generated using AI image generation 
                    tools to create custom visuals that perfectly match our content and design aesthetic. 
                    These images are original and created specifically for this educational resource.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Icons & UI Elements
                  </h3>
                  <p className="text-muted-foreground">
                    Icons throughout the website are provided by{" "}
                    <a 
                      href="https://lucide.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Lucide Icons
                    </a>
                    , a beautiful and consistent open-source icon library. The design system 
                    utilizes modern web standards and accessibility best practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
            Educational Use
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This website and its content are created for educational purposes. All original 
              content is provided free of charge to help aspiring web developers learn and 
              grow their skills. We encourage sharing and learning from this resource.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you find this resource helpful, we encourage you to explore the referenced 
              sources and continue your learning journey with the broader web development 
              community. Remember to always respect licensing and attribution requirements 
              when using external resources in your own projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Credits;