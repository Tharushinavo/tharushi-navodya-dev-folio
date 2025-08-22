import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Front End Development - HTML",
      issuer: "Great Learning",
      date: "2024",
      type: "Certification",
      description: "Comprehensive HTML fundamentals and best practices for modern web development including semantic HTML and accessibility.",
      skills: ["HTML5", "Semantic HTML", "Web Standards", "Accessibility"],
      credentialUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Front End Development - CSS",
      issuer: "Great Learning", 
      date: "2024",
      type: "Certification",
      description: "Advanced CSS styling techniques, responsive design principles, and modern layout methods for creating beautiful web interfaces.",
      skills: ["CSS3", "Flexbox", "Grid", "Responsive Design"],
      credentialUrl: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Web Development - Advanced CSS3",
      issuer: "Alison",
      date: "2024",
      type: "Certification",
      description: "Advanced CSS3 features including animations, transitions, and modern layout techniques for enhanced user experiences.",
      skills: ["CSS3", "Animations", "Transitions", "Advanced Selectors"],
      credentialUrl: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Artificial Intelligence in Project Management",
      issuer: "Alison",
      date: "2024",
      type: "Professional Certificate",
      description: "Integration of AI technologies in project management workflows, automation, and data-driven decision making processes.",
      skills: ["AI", "Project Management", "Process Automation", "Data Analysis"],
      credentialUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Java Programming",
      issuer: "Great Learning",
      date: "2024",
      type: "Programming Certificate",
      description: "Core Java programming concepts, object-oriented programming principles, and application development fundamentals.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      credentialUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificates & <span className="text-primary">Learning</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning through structured programs and industry-recognized certifications
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            {/* Certificates */}
            <div className="space-y-8">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="timeline-item animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-card interactive-card ml-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      
                      {/* Certificate Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold">{cert.title}</h3>
                              <Badge 
                                variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {cert.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-2">
                              <span className="font-medium">{cert.issuer}</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {cert.date}
                              </div>
                              <span className="px-2 py-1 bg-muted rounded text-xs">
                                {cert.type}
                              </span>
                            </div>
                          </div>
                          
                          <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {cert.description}
                        </p>
                        
                        {/* Skills Gained */}
                        <div className="mb-4">
                          <h4 className="font-medium mb-2 text-sm">Skills Gained:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-tag text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        {cert.status === 'Completed' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="btn-outline"
                            onClick={() => {
                              if (cert.credentialUrl && cert.credentialUrl !== '#') {
                                window.open(cert.credentialUrl, '_blank');
                              }
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Credential
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-primary">Education</span>
            </h3>
            
            <div className="project-card max-w-2xl mx-auto p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h4 className="text-xl font-bold">Bachelor's Information Technology Specializing in Information Technology</h4>
              </div>
              
              <p className="text-muted-foreground mb-2">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-4">
                <Calendar className="w-4 h-4" />
                2023 - Present (Expected 2027)
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pursuing a specialized degree in Information Technology with focus on 
                software development, system design, and emerging technologies. 
                Actively engaged in practical projects while maintaining strong 
                academic performance and participating in technology initiatives.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <span className="skill-tag">Software Engineering</span>
                <span className="skill-tag">Database Systems</span>
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Computer Networks</span>
                <span className="skill-tag">HCI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};