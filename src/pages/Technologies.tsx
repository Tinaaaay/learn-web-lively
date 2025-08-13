import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Cloud, Shield, Zap } from "lucide-react";
import webTechImage from "@/assets/web-technologies.jpg";

const Technologies = () => {
  const categories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      description: "The client-side technologies that create the user interface and experience.",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      technologies: [
        {
          name: "HTML",
          description: "The foundation markup language that structures web content",
          difficulty: "Beginner",
          useCase: "Page structure and content organization"
        },
        {
          name: "CSS",
          description: "Styling language that controls the visual presentation of web pages",
          difficulty: "Beginner",
          useCase: "Visual design, layouts, animations"
        },
        {
          name: "JavaScript",
          description: "Programming language that adds interactivity and dynamic behavior",
          difficulty: "Intermediate",
          useCase: "User interactions, dynamic content, API calls"
        },
        {
          name: "React",
          description: "Popular JavaScript library for building user interfaces",
          difficulty: "Intermediate",
          useCase: "Complex interactive applications"
        },
        {
          name: "Vue.js",
          description: "Progressive JavaScript framework for building user interfaces",
          difficulty: "Intermediate",
          useCase: "Modern web applications with reactive data"
        }
      ]
    },
    {
      icon: Database,
      title: "Backend Technologies",
      description: "Server-side technologies that handle data processing and business logic.",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      technologies: [
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side development",
          difficulty: "Intermediate",
          useCase: "API development, real-time applications"
        },
        {
          name: "Python",
          description: "Versatile programming language with web frameworks like Django and Flask",
          difficulty: "Beginner",
          useCase: "Web applications, data processing, AI integration"
        },
        {
          name: "PHP",
          description: "Server-side scripting language widely used for web development",
          difficulty: "Beginner",
          useCase: "Dynamic websites, content management systems"
        },
        {
          name: "MySQL",
          description: "Popular relational database management system",
          difficulty: "Intermediate",
          useCase: "Data storage, user accounts, content management"
        },
        {
          name: "MongoDB",
          description: "NoSQL database for flexible, document-based data storage",
          difficulty: "Intermediate",
          useCase: "Modern applications with dynamic data structures"
        }
      ]
    },
    {
      icon: Cloud,
      title: "Hosting & Deployment",
      description: "Platforms and services for making your website accessible on the internet.",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      technologies: [
        {
          name: "Netlify",
          description: "Platform for hosting static sites with continuous deployment",
          difficulty: "Beginner",
          useCase: "Static websites, JAMstack applications"
        },
        {
          name: "Vercel",
          description: "Platform optimized for frontend frameworks and serverless functions",
          difficulty: "Beginner",
          useCase: "React, Vue, and other modern framework deployments"
        },
        {
          name: "AWS",
          description: "Comprehensive cloud platform with extensive web services",
          difficulty: "Advanced",
          useCase: "Large-scale applications, enterprise solutions"
        },
        {
          name: "DigitalOcean",
          description: "Cloud infrastructure provider with simple, developer-friendly tools",
          difficulty: "Intermediate",
          useCase: "VPS hosting, scalable web applications"
        },
        {
          name: "GitHub Pages",
          description: "Free hosting service for static websites directly from GitHub repositories",
          difficulty: "Beginner",
          useCase: "Personal portfolios, documentation sites"
        }
      ]
    },
    {
      icon: Zap,
      title: "Development Tools",
      description: "Essential tools that streamline the web development workflow.",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      technologies: [
        {
          name: "Git",
          description: "Version control system for tracking changes in your code",
          difficulty: "Beginner",
          useCase: "Code versioning, collaboration, backup"
        },
        {
          name: "VS Code",
          description: "Popular code editor with extensive extension ecosystem",
          difficulty: "Beginner",
          useCase: "Code editing, debugging, project management"
        },
        {
          name: "Webpack",
          description: "Module bundler that compiles and optimizes web assets",
          difficulty: "Advanced",
          useCase: "Asset optimization, build processes"
        },
        {
          name: "Sass/SCSS",
          description: "CSS preprocessor that adds programming features to CSS",
          difficulty: "Intermediate",
          useCase: "Advanced styling, maintainable CSS code"
        },
        {
          name: "Bootstrap",
          description: "CSS framework for responsive, mobile-first web development",
          difficulty: "Beginner",
          useCase: "Rapid prototyping, consistent UI components"
        }
      ]
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      duration: "2-4 weeks",
      technologies: ["HTML", "CSS", "Basic JavaScript"],
      description: "Master the core technologies that power every website."
    },
    {
      phase: "Enhancement",
      duration: "4-6 weeks",
      technologies: ["Advanced JavaScript", "CSS Frameworks", "Git"],
      description: "Add interactivity and learn development best practices."
    },
    {
      phase: "Frameworks",
      duration: "6-8 weeks",
      technologies: ["React or Vue.js", "Node.js basics", "APIs"],
      description: "Learn modern frameworks for building complex applications."
    },
    {
      phase: "Full Stack",
      duration: "8-12 weeks",
      technologies: ["Backend technologies", "Databases", "Deployment"],
      description: "Become a full-stack developer capable of building complete web applications."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            Web Technologies
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Explore the essential tools, languages, and frameworks that power 
            modern web development.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                The Web Development Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern web development involves a rich ecosystem of technologies, each serving 
                specific purposes in creating robust, scalable, and user-friendly websites. 
                Understanding these technologies and how they work together is crucial for 
                any aspiring web developer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the fundamental trio of HTML, CSS, and JavaScript to advanced frameworks 
                and cloud platforms, this guide will help you navigate the landscape and 
                choose the right tools for your projects.
              </p>
            </div>
            <div className="relative">
              <img 
                src={webTechImage} 
                alt="Web technologies illustration"
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Technology Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Understand the different types of technologies used in web development.
            </p>
          </div>
          
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <Card key={techIndex} className="card-gradient border-border shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-heading">{tech.name}</CardTitle>
                          <Badge className={getDifficultyColor(tech.difficulty)}>
                            {tech.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-foreground">Best for:</p>
                          <p className="text-xs text-muted-foreground">{tech.useCase}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Learning Path
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to learning web development technologies.
            </p>
          </div>
          
          <div className="space-y-8">
            {learningPath.map((phase, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 mx-auto lg:mx-0 accent-gradient rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {phase.phase}
                      </h3>
                      <Badge variant="outline" className="mt-2">
                        {phase.duration}
                      </Badge>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-muted-foreground">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">
                        Phase {index + 1}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {index === 0 && "Start Here"}
                        {index === 1 && "Build Skills"}
                        {index === 2 && "Go Modern"}
                        {index === 3 && "Master Full Stack"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Trends Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Current Trends & Future Outlook
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay ahead of the curve with emerging technologies and industry trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Hot Technologies
              </h3>
              <div className="space-y-4">
                {[
                  { name: "JAMstack", description: "JavaScript, APIs, and Markup for fast, secure sites" },
                  { name: "Serverless", description: "Function-as-a-Service for scalable backend logic" },
                  { name: "Progressive Web Apps", description: "Web apps that feel like native mobile apps" },
                  { name: "WebAssembly", description: "Near-native performance for web applications" }
                ].map((trend, index) => (
                  <div key={index} className="p-4 card-gradient rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">{trend.name}</h4>
                    <p className="text-sm text-muted-foreground">{trend.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Skills in Demand
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "React/Vue.js", demand: "Very High" },
                  { skill: "Node.js", demand: "High" },
                  { skill: "TypeScript", demand: "Growing" },
                  { skill: "Cloud Platforms", demand: "Very High" },
                  { skill: "Mobile-First Design", demand: "Essential" },
                  { skill: "API Development", demand: "High" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 card-gradient rounded-lg border border-border">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <Badge className={
                      item.demand === "Very High" ? "bg-red-500/20 text-red-400 border-red-500/30" :
                      item.demand === "High" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                      item.demand === "Growing" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" :
                      "bg-green-500/20 text-green-400 border-green-500/30"
                    }>
                      {item.demand}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technologies;