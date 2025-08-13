import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Smartphone, Zap, Users, Palette, Layout } from "lucide-react";
import designImage from "@/assets/design-process.jpg";
import responsiveImage from "@/assets/responsive-design.jpg";

const DesignTips = () => {
  const principles = [
    {
      icon: Eye,
      title: "Visual Hierarchy",
      category: "Layout",
      description: "Guide users' attention through strategic use of size, color, and positioning.",
      tips: [
        "Use larger fonts for headlines and important information",
        "Create contrast between different content sections",
        "Position key elements where users naturally look first",
        "Use white space to separate and group related content"
      ]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      category: "Technical",
      description: "Ensure your website works perfectly on all devices and screen sizes.",
      tips: [
        "Design mobile-first, then scale up to larger screens",
        "Use flexible grid systems and percentage-based widths",
        "Test on real devices, not just browser dev tools",
        "Optimize touch targets for mobile interaction"
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      category: "Technical",
      description: "Fast-loading websites provide better user experience and SEO rankings.",
      tips: [
        "Optimize images for web (compress and use appropriate formats)",
        "Minimize HTTP requests by combining files",
        "Use browser caching and content delivery networks",
        "Write clean, efficient code without unnecessary libraries"
      ]
    },
    {
      icon: Users,
      title: "User Experience (UX)",
      category: "Usability",
      description: "Create intuitive, user-friendly interfaces that make tasks easy to complete.",
      tips: [
        "Keep navigation simple and consistent across pages",
        "Use familiar design patterns and conventions",
        "Provide clear feedback for user actions",
        "Make important actions obvious and easy to find"
      ]
    },
    {
      icon: Palette,
      title: "Color & Typography",
      category: "Visual",
      description: "Use color and fonts strategically to enhance readability and brand identity.",
      tips: [
        "Choose 2-3 main colors and stick to them consistently",
        "Ensure sufficient contrast for accessibility",
        "Use no more than 2-3 font families",
        "Make body text at least 16px for good readability"
      ]
    },
    {
      icon: Layout,
      title: "Layout & Composition",
      category: "Layout",
      description: "Organize content in a logical, visually appealing way that supports your goals.",
      tips: [
        "Use grid systems for consistent alignment",
        "Follow the rule of thirds for visual balance",
        "Group related content together",
        "Leave plenty of white space for visual breathing room"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Too Much Content Above the Fold",
      solution: "Focus on one primary message and call-to-action",
      impact: "High"
    },
    {
      mistake: "Poor Mobile Experience",
      solution: "Test thoroughly on mobile devices and optimize accordingly",
      impact: "High"
    },
    {
      mistake: "Slow Loading Times",
      solution: "Optimize images and minimize resource usage",
      impact: "High"
    },
    {
      mistake: "Inconsistent Design Elements",
      solution: "Create a style guide and stick to it throughout",
      impact: "Medium"
    },
    {
      mistake: "Hidden or Confusing Navigation",
      solution: "Make navigation clear, visible, and intuitive",
      impact: "High"
    },
    {
      mistake: "Using Too Many Fonts",
      solution: "Limit to 2-3 font families maximum",
      impact: "Medium"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Layout": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Technical": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Usability": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Visual": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            Website Design Tips
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Essential design principles and best practices for creating beautiful, 
            user-friendly websites that achieve your goals.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Design with Purpose
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Great web design isn't just about making things look pretty—it's about creating 
                experiences that help users accomplish their goals while reflecting your brand 
                and values. Every design decision should serve a purpose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're building a personal portfolio, business website, or complex web 
                application, these design principles will help you create sites that are not 
                only visually appealing but also functional and user-friendly.
              </p>
            </div>
            <div className="relative">
              <img 
                src={designImage} 
                alt="Web design process illustration"
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Core Design Principles
            </h2>
            <p className="text-xl text-muted-foreground">
              Master these fundamental principles to create professional, effective websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="card-gradient border-border shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                        <principle.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading">{principle.title}</CardTitle>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(principle.category)}>
                      {principle.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-2">{principle.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {principle.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={responsiveImage} 
                alt="Responsive design across devices"
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Responsive Design Matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 60% of web traffic coming from mobile devices, responsive design 
                isn't optional—it's essential. Your website needs to provide an excellent 
                experience on smartphones, tablets, and desktops.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mobile-First Approach</h4>
                    <p className="text-muted-foreground text-sm">Start with mobile design, then enhance for larger screens</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Flexible Layouts</h4>
                    <p className="text-muted-foreground text-sm">Use CSS Grid and Flexbox for adaptable layouts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Touch-Friendly Design</h4>
                    <p className="text-muted-foreground text-sm">Ensure buttons and links are large enough for touch interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Common Design Mistakes to Avoid
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from these frequent pitfalls to create better user experiences.
            </p>
          </div>
          
          <div className="space-y-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {item.mistake}
                      </h3>
                      <Badge className={getImpactColor(item.impact)}>
                        {item.impact} Impact
                      </Badge>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Resources Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Quick Design Checklist
            </h2>
            <p className="text-xl text-muted-foreground">
              Use this checklist before launching your website to ensure quality design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">Visual & Layout</h3>
              <div className="space-y-3">
                {[
                  "Consistent color scheme throughout",
                  "Readable font sizes (16px+ for body text)",
                  "Proper visual hierarchy with headings",
                  "Adequate white space between elements",
                  "Aligned elements using a grid system"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-primary rounded"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">Functionality & UX</h3>
              <div className="space-y-3">
                {[
                  "Mobile-responsive on all devices",
                  "Fast loading times (under 3 seconds)",
                  "Clear, intuitive navigation",
                  "Working contact forms and links",
                  "Accessible to users with disabilities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-primary rounded"></div>
                    <span className="text-muted-foreground">{item}</span>
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

export default DesignTips;