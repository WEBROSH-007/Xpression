import React from 'react';

const FlutterSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        Flutter App Development
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
        Unlock the potential of the flexible and innovative platform Flutter for app development! Create gorgeous, and high-performance Flutter iOS and Android mobile apps with a unified codebase that simplifies workflow and increases productivity.
        </p>
      </div>
    </section>
  ); 
};

export default FlutterSection;