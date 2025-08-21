import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { CertificatesSection } from "./CertificatesSection";
import { ContactSection } from "./ContactSection";

export const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2024 Tharushi Navodya. Crafted with passion and lots of ☕
            </p>
            <p className="text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};