import { BookOpen, Code, Heart, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Information Technology undergraduate with strong foundations in software engineering"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Full-stack development with modern frameworks and best practices"
    },
    {
      icon: Target,
      title: "Goals",
      description: "Aspiring to create innovative solutions that make a positive impact"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "UI/UX design and creating seamless user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate IT student on a journey to bridge technology and human needs
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Story */}
            <div className="animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm Tharushi Navodya, a proactive Information Technology undergraduate 
                  specializing in Information Technology at SLIIT. I believe in leveraging 
                  technology to create innovative solutions that address real-world challenges 
                  and make a meaningful impact in people's lives.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing my degree while actively developing practical projects 
                  that span web applications, mobile development, and system design. 
                  I have hands-on experience with modern technologies and frameworks, 
                  always focusing on creating user-centric solutions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in full-stack development and creating seamless digital 
                  experiences. I'm constantly learning new technologies and methodologies 
                  to stay at the forefront of software innovation.
                </p>
              </div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid gap-6 animate-scale-in">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="project-card interactive-card p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};