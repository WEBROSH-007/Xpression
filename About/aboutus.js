import React from 'react';

const Aboutus = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-gray-300 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Introduction
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed">
          Welcome to AlgorithmX, where technology meets excellence. As a leading end-to-end digital agency, 
          we are dedicated to transforming your business with a personalized approach as we align your business 
          goals with the right strategies, utilizing the latest tools and technologies to deliver measurable results.
       
        
        
          We specialize in creating strong brand identities, captivating visuals, and engaging content. 
          We develop user-friendly apps and implement strategies to improve online visibility and audience engagement. 
          Additionally, we offer targeted advertising, optimization techniques, and comprehensive marketing 
          campaigns to foster fast business growth.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;