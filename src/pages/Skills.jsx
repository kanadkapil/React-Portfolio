import React from 'react';

const skills = [
  {
    category: 'Front End',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' }, { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'TailwindCSS' },
      { src: 'https://cdn.simpleicons.org/bootstrap/7952B3', alt: 'Bootstrap' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' }
    ]
  },
  {
    category: 'Backend',
    icons: [
      { src: 'https://cdn.simpleicons.org/php/777BB4', alt: 'PHP' },
      { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js' }
    ]
  },
  {
    category: 'Databases',
    icons: [
      { src: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB' },
      { src: 'https://cdn.simpleicons.org/mysql/4479A1', alt: 'MySQL' }
    ]
  },
  {
    category: 'Programming Languages',
    icons: [
      { src: 'https://cdn.simpleicons.org/c++/00599C', alt: 'C++' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' }
    ]
  },
  {
    category: 'Framework and Others',
    icons: [
      { src: 'https://skillicons.dev/icons?i=jquery', alt: 'jQuery' },
      { src: 'https://skillicons.dev/icons?i=vercel', alt: 'Vercel' },
      { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', alt: 'Apache' }
    ]
  },
  {
    category: 'Design',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva' },
      { src: 'https://skillicons.dev/icons?i=sketchup', alt: 'SketchUp' }
    ]
  }
];

const Skills = () => {
  return (
<div>

<main className="min-h-screen container mx-auto rounded-2xl px-4 py-10 bg-gradient-to-br backdrop-blur-xl text-gray-00">
      <h1 className="text-4xl font-bold mb-10 text-center">💻 Tech Stack</h1>

      {skills.map((section, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">{section.category}:</h3>
          <div className="flex flex-wrap gap-6">
            {section.icons.map((icon, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img src={icon.src} alt={icon.alt} title={icon.alt} className="max-h-12 max-w-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>

</div>
  );
};

export default Skills;
