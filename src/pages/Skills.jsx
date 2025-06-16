import React from 'react';

const skills = [
  {
    category: 'Front End',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React', link: 'https://reactjs.org/docs/getting-started.html' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'TailwindCSS', link: 'https://tailwindcss.com/docs' },
      { src: 'https://cdn.simpleicons.org/bootstrap/7952B3', alt: 'Bootstrap', link: 'https://getbootstrap.com/docs/' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript', link: 'https://www.typescriptlang.org/docs/' }
    ]
  },
  {
    category: 'Backend',
    icons: [
      { src: 'https://cdn.simpleicons.org/php/777BB4', alt: 'PHP', link: 'https://www.php.net/docs.php' },
      { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js', link: 'https://nodejs.org/en/docs/' }
    ]
  },
  {
    category: 'Databases',
    icons: [
      { src: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB', link: 'https://www.mongodb.com/docs/' },
      { src: 'https://cdn.simpleicons.org/mysql/4479A1', alt: 'MySQL', link: 'https://dev.mysql.com/doc/' }
    ]
  },
  {
    category: 'Programming Languages',
    icons: [
      { src: 'https://cdn.simpleicons.org/c++/00599C', alt: 'C++', link: 'https://en.cppreference.com/w/' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python', link: 'https://docs.python.org/3/' }
    ]
  },
  {
    category: 'Framework and Others',
    icons: [
      { src: 'https://skillicons.dev/icons?i=jquery', alt: 'jQuery', link: 'https://api.jquery.com/' },
      { src: 'https://skillicons.dev/icons?i=vercel', alt: 'Vercel', link: 'https://vercel.com/docs' },
      { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub', link: 'https://docs.github.com/' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', alt: 'Apache', link: 'https://httpd.apache.org/docs/' }
    ]
  },
  {
    category: 'Design',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma', link: 'https://help.figma.com/' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva', link: 'https://www.canva.com/help/' },
      { src: 'https://skillicons.dev/icons?i=sketchup', alt: 'SketchUp', link: 'https://help.sketchup.com/' }
    ]
  }
];

const Skills = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto rounded-2xl px-4 py-10 bg-gradient-to-br backdrop-blur-xl text-gray-50">
        <h1 className="text-4xl font-bold mb-10 text-center">💻 Tech Stack</h1>

        {skills.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">{section.category}:</h3>
            <div className="flex flex-wrap gap-6">
              {section.icons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                  style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title={`Learn more about ${icon.alt}`}
                >
                  <img src={icon.src} alt={icon.alt} className="max-h-12 max-w-full" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Skills;
