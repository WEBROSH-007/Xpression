import React from 'react';

const LineSVG = () => (
  <svg width="48" height="2" viewBox="0 0 48 2" className="transition-opacity duration-300">
    <line 
      x1="0" 
      y1="1" 
      x2="48" 
      y2="1" 
      stroke="#EF4444" 
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const WordpressFeatures = () => {
  const features = [
    {
      title: 'Mobile',
      subtitle: 'Responsive',
      description: 'WordPress excels in being highly responsive as it easily adjusts to different devices stays user-friendly without any hitches.'
    },
    {
      title: 'Plenty of',
      subtitle: 'Widgets',
      description: 'Custom WordPress widgets make it easy for users to interact, providing smooth integration on any part of the webpage.'
    },
    {
      title: 'Bulk',
      subtitle: 'Plugin',
      description: 'WordPress offers unlimited features through their wide collection of plugins which are very easy to install and use.'
    },
    {
      title: 'SEO',
      subtitle: 'Friendly',
      description: 'WordPress offers some SEO plugins that aid in quickly boosting the rankings and visibility of your website on specific search engines.'
    },
    {
      title: 'Upgrade',
      subtitle: '&Support',
      description: "The WordPress CMS alerts you via notifications about any new versions or plugins that are released, ensuring that your website's current functionality will not be affected by these updates."
    },
    {
      title: 'Theme',
      subtitle: 'Customization',
      description: 'We are experts in offering custom WordPress development services as it is simple to handled and modify themes since their design and content are quite flexible.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
         <div className="max-w-7xl mx-auto  mb-16">
      <h1 className="text-4xl md:text-7xl font-bold text-center mb-4">
        Why should you
      </h1>
      <h1 className="text-4xl md:text-7xl font-bold text-center mb-16">
        Choose WordPress?
      </h1>
      
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3">
          {/* Vertical Borders */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gray-700"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gray-700"></div>
          
          {/* Horizontal Border */}
          <div className="absolute top-1/2 w-full h-px bg-gray-700"></div>
          
          {/* Content */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 relative"
            >
              <div className="flex flex-col space-y-0">
                <h2 className="text-2xl text-start font-semibold">
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-full">
                    <LineSVG />
                  </div>
                  <p className="text-2xl text-white-500   duration-300 group-hover:-translate-x-14">
                    {feature.subtitle}
                  </p>
                </div>
                <p className="text-gray-400  ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-1 divide-y divide-gray-700">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group py-8 relative"
            >
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-semibold">
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
                    <LineSVG />
                  </div>
                  <p className="text-xl text-gray-300 transition-transform duration-300 group-hover:-translate-x-12">
                    {feature.subtitle}
                  </p>
                </div>
                <p className="text-gray-400 transition-transform duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressFeatures;