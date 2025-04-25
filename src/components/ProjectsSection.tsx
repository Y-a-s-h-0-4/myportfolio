import React, { useEffect, useRef } from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import flapie from '../assets/Flapie.jpg';
import vjeventrix from '../assets/Vjeventrix.jpg';
import workit from '../assets/Workit.jpg';
import xairotech from '../assets/Xairotech.jpg';
import optat from '../assets/Optat.jpg';
import bloodbot from '../assets/Bloodbot.jpg';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      title: "Flapie",
      description: "A recipe-sharing platform developed using Next.js with OAuth integration. Features include responsive design, secure user authentication, and dynamic content management. Designed using Figma and styled with Tailwind CSS; MongoDB is used for data storage.",
      technologies: ["Next.js", "OAuth", "Figma", "MongoDB", "Tailwind CSS"],
      demoLink: "https://flapie.yashwanthpothala.tech/",
      githubLink: "https://github.com/Y-a-s-h-0-4/Flapie",
      image: flapie,
    },
    {
      title: "Vjeventrix",
      description: "A college event management platform built with Next.js, Clerk authentication, and Stripe payments. Enables seamless event browsing, ticket booking, and admin-level event handling with a clean UI using Tailwind CSS and MongoDB.",
      technologies: ["Next.js", "Clerk", "Stripe", "MongoDB", "Tailwind CSS"],
      demoLink: "https://vjeventrix.yashwanthpothala.tech/",
      githubLink: "https://github.com/Y-a-s-h-0-4/VJEventrix",
      image: vjeventrix,
    },
    {
      title: "Xairotech",
      description: "Corporate website designed and developed for XairoTech using Framer and Figma. Showcases services, client testimonials, and company vision with smooth animations and a professional layout.",
      technologies: ["Framer", "Figma"],
      demoLink: "https://www.xairotech.com/",
      githubLink: "https://www.xairotech.com/",
      image: xairotech,
    },
    {
      title: "Workit",
      description: "A modern UI website for an agency offering software solutions. Built using React.js and TypeScript with Tailwind CSS, focusing on sleek design and responsive components for showcasing services and team portfolios.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      demoLink: "https://workit-website-nurturer.vercel.app/",
      githubLink: "https://github.com/Y-a-s-h-0-4/work_it",
      image: workit,
    },
    
    {
      title: "Optat",
      description: "Official website for Optat, a leading agency offering automation and digital operations to boost business online presence. Highlights services, client collaborations, and impact through a modern interface.",
      technologies: ["Framer", "Figma"],
      demoLink: "https://optat-website.vercel.app/",
      githubLink: "https://optat-website.vercel.app/",
      image: optat,
    },
    {
      title: "BloodDonorbot",
      description: "A Telegram bot that helps users find blood donors based on blood group and location. Also allows users to register as potential donors, streamlining emergency blood requirements through simple chat commands.",
      technologies: ["Telegram Bot API", "Python", "Pyrogram", "MongoDB"],
      demoLink: "https://t.me/bloodonors_bot",
      githubLink: "https://github.com/Y-a-s-h-0-4/blood_donor_bot",
      image: bloodbot,
    }
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className="group bg-muted/50 rounded-lg overflow-hidden border border-white/10 opacity-0 transform transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden p-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={project.demoLink} 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:neon-text-purple transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
