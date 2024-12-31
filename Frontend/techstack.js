import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      title: 'Core Technologies',
      items: [
        { name: 'HTML5', icon: '/api/placeholder/24/24' },
        { name: 'CSS3', icon: '/api/placeholder/24/24' },
        { name: 'JavaScript', icon: '/api/placeholder/24/24' },
        { name: 'SCSS', icon: '/api/placeholder/24/24' },
        { name: 'TypeScript', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'Angular', icon: '/api/placeholder/24/24' },
        { name: 'Next', icon: '/api/placeholder/24/24' },
        { name: 'React', icon: '/api/placeholder/24/24' },
        { name: 'Vue', icon: '/api/placeholder/24/24' },
        { name: 'Nuxt', icon: '/api/placeholder/24/24' },
        { name: 'Svelte', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Styling & UI Management',
      items: [
        { name: 'Bootstrap', icon: '/api/placeholder/24/24' },
        { name: 'Material-UI', icon: '/api/placeholder/24/24' },
        { name: 'Tailwind CSS', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Package Manager',
      items: [
        { name: 'npm', icon: '/api/placeholder/24/24' },
        { name: 'pnpm', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Version Control',
      items: [
        { name: 'GIT', icon: '/api/placeholder/24/24' },
        { name: 'GITHUB', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Development Environment',
      items: [
        { name: 'Visual Code', icon: '/api/placeholder/24/24' },
        { name: 'Visual Studio IDE', icon: '/api/placeholder/24/24' },
        { name: 'Dreamweaver', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'APIs & Data Handling',
      items: [
        { name: 'Axios', icon: '/api/placeholder/24/24' },
        { name: 'GraphQL', icon: '/api/placeholder/24/24' },
        { name: 'Restful-APIs', icon: '/api/placeholder/24/24' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="text-center mb-12">
        <p className="text-blue-500 mb-2">WE LEVERAGE</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">TECH STACK</h1>
        <h2 className="text-3xl md:text-4xl font-bold">EXPERTISE</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div key={index} className="mb-8 md:mb-12 pb-8 border-b border-gray-800">
            <div className="grid grid-cols-[1fr,2fr] md:grid-cols-[200px,1fr] gap-4 items-start">
              <h3 className="text-lg md:text-xl text-[#89CFF0]">{tech.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-gray-900 rounded-lg p-3 flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-6 h-6"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;