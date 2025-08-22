import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/tharushi-profile-real.jpg";
import heroBg from "@/assets/hero-bg-pattern.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a temporary link element to download CV
    const link = document.createElement('a');
    link.href = '/cv/Tharushi_Navodya_CV.pdf'; // You'll need to add your CV file to public/cv/ folder
    link.download = 'Tharushi_Navodya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hi there! 👋</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tharushi Navodya
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Information Technology Undergraduate
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Proactive Information Technology undergraduate specializing in Information 
              Technology at SLIIT. Passionate about developing innovative solutions 
              and creating impactful digital experiences.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="btn-primary px-8 py-3 text-lg font-medium"
              >
                View My Work
              </Button>
              <Button 
                onClick={downloadCV}
                variant="outline" 
                size="lg"
                className="btn-outline px-8 py-3 text-lg font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/tharushi-navodya-6a05aa259" 
                className="p-3 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/Tharushinavo" 
                className="p-3 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:tharushinavodya233@gmail.com" 
                className="p-3 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-elegant">
                <img 
                  src={profileImage} 
                  alt="Tharushi Navodya - IT Professional" 
                  className="w-full h-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};