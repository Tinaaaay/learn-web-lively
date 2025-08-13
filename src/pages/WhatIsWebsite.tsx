import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Database, Shield } from "lucide-react";

const WhatIsWebsite = () => {
  const components = [
    {
      icon: Globe,
      title: "Frontend (Client-side)",
      description: "The visual part users interact with - HTML structure, CSS styling, and JavaScript functionality.",
      details: ["HTML for content structure", "CSS for visual design", "JavaScript for interactivity"]
    },
    {
      icon: Server,
      title: "Backend (Server-side)",
      description: "The behind-the-scenes logic that processes requests and manages data.",
      details: ["Server-side programming", "API endpoints", "Business logic processing"]
    },
    {
      icon: Database,
      title: "Database",
      description: "Storage system for your website's data, from user information to content.",
      details: ["Data storage and retrieval", "User information", "Content management"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protection measures to keep your website and users' data safe.",
      details: ["SSL certificates", "User authentication", "Data encryption"]
    }
  ];

  const websiteTypes = [
    {
      type: "Static Websites",
      description: "Simple websites with fixed content that doesn't change unless manually updated.",
      examples: "Personal portfolios, company brochures, landing pages",
      pros: "Fast loading, low cost, easy to host",
      cons: "Limited functionality, manual updates required"
    },
    {
      type: "Dynamic Websites",
      description: "Interactive websites that can change content based on user interactions or data.",
      examples: "Social media platforms, e-commerce sites, blogs",
      pros: "Interactive features, automatic updates, user personalization",
      cons: "More complex, higher hosting costs"
    },
    {
      type: "Single Page Applications (SPAs)",
      description: "Modern web applications that load a single HTML page and update content dynamically.",
      examples: "Gmail, Facebook, Google Maps",
      pros: "Smooth user experience, app-like feel, fast navigation",
      cons: "SEO challenges, initial load time"
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            What is a Website?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Understanding the fundamental concepts, components, and types of websites 
            in the modern digital world.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Basic Definition
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong>website</strong> is a collection of interconnected web pages and digital content 
                that is hosted on a web server and accessible through the internet via a web browser. 
                Think of it as a digital space where you can share information, provide services, 
                or create interactive experiences for users around the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every website has a unique address called a <strong>URL (Uniform Resource Locator)</strong>, 
                like www.example.com, which allows people to find and access your site from anywhere 
                in the world. When someone types your website's URL into their browser, 
                they're essentially requesting to view the content you've published online.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Websites can range from simple single-page sites with basic information to complex 
                applications with thousands of pages, user accounts, databases, and real-time interactions. 
                They serve countless purposes: sharing information, selling products, providing services, 
                entertainment, education, communication, and much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Key Components of a Website
            </h2>
            <p className="text-xl text-muted-foreground">
              Every website is built from several essential components working together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="card-gradient border-border shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                      <component.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-heading">{component.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{component.description}</p>
                  <ul className="space-y-2">
                    {component.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Types of Websites
            </h2>
            <p className="text-xl text-muted-foreground">
              Different types of websites serve different purposes and have unique characteristics.
            </p>
          </div>
          
          <div className="space-y-8">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {type.type}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Examples:</p>
                        <p className="text-sm text-muted-foreground">{type.examples}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-green-400">Advantages:</p>
                        <p className="text-sm text-muted-foreground">{type.pros}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-orange-400">Considerations:</p>
                        <p className="text-sm text-muted-foreground">{type.cons}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Websites Work Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">
            How Websites Work
          </h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">User Request</h3>
                <p className="text-muted-foreground">
                  User types a URL or clicks a link in their web browser
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">Server Response</h3>
                <p className="text-muted-foreground">
                  Web server processes the request and sends back the website files
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">Browser Display</h3>
                <p className="text-muted-foreground">
                  Browser interprets the code and displays the website to the user
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 card-gradient rounded-xl border border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Behind the Scenes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit a website, your browser communicates with web servers around the world 
                through a network of protocols. The <strong>Domain Name System (DNS)</strong> translates 
                the human-readable URL into an IP address, which is like a postal address for computers. 
                Your browser then sends an <strong>HTTP/HTTPS request</strong> to that server, which 
                responds with the website's files (HTML, CSS, JavaScript, images). Your browser 
                then interprets and renders these files to display the complete website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatIsWebsite;