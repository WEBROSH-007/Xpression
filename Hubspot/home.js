import React from 'react';

const HubSpotSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        HubSpot
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
        AlgorithmX utilizes its HubSpot development services to design websites that are not only visually attractive but also highly efficient in attracting leads, engaging customers. and fueling business expansion.
        </p>
      </div>
    </section>
  );
};

export default HubSpotSection;