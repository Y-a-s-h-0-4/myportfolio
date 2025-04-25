
import React, { useEffect, useRef } from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  description: string;
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const educations: Education[] = [
    {
      degree: "Btech. in Computer Science and Engineering",
      institution: "VNR VJIET",
      period: "2022 - 2026",
      cgpa: "9.2",
      description: "Focused on full-stack web development, UI/UX design, and system architecture. Engaged in projects integrating AI, cloud, and scalable web solutions."
    },
    {
      degree: "Andhra Pradesh Board of Intermediate Education",
      institution: "SriChaitanya Junior College",
      period: "2020 - 2022",
      cgpa: "9.49",
      description: "Built a strong foundation in mathematics, physics, and computer science, with consistent academic excellence and competitive problem-solving skills."
    },
    {
      degree: "Andhra Pradesh Secondary School",
      institution: "Vowel School",
      period: "2020",
      cgpa: "9.56",
      description: "Developed core academic skills, participated in science fairs, and laid the groundwork for a tech-oriented career path."
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

    if (educationRefs.current) {
      educationRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (educationRefs.current) {
        educationRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <div 
              key={edu.degree}
              ref={el => educationRefs.current[index] = el}
              className="glass-effect rounded-2xl p-6 mb-6 border border-white/10 relative overflow-hidden opacity-0 hover-lift hover-glow-teal transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-text-teal">
                    {edu.degree}
                  </h3>
                  
                  <div className="mb-2">
                    <div className="text-neon-purple text-sm md:text-base">{edu.institution}</div>
                    <div className="text-gray-400 text-xs">{edu.period}</div>
                  </div>
                </div>
                
                <div className="mt-3 md:mt-0 max-w-md">
                  <p className="text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
