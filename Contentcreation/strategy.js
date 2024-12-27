import React from 'react';

const StrategyGrid = () => {
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center justify-center min-h-screen">
      {/* Header Text */}
      <div className="text-center mb-24 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl sm:text-7xl md:text-9xl font-bold text-gray-600/20 select-none">
            ALIGNED
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className="text-2xl md:text-3xl text-white mb-2">
            SYNERGIZED WITH
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            YOUR STRATEGY
          </h3>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Lead Generation</span>
            <img src="/api/placeholder/32/32" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Sales Enablement</span>
            <img src="/api/placeholder/32/32" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Nurturing Customers</span>
            <img src="/api/placeholder/32/32" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Social Engagement</span>
            <img src="/api/placeholder/32/32" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>

        {/* Bottom Row - Centered and Spaced */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Thought Leadership</span>
            <img src="/api/placeholder/32/32" alt="Thought Leadership" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Conversions</span>
            <img src="/api/placeholder/32/32" alt="Conversions" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 hover:bg-gray-700 transition-colors duration-300">
            <span className="text-sm">Search Engine Optimization</span>
            <img src="/api/placeholder/32/32" alt="SEO" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyGrid;
