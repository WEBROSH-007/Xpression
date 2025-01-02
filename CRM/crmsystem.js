import React from 'react';
//import './style.css'
const CRMSystem = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
          <path d="M8 21h8" strokeWidth="2"/>
          <path d="M12 17v4" strokeWidth="2"/>
          <path d="M7 7h4" strokeWidth="2"/>
          <path d="M7 11h2" strokeWidth="2"/>
        </svg>
      ),
      title: 'CRM migration',
      description: 'Our expert CRM developer assists in the seamless transfer of your customer data and CRM to a new platform, ensuring data precision and minimizing interruptions to your business’s functioning. Additionally, our team offers training for transitioning to a new system easily.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path d="M12 3L3 9L12 15L21 9L12 3Z" strokeWidth="2"/>
          <path d="M3 15L12 21L21 15" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" strokeWidth="2"/>
        </svg>
      ),
      title: 'CRM testing',
      description: 'Our leading CRM development company thoroughly evaluates the features, efficiency, safety, and integrations of your CRM. This evaluation process provides you with details on any performance challenges, offering actionable advice for addressing thme efficiently.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
          <path d="M8 21h8" strokeWidth="2"/>
          <path d="M12 17v4" strokeWidth="2"/>
          <path d="M6 8l4 4m0-4l-4 4" strokeWidth="2"/>
          <path d="M14 8h4" strokeWidth="2"/>
          <path d="M14 12h4" strokeWidth="2"/>
        </svg>
      ),
      title: 'CRM Improvement',
      description: 'AlgorithmX offers maintenance for your CRM systems where we keep your system up to date to prevent any issues related to data consistency, accessibility, security and more. Also, we are highly reliable as we readily apply new features and make workflow adjustments as may be required.'
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-500 mb-4">OPTIMIZE YOUR</p>
          <h1 className="text-6xl ">EXISTING CRM SYSTEM</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-b from-black via-[#2a3b4e] to-black rounded-lg
           transition-all duration-300 group hover:shadow-[0px_0px_15px_5px_rgba(42,201,235,0.4)] overflow-hidden w-full h-[450px]"

            >
              <div className="flex flex-col items-center justify-center h-full text-center ">
                <div className="animate-slideDown mb-4">
                  {service.icon}
                </div>
                <div className="animate-slideUp">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-md">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMSystem;