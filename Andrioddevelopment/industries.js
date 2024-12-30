import React from 'react';

const IndustriesGrid = () => {
  const industries = [
    'Healthcare', 'Logistics', 'Education',
    'Retail', 'Finance', 'Real Estate',
    'Restaurant', 'Government', 'Travel',
    'Social Network', 'Aviation', 'Agriculture'
  ];

  return (
    <div className="bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Industries
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Designing Customized
          </p>
          <p className="text-gray-300 text-xl md:text-2xl font-semibold">
            Android Solutions
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative border border-blue-500 rounded-lg p-3 md:p-4
                        bg-black/80 hover:bg-black/60 transition-all duration-300
                        flex  "
            >
              <span className="text-white text-sm md:text-xl font-medium">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;