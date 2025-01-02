import React from 'react';

const CRMOutcomes = () => {
  const outcomes = [
    {
      icon: "/api/placeholder/50/50",
      title: "Faster sales cycles",
      description: "Streamlines your sales activities by up to 30% with automation."
    },
    {
      icon: "/api/placeholder/50/50",
      title: "Lead volume growth",
      description: "Enables you to manage multi-channel marketing campaigns simultaneously and limitlessly."
    },
    {
      icon: "/api/placeholder/50/50",
      title: "Service Workload Reduction",
      description: "Empowers your customer support with productive self-assistance tools."
    },
    {
      icon: "/api/placeholder/50/50",
      title: "Enhanced Conversions",
      description: "Authorizes your business with tailored marketing and dynamic customer segmentation across various lifecycle stages."
    },
    {
      icon: "/api/placeholder/50/50",
      title: "Customer Retention",
      description: "Increases customer retention rate by analyzing interactions and sales records for personalized customer engagement."
    },
    {
      icon: "/api/placeholder/50/50",
      title: "Quick Service",
      description: "Makes quick access to extensive customer information easy and convenient through intelligent workflow automation."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
    className="mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
    style={{ top: '-20px' }}>
      OUTCOMES
  </span>
</div>

        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            AFTER CRM
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            IMPLEMENTATIONS RESULTS
          </h3>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="border border-gray-800 p-8 w-full h-[300px] text-center flex flex-col items-center"
            >
              <img 
                src={outcome.icon} 
                alt={outcome.title}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-2xl font-bold mb-8">{outcome.title}</h3>
              <p className="text-gray-400 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMOutcomes;