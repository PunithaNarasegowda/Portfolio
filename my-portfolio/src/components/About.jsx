import React from 'react';
import { Code2, Rocket, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Angular'],
    },
    {
      category: 'Backend',
      technologies: ['Java', 'Spring Boot', 'Python', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Tools',
      technologies: ['Git', 'Docker', 'AWS', 'Jenkins', 'MySQL'],
    },
  ];

  const highlights = [
    {
      icon: <Code2 className="text-red-600" size={24} />,
      title: '清潔なコード (Clean Code)',
      description:
        'Writing maintainable, efficient code following best practices and design patterns.',
    },
    {
      icon: <GraduationCap className="text-orange-600" size={24} />,
      title: '学習 (Learning)',
      description:
        'Continuous learning and adaptation to new technologies and methodologies.',
    },
    {
      icon: <Rocket className="text-red-600" size={24} />,
      title: '革新 (Innovation)',
      description:
        'Building scalable solutions that drive business growth and user satisfaction.',
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: '協力 (Collaboration)',
      description:
        'Effective teamwork and clear communication in diverse, multicultural environments.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-serif">
            私について (About Me)
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Software Engineer with expertise in full-stack development, passionate about creating
            elegant solutions that bridge technology and user experience.
          </p>
        </div>

        {/* My Journey + Skills */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* My Journey */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">私の物語 (My Journey)</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                My journey in software engineering began with a strong foundation in computer
                science, where I developed a passion for creating efficient, scalable solutions.
                Like the Japanese philosophy of <em>kaizen</em> (continuous improvement), I believe
                in constantly refining my craft.
              </p>
              <p>
                With experience spanning frontend and backend development, I specialize in Java,
                Spring Boot, React, and modern web technologies. My approach combines technical
                precision with aesthetic sensibility, inspired by Japanese design principles of
                simplicity and harmony.
              </p>
              <p>
                I thrive in collaborative environments and enjoy mentoring others, believing that
                knowledge shared is knowledge multiplied. My goal is to create technology that not
                only functions flawlessly but also brings joy to its users.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">
                技術 (Skills & Technologies)
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-800 mb-3">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-200 border border-red-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-red-100"
            >
              <div className="flex justify-center mb-4">{highlight.icon}</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{highlight.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
