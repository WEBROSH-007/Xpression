import React from 'react';

const PrinciplesSection = () => {
  const principles = [
    {
      id: '01',
      title: 'Leading with Originality',
      icon: '🎯',
      description: 'We lead with originality, forging our own path instead of following the crowd.',
      delay: 'delay-0',
    },
    {
      id: '02',
      title: 'Intentional Design',
      description: 'We design with purpose and intention, not merely to follow trends.',
      delay: 'delay-100'
    },
    {
      id: '03',
      title: 'Embracing Uniqueness',
      description: 'We aim to make every design unique, standing out in a sea of sameness.',
      delay: 'delay-200'
    },
    {
      id: '04',
      title: 'Intelligent Aesthetics',
      description: "Design isn't just about appearance, it's about seamless functionality.",
      delay: 'delay-0'
    },
    {
      id: '05',
      title: 'Passion Drives Us',
      description: 'Our motivation stems from our passion for design, not solely financial gain.',
      delay: 'delay-100'
    },
    {
      id: '06',
      title: 'Prioritizing Understanding',
      description: "We invest time in comprehending our clients' needs and visions.",
      delay: 'delay-200'
    }
  ];

  return (
    <section className="min-h-screen bg-black p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-white font-light text-center mb-16">
          Our Guiding Principles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className={`principle-card group relative transform transition-all duration-300 hover:scale-105 animate-slideUp ${principle.delay}`}
            >
              {/* Background card with glow */}
              <div className="absolute inset-0 bg-gray-900 rounded-lg" />
              
              {/* Glow effect positioned behind */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg blur-xl transition-opacity duration-300 -z-10" />
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-medium">
                    {principle.title}
                  </h3>
                  <span className="text-blue-400 opacity-50">
                    {principle.id}
                  </span>
                </div>
                <p className="text-gray-400">
                  {principle.icon}
                </p>
                <p className="text-gray-400">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;