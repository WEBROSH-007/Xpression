import React from 'react';

const AppGrid = () => {
  const services = [
    { title: 'Mobile banking, billing apps, wallets', icon: '💳' },
    { title: 'Patient and hospital apps', icon: '🏥' },
    { title: 'Telehealth apps', icon: '❤️' },
    { title: 'Messaging and VoIP apps', icon: '💬' },
    { title: 'IPTV and SVOD apps', icon: '📺' },
    { title: 'mCommerce apps', icon: '🛍️' },
    { title: 'Field service and mobile BI', icon: '📊' },
    { title: 'Booking and ticketing apps', icon: '🎟️' },
    { title: 'Augmented reality apps', icon: '🔮' },
    { title: 'Lending apps', icon: '💰' },
    { title: 'Insurance apps', icon: '🛡️' },
    { title: 'Investment apps', icon: '📈' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-600/20 select-none">
            MULTIFACETED
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className="text-2xl md:text-5xl text-white mb-2">
            VARIETY OF APP
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            WE DEVELOP
          </h3>
        </div>
      </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-white-200 p-2 md:p-6 flex flex-col items-center justify-center text-center hover:border-gray-500 transition-colors duration-300 "
            >
              <div className="text-3xl md:text-4xl mb-2">
                {service.icon}
              </div>
              <h3 className="text-xs md:text-lg font-medium px-1">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppGrid;