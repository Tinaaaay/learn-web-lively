import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Globe, Code, Palette, Upload } from "lucide-react";

const HowToCreate = () => {
  const steps = [
    {
      step: 1,
      title: "Planning & Preparation",
      icon: Circle,
      duration: "1-2 days",
      difficulty: "Beginner",
      description: "Define your website's purpose, target audience, and core features.",
      details: [
        "Define your website's purpose and goals",
        "Identify your target audience",
        "Research competitors and inspiration",
        "Create a sitemap and content strategy",
        "Choose a domain name",
        "Plan your content and gather materials"
      ]
    },
    {
      step: 2,
      title: "Design & Wireframing",
      icon: Palette,
      duration: "2-3 days",
      difficulty: "Beginner",
      description: "Create the visual design and layout structure for your website.",
      details: [
        "Sketch basic wireframes for each page",
        "Choose a color scheme and typography",
        "Design the user interface (UI)",
        "Create mockups and prototypes",
        "Plan the user experience (UX)",
        "Get feedback on your designs"
      ]
    },
    {
      step: 3,
      title: "Development Setup",
      icon: Code,
      duration: "1 day",
      difficulty: "Intermediate",
      description: "Set up your development environment and choose your tools.",
      details: [
        "Choose your development approach (HTML/CSS, WordPress, etc.)",
        "Set up a code editor (VS Code, Sublime Text)",
        "Install necessary tools and dependencies",
        "Set up version control with Git",
        "Create your project folder structure",
        "Set up a local development server"
      ]
    },
    {
      step: 4,
      title: "Content Creation",
      icon: Globe,
      duration: "3-5 days",
      difficulty: "Beginner",
      description: "Write and optimize your website content for both users and search engines.",
      details: [
        "Write compelling copy for each page",
        "Optimize content for SEO",
        "Prepare and optimize images",
        "Create engaging headlines and calls-to-action",
        "Ensure content is accessible and readable",
        "Proofread and edit all content"
      ]
    },
    {
      step: 5,
      title: "Coding & Development",
      icon: Code,
      duration: "1-3 weeks",
      difficulty: "Advanced",
      description: "Build your website using HTML, CSS, JavaScript, or your chosen platform.",
      details: [
        "Create the HTML structure",
        "Style with CSS for responsive design",
        "Add interactivity with JavaScript",
        "Implement forms and functionality",
        "Test across different browsers",
        "Optimize for mobile devices"
      ]
    },
    {
      step: 6,
      title: "Testing & Launch",
      icon: CheckCircle,
      duration: "2-3 days",
      difficulty: "Intermediate",
      description: "Test your website thoroughly and deploy it to make it live.",
      details: [
        "Test all functionality and links",
        "Check mobile responsiveness",
        "Validate HTML and CSS code",
        "Test loading speeds and optimize",
        "Choose a web hosting provider",
        "Deploy your website and configure DNS"
      ]
    }
  ];

  const tools = [
    {
      category: "Code Editors",
      items: ["Visual Studio Code", "Sublime Text", "Atom", "WebStorm"]
    },
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Canva"]
    },
    {
      category: "Hosting Platforms",
      items: ["Netlify", "Vercel", "GitHub Pages", "AWS", "DigitalOcean"]
    },
    {
      category: "Content Management",
      items: ["WordPress", "Contentful", "Strapi", "Ghost"]
    },
    {
      category: "Frameworks",
      items: ["React", "Vue.js", "Angular", "Bootstrap"]
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub", "GitLab", "Bitbucket"]
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
            How to Create a Website
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            A comprehensive step-by-step guide to building your first website from concept to launch.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              The Website Creation Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Creating a website involves several key phases, each building upon the previous one. 
              The timeline can vary greatly depending on complexity and your experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 card-gradient rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1-2 weeks</div>
              <div className="text-muted-foreground">Simple static website</div>
            </div>
            <div className="p-6 card-gradient rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1-2 months</div>
              <div className="text-muted-foreground">Dynamic website with CMS</div>
            </div>
            <div className="p-6 card-gradient rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3-6 months</div>
              <div className="text-muted-foreground">Complex web application</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-16">
            Step-by-Step Guide
          </h2>
          
          <div className="space-y-8">
            {steps.map((stepData, index) => (
              <Card key={index} className="card-gradient border-border shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                        <stepData.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading">
                          Step {stepData.step}: {stepData.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">{stepData.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="border-primary/30">
                        {stepData.duration}
                      </Badge>
                      <Badge className={getDifficultyColor(stepData.difficulty)}>
                        {stepData.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stepData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Essential Tools & Technologies
            </h2>
            <p className="text-xl text-muted-foreground">
              The right tools can significantly speed up your development process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((toolCategory, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-center">
                    {toolCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {toolCategory.items.map((tool, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">
            Pro Tips for Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Start Simple
                </h3>
                <p className="text-muted-foreground">
                  Begin with a basic layout and gradually add features. It's easier to expand 
                  a simple site than to simplify a complex one.
                </p>
              </div>
              
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Mobile-First Design
                </h3>
                <p className="text-muted-foreground">
                  Design for mobile devices first, then adapt for larger screens. 
                  Most web traffic now comes from mobile devices.
                </p>
              </div>
              
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Test Early and Often
                </h3>
                <p className="text-muted-foreground">
                  Test your website on different browsers and devices throughout development, 
                  not just at the end.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Plan Your Content
                </h3>
                <p className="text-muted-foreground">
                  Good content is more important than flashy design. Plan what you want to say 
                  before you start building.
                </p>
              </div>
              
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Learn by Doing
                </h3>
                <p className="text-muted-foreground">
                  Don't try to learn everything before starting. Build your first simple site 
                  and improve your skills progressively.
                </p>
              </div>
              
              <div className="p-6 card-gradient rounded-xl border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Use Version Control
                </h3>
                <p className="text-muted-foreground">
                  Use Git from day one to track changes and prevent losing your work. 
                  It's essential for any serious development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToCreate;