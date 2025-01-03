import React from 'react';
import './style.css'
const BackWebDevServices = () => {
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
      title: 'UX/UI Design',
      description: 'In our back end development path, we study the target audience, and create user-friendly journeys followed by implementing an elegant interface.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path d="M12 3L3 9L12 15L21 9L12 3Z" strokeWidth="2"/>
          <path d="M3 15L12 21L21 15" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" strokeWidth="2"/>
        </svg>
      ),
      title: 'Architecture',
      description: 'AlgorithmX’s back end development solution architects are responsible for planning components, selecting right technology for a project and aligning them with the APIs.'
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
      title: 'Front-End Development',
      description: 'Our experienced back end web developers leverage JavaScript frameworks, such as Next, Meteor, React, Angular, Vue, and Ember to implement designs.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2"/>
          <path d="M6 8h12" strokeWidth="2"/>
          <path d="M6 12h12" strokeWidth="2"/>
          <path d="M6 16h8" strokeWidth="2"/>
        </svg>
      ),
      title: 'Back-End Development',
      description: 'Our dedicated experienced back end developers build the business logic for web applications using a variety of programming languages and frameworks like .NET, Python, Node.js, Java, PHP, and Go.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path d="M12 4v4m0 12v-4m8-4h-4M4 12h4m11.84-5.84l-2.82 2.82M6.98 17.02l2.82-2.82M6.98 6.98l2.82 2.82m8.4 8.4l-2.82-2.82" strokeWidth="2"/>
        </svg>
      ),
      title: 'Integration & Testing',
      description: 'In our back end web development services, we perform thorough testing by integrating APIs to ensure seamless data synchronization providing a secure and user-friendly web solution.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" strokeWidth="2"/>
          <path d="M12 7v5l3 3" strokeWidth="2"/>
          <path d="M3.5 12h2m13 0h2M12 3.5v2m0 13v2" strokeWidth="2"/>
        </svg>
      ),
      title: 'Support & Update',
      description: 'Our leading custom back end development company, AlgorithmX, continuously and rapidly improves your website software by offering updates in a matter of days and providing new features every few weeks through streamlined DevOps practices.'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-500 mb-4">HOW WE ENSURE</p>
          <h1 className="text-4xl font-bold mb-2">FULL SCALE</h1>
          <h2 className="text-4xl font-bold">WEB DEVELOPMENT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-b from-black via-[#2a3b4e] to-black rounded-lg 
           transition-all duration-300 group hover:shadow-lg 
           hover:shadow-blue-500/20 overflow-hidden w-full h-80"

            >
              <div className="flex flex-col items-center justify-center h-full text-center ">
                <div className="animate-slideDown mb-4">
                  {service.icon}
                </div>
                <div className="animate-slideUp">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackWebDevServices;