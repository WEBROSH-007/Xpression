import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
          Transforming businesses with personalized
          <br />
          strategies, cutting-edge tech, and measurable results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;