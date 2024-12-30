'use client';
import React from 'react';
import './style.css';

const TechGrid = () => {
  const technologies = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
      title: "BIG DATA",
      isGrey: false,
      animationClass: "slide-in-left"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      ),
      title: "INTERNET OF THINGS",
      isGrey: true,
      animationClass: "fade-in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      title: "BLOCKCHAIN",
      isGrey: false,
      animationClass: "slide-in-right"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="19" cy="12" r="2"/>
          <circle cx="5" cy="12" r="2"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
        </svg>
      ),
      title: "AUGMENTED REALITY (AR)",
      isGrey: true,
      animationClass: "slide-in-left"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
        </svg>
      ),
      title: "VIRTUAL REALITY (VR)",
      isGrey: false,
      animationClass: "fade-in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      title: "ARTIFICIAL INTELLIGENCE",
      isGrey: true,
      animationClass: "slide-in-right"
    }
  ];

  return (
    <>

      <div className="min-h-screen bg-black p-8">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 relative ">
        {/* Background "SCALABLE" text */}
        <div className=" absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
  {/* "ADVANCED" Text */}
  <span
    className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
   
  >
    ADVANCED
  </span>
  {/* "TECHNOLOGIES" Text */}
  <span
    className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
  >
    TECHNOLOGIES
  </span>
</div>


        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white  ">
            WE'RE
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            SKILLED IN
          </h3>
        </div>
      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className={`
                  ${tech.animationClass}
                  ${tech.isGrey ? 'bg-gray-800' : 'bg-black'}
                  w-full h-60 p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center
                  
                `}
              >
                <div className="text-blue-400 mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-white text-center text-sm font-bold">
                  {tech.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechGrid;