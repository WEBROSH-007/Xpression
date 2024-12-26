import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Brand Strategy',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-red-600 to-orange-500',
      items: [
        'BRAND STORY',
        'BRAND NAMING',
        'BRAND DNA',
        'TAGLINE DEVELOPMENT',
        'BRAND POSITIONING',
        'TONE OF VOICE',
        'UNIQUE VALUE PROPOSITION',
        'TARGET AUDIENCE'
      ]
    },
    {
      title: 'Packaging Design',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      items: [
        'CREATIVE IDEATION',
        'COLOUR PAIRINGS & COMBINATIONS',
        'CRAFTING INNER & OUTER PACKAGING',
        'PRODUCT INFORMATION GUIDES',
        'LEAFLETS/INSERTS',
        'ADAPTING APPROVED DESIGNS TO VARIOUS LAYOUTS'
      ]
    },
    {
      title: 'Brand Identity',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-teal-400 to-blue-500',
      items: [
        'LOGO DESIGN',
        'BRAND COLOUR PALETTE',
        'TYPOGRAPHY',
        'GRAPHICAL ASSETS',
        'SIGNAGE & WAYFINDING',
        'BRAND BOOK',
        'BROCHURE DESIGN',
        'MENU DESIGN'
      ]
    },
    {
      title: 'Brand Naming & Tagline',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-purple-600 to-purple-900',
      items: [
        'CREATIVE TERRITORIES',
        'BRAND NAMES',
        'RATIONALES',
        'DUE DILIGENCE'
      ]
    },
    {
      title: 'Illustration',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-purple-900 to-blue-600',
      items: [
        'DIGITAL WALL ART',
        'WEBSITE GRAPHICS',
        'CHARACTER DESIGN',
        'INFOGRAPHICS',
        'ICON DESIGN'
      ]
    },
    {
      title: 'Brand Videos',
      image: '/images/brand.png', // Replace with your image path
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      items: [
        'LOGO ANIMATION',
        'BRAND EXPLAINER VIDEOS',
        'MOTION GRAPHICS',
        'SOCIAL MEDIA SHORTS',
        'CAMPAIGN VIDEOS'
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SERVICES" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="mb-8 text-8xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none" style={{ top: '-80px' }}>
              SERVICES
            </span>
          </div>
          
          {/* Main titles */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
              BRANDING SERVICES
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-white">
              WE OFFER
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="space-y-4 ">
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 "
                />
                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                {/* Service Items */}
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-white text-sm md:text-base font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
