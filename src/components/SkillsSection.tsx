
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: 'programming' | 'designing' | 'frameworks' | 'courseworks';
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skillsData: Record<string, Skill[]> = {
    programming: [
      { name: 'Python', icon: '🐍', category: 'programming' },
      { name: 'C++', icon: 'C++', category: 'programming' },
      { name: 'Java', icon: '☕', category: 'programming' },
      { name: 'C', icon: 'C', category: 'programming' },
      { name: 'SQL', icon: '🔄', category: 'programming' },
      { name: 'JavaScript', icon: 'JS', category: 'programming' },
      { name: 'R Language', icon: 'R', category: 'programming' },
    ],
    designing: [
      { name: 'Adobe XD', icon: 'Xd', category: 'designing' },
      { name: 'Figma', icon: '🔷', category: 'designing' },
      { name: 'Interaction Design', icon: '🎨', category: 'designing' },
      { name: 'Framer', icon: 'Fr', category: 'designing' },
      { name: 'Adobe Illustrator', icon: 'Ai', category: 'designing' },
    ],
    frameworks: [
      { name: 'React JS', icon: '⚛️', category: 'frameworks' },
      { name: 'Node JS', icon: '🟢', category: 'frameworks' },
      { name: 'Express JS', icon: '🚂', category: 'frameworks' },
      { name: 'Tailwind CSS', icon: '🌊', category: 'frameworks' },
      { name: 'Next JS', icon: 'N', category: 'frameworks' },
    ],
    courseworks: [
      { name: 'OOPs', icon: '🔄', category: 'courseworks' },
      { name: 'DBMS', icon: '💾', category: 'courseworks' },
      { name: 'Data Structures', icon: '📊', category: 'courseworks' },
      { name: 'OS', icon: '💻', category: 'courseworks' },
      { name: 'Computer Networks', icon: '🌐', category: 'courseworks' },
      { name: 'Agile Methodologies', icon: '📈', category: 'courseworks' },
    ]
  };

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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (skillRefs.current) {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (skillRefs.current) {
        skillRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  let skillIndex = 0;

  const renderSkillCategory = (title: string, categorySkills: Skill[]) => (
    <div className="mb-14">
      <h3 className="text-2xl font-semibold mb-8 text-white">{title}</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {categorySkills.map((skill) => {
          const currentIndex = skillIndex++;
          return (
            <div
              key={skill.name}
              ref={el => (skillRefs.current[currentIndex] = el)}
              className="rounded-2xl glass-effect px-6 py-3 flex items-center justify-center opacity-0 hover-lift hover-glow-purple transition-all duration-300 border border-white/5 min-w-[140px]"
              style={{ transitionDelay: `${currentIndex * 50}ms` }}
            >
              <span className="text-base font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 gradient-text text-center">
          My Skills
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-8 border border-white/10 hover-glow-purple">
            <h2 className="text-3xl font-bold mb-6 text-center neon-text-purple">Programming Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillsData.programming.map((skill, idx) => (
                <div
                  key={idx}
                  ref={el => (skillRefs.current[idx] = el)}
                  className="rounded-2xl bg-white/5 px-5 py-3 flex items-center opacity-0 hover-lift hover-glow-teal"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 border border-white/10 hover-glow-pink">
            <h2 className="text-3xl font-bold mb-6 text-center neon-text-pink">Designing Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillsData.designing.map((skill, idx) => (
                <div
                  key={idx}
                  ref={el => (skillRefs.current[idx + skillsData.programming.length] = el)}
                  className="rounded-2xl bg-white/5 px-5 py-3 flex items-center opacity-0 hover-lift hover-glow-pink"
                  style={{ transitionDelay: `${(idx + skillsData.programming.length) * 50}ms` }}
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 border border-white/10 hover-glow-teal">
            <h2 className="text-3xl font-bold mb-6 text-center neon-text-teal">Frameworks</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillsData.frameworks.map((skill, idx) => (
                <div
                  key={idx}
                  ref={el => (skillRefs.current[idx + skillsData.programming.length + skillsData.designing.length] = el)}
                  className="rounded-2xl bg-white/5 px-5 py-3 flex items-center opacity-0 hover-lift hover-glow-teal"
                  style={{ transitionDelay: `${(idx + skillsData.programming.length + skillsData.designing.length) * 50}ms` }}
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 border border-white/10 hover-glow-purple">
            <h2 className="text-3xl font-bold mb-6 text-center neon-text-purple">Course Works</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillsData.courseworks.map((skill, idx) => (
                <div
                  key={idx}
                  ref={el => (skillRefs.current[idx + skillsData.programming.length + skillsData.designing.length + skillsData.frameworks.length] = el)}
                  className="rounded-2xl bg-white/5 px-5 py-3 flex items-center opacity-0 hover-lift hover-glow-purple"
                  style={{ transitionDelay: `${(idx + skillsData.programming.length + skillsData.designing.length + skillsData.frameworks.length) * 50}ms` }}
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
