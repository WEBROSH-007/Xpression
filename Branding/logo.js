import React from 'react';

const LogoTypes = () => {
  const logoTypes = [
    { title: 'Monogram Logos', id: 'monogram' },
    { title: 'Wordmarks', id: 'wordmarks' },
    { title: 'Pictorial Marks', id: 'pictorial' },
    { title: 'Abstract Logo', id: 'abstract' },
    { title: 'Mascots Logo', id: 'mascots' },
    { title: 'The Combination Mark', id: 'combination' },
    { title: 'The Emblem', id: 'emblem' },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-blue-500 mb-4">WE ARE AWESOME</p>
        <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
          TYPE OF LOGOS
        </h1>
        {/* Blue line under TYPE OF LOGOS */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
        <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          AlgorithmX offers exceptional logo design services creating diverse designs, including wordmarks, lettermarks, brandmarks, combination marks, and emblem logos tailored to perfectly represent your unique brand identity.
        </p>
      </div>

      {/* Logo Types List */}
      <div className="max-w-4xl mx-auto">
        {logoTypes.map((type) => (
          <div
            key={type.id}
            className="relative py-6  transition-colors duration-300 group"
          >
            <h2 className="text-xl md:text-2xl font-medium">{type.title}</h2>
            {/* Gradient line - pink to transparent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-transparent" style={{ width: '40%' }}></div>
            {/* White line for remaining width */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTypes;