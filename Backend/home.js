import React from 'react';

const BackEndSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        Back-end Development
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
        Discover AlgorithmX’s top-notch back end development services where a dedicated back end developer leverages programming languages like Java, Python, Node.js, or Ruby to create secure, reliable and scalable applications with effortless integration and optimized performance.
        </p>
      </div>
    </section>
  ); 
};

export default BackEndSection;