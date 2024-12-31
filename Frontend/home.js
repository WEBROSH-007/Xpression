import React from 'react';

const FrontEndSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        Front-end Development
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
        AlgorithmX’s offers superior front end development services where we create aesthetically pleasing and highly functional websites and seamless web applications tailored to your business requirements using HTML, JavaScript, and CSS and advanced frameworks like React and Angular, providing an unparalleled browsing experience.
        </p>
      </div>
    </section>
  );
};

export default FrontEndSection;