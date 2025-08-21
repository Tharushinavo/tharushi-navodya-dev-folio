import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  GitBranch,
  Server,
  Layers
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "C++", level: "Intermediate" }
      ]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Sass/SCSS", level: "Intermediate" }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "GraphQL", level: "Beginner" }
      ]
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Redis", level: "Beginner" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: "Intermediate" },
        { name: "Android Studio", level: "Intermediate" },
        { name: "Flutter", level: "Beginner" },
        { name: "Mobile UI/UX", level: "Advanced" }
      ]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: "Advanced" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "User Research", level: "Intermediate" },
        { name: "Prototyping", level: "Advanced" }
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      skills: [
        { name: "Git/GitHub", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "AWS", level: "Beginner" },
        { name: "CI/CD", level: "Beginner" },
        { name: "Linux", level: "Intermediate" }
      ]
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React Ecosystem", level: "Advanced" },
        { name: "Material-UI", level: "Advanced" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "Socket.io", level: "Intermediate" },
        { name: "Jest", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Beginner':
        return 'text-blue-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'w-full';
      case 'Intermediate':
        return 'w-2/3';
      case 'Beginner':
        return 'w-1/3';
      default:
        return 'w-0';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through academic learning and hands-on project experience
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="project-card interactive-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:animate-pulse ${getLevelWidth(skill.level)}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="project-card max-w-2xl mx-auto p-6">
              <h3 className="font-semibold text-lg mb-3">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Cloud Computing</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Blockchain</span>
                <span className="skill-tag">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};