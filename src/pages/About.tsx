import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, BookOpen, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Learners Served", value: "10,000+" },
    { icon: BookOpen, label: "Comprehensive Guides", value: "6" },
    { icon: Target, label: "Success Rate", value: "95%" },
    { icon: Award, label: "Years of Experience", value: "5+" },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            About WebLearn
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Empowering aspiring web developers with comprehensive, easy-to-understand 
            guides and resources to master the art of website creation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that everyone should have access to quality web development education. 
                Our mission is to break down complex concepts into digestible, actionable lessons 
                that anyone can follow, regardless of their technical background.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a complete beginner looking to understand what a website is, 
                or someone ready to dive into the technical aspects of web development, 
                we've got you covered with step-by-step guides and practical examples.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                What You'll Learn
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Fundamental concepts of web development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Step-by-step website creation process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Design principles and best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Modern web technologies and tools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Responsive design techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-gradient border-border">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto accent-gradient rounded-xl flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-3xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </CardTitle>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              About the Creator
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/ace2f37e-ece4-45d6-8bab-8673a2091c34.png" 
                alt="Kristine Joy Nisurtado"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Kristine Joy Nisurtado
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                BSIT - 41
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As the creator and owner of WebLearn, I'm passionate about making web development 
                accessible to everyone. With a background in Information Technology, I understand 
                the challenges that beginners face when starting their web development journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This platform represents my commitment to providing clear, comprehensive, and 
                practical learning resources that help aspiring developers build their skills 
                step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground">
              We believe in learning by doing, with clear explanations and practical examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Clear Content
              </h3>
              <p className="text-muted-foreground">
                Complex concepts broken down into simple, easy-to-understand explanations 
                with real-world examples.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Practical Focus
              </h3>
              <p className="text-muted-foreground">
                Every lesson includes hands-on exercises and practical projects 
                to reinforce your learning.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto accent-gradient rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Community Driven
              </h3>
              <p className="text-muted-foreground">
                Built based on feedback from thousands of learners to ensure 
                we address real learning needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;