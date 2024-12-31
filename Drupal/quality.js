import React from 'react';

const MarketingCard = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center p-4 md:p-8">
      {/* Container for card with max-width */}
      <div className="w-full max-w-3xl">
        {/* Quality Guaranteed text aligned left */}
        <h2 className="text-2xl md:text-4xl font-light tracking-wider text-white mb-0">
          QUALITY GUARANTEED
        </h2>
        
        {/* Main content container with relative positioning */}
        <div className="relative pt-4 md:pt-8">
          {/* Overlapping header text */}
          <div className="absolute -top-4 -left-4">
            <span className="block bg-black text-white text-3xl md:text-4xl font-bold px-2 py-1">
              COMPLIANT &
            </span>
            <span className="block bg-black text-white text-3xl md:text-4xl font-bold px-2 py-1">
              Worth Every Penny
            </span>
          </div>

          {/* Content box with border */}
          <div className="border-8 border-gray-900 p-6 md:p-8 bg-black ">
            <p className="text-gray-300 text-lg md:text-xl">
              AlgorithmX is committed to exploring all possibilities to deliver top-notch and innovative Drupal development services customized to suit all your requirements and surpass your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
