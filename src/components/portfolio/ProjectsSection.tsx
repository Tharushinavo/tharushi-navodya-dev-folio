import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mobileAppProject from "@/assets/project-mobile-app.jpg";
import webDashboardProject from "@/assets/project-web-dashboard.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "GROCERY Household Web Application - MERN Stack",
      description: "A comprehensive web application for household grocery management with modern UI/UX design and full-stack functionality.",
      image: mobileAppProject,
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      role: "Full-Stack Developer",
      features: [
        "User authentication & profiles",
        "Grocery inventory management", 
        "Shopping list functionality",
        "Household management system",
        "Responsive design"
      ],
      githubUrl: "https://github.com/Tharushinavo/grocery-household",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "FOOD Web Application - Spring Boot and React js",
      description: "A modern food delivery web application built with Spring Boot backend and React frontend with comprehensive features.",
      image: webDashboardProject,
      technologies: ["Spring Boot", "React", "JavaScript", "HTML/CSS"],
      role: "Full-Stack Developer",
      features: [
        "Restaurant management system",
        "Order processing & tracking",
        "Menu management",
        "User authentication",
        "Payment integration"
      ],
      githubUrl: "https://github.com/Tharushinavo/food-web-app",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Turbo Sales Fast Food Delivery Mobile App - Figma",
      description: "UI/UX design for a fast food delivery mobile application created using Figma with focus on user experience and modern design principles.",
      image: mobileAppProject,
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      role: "UI/UX Designer",
      features: [
        "Complete mobile app design",
        "User journey mapping",
        "Interactive prototypes",
        "Modern UI components",
        "Design system creation"
      ],
      githubUrl: "https://github.com/Tharushinavo",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my journey through real-world applications and innovative solutions
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-xl border border-border shadow-card">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          className="btn-primary"
                          onClick={() => window.open(project.liveUrl !== '#' ? project.liveUrl : project.githubUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="btn-outline"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{project.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="btn-primary"
                      onClick={() => window.open(project.liveUrl !== '#' ? project.liveUrl : project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline"
              onClick={() => window.open('https://github.com/Tharushinavo', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};