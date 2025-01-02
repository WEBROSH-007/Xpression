'use client'
import React, { useState } from 'react';
import './style.css'
const crmServices = [
  {
    id: 1,
    title: 'CRM CONSULTING',
    icon: '🏆',
    content: `Our expert CRM developers and consultants assist you every step of the way 
              during the CRM implementation process. Our team works closely with you from 
              choosing the right platform to developing systems and optimizing performance. 
              In order to develop a tailored approach, our professionals examine your 
              business's processes, environment, and obstacles as part of our CRM system 
              development services.`
  },
  {
    id: 2,
    title: 'CRM MIGRATION',
    icon: '📋',
    content: 'As a leading CRM software development company, we handle all stages of the CRM migration process, including risk assessment, testing, and customizing data import methodologies. Using our CRM development services, we upgrade your customer experience and replace high-maintenance software, improving overall business performance.'
  },
  {
    id: 3,
    title: 'CRM DESIGN',
    icon: '⚙️',
    content: 'We are aware of the significance of developing a system that is user-friendly, engaging and helps drive business goals. AlgorithmX’s system design CRM development services are dedicated to assisting businesses develop a visually appealing CRM system that improves user satisfaction and enhances productivity.'
  },
  {
    id: 4,
    title: 'CRM INTEGRATION',
    icon: '📊',
    content: 'At our premier CRM development company, we boost your business with our CRM integration services, which allow seamless communication between other business tools and your CRM software fully utilizing their functionalities. Our dedicated CRM developers ensure safe integration of internal and external systems with your CRM system to facilitate smooth information flow. Moreover, we also offer automatic data updates to merge your data sources into one solution.'
  },
  {
    id: 5,
    title: 'CRM SOFTWARE DEVELOPMENT',
    icon: '💻',
    content: 'AlgorithmX’s CRM software development services provide personalized and accurate solutions to meet our diverse business needs, creating custom CRM software using powerful analytical tools enabling you to study customer data and uncover valuable information. We make businesses prosper by furnishing resources for intelligent decision-making and enhanced progress.'
  },
  {
    id: 6,
    title: 'CRM IMPLEMENTATION',
    icon: '🚀',
    content: 'Experts at our custom CRM development agency offer perfect CRM implementation solutions. Our customized CRM implementation services help achieve your business goals, improve efficiency, and boost customer interaction. Whether it’s on-premises or cloud deployments, we excel at providing a smooth implementation service.'
  },
  {
    id: 7,
    title: 'Mobile CRM Solutions',
    icon: '📱',
    content: 'Being the best CRM development company in USA, our mobile CRM tools enable businesses to manage customer interactions, tasks, and sales on the go. Our representatives are available 24/7 on their mobile phones to view customer information, carry out CRM tasks, and make updates. No matter the location, businesses can stay efficient and connected through our tailored mobile CRM services.'
  },
  {
    id: 8,
    title: 'CRM Customization',
    icon: '🛠️',
    content: 'AlgorithmX focuses on business development with CRM systems personalized to align with your business needs. Our CRM developers perform modifications in reporting, data gathering, and other key areas to elevate your business operations with custom CRM solutions that come with several features helping in boosting sales and attaining customer loyalty.'
  },
];

const CRMServices = () => {
  const [hoveredService, setHoveredService] = useState(crmServices[0]);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-6xl md:text-5xl font-light text-center mb-8 md:mb-16">CRM Services</h1>
      
      {/* Main container */}
      <div className="max-w-6xl mx-auto">
        {/* Services list - horizontal scroll on mobile, vertical on desktop */}
        <div className="overflow-x-auto md:overflow-x-visible mb-8 md:mb-0 your-scrollable-div">
  <div className="flex md:flex-col whitespace-nowrap md:whitespace-normal md:w-1/3 md:float-left md:pr-4 md:border-r md:border-green-500 md:h-96 md:overflow-y-auto">
    {crmServices.map((service) => (
      <div
        key={service.id}
        className={`inline-block md:block p-2 md:p-4 mx-1 md:mx-0 md:mb-2 cursor-pointer transition-all duration-300 hover:bg-black hover:border-green-500 hover:shadow-[0_0_10px_#00ff00] rounded min-w-[100px] md:min-w-0 ${
          hoveredService.id === service.id ? 'border-green-500 shadow-[0_0_5px_#00ff00]' : 'border-black'
        } border`}
        onMouseEnter={() => setHoveredService(service)}
        onClick={() => setSelectedService(service)}
      >
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <span className="mb-1 md:mb-0 md:mr-2">{service.icon}</span>
          <span className="font-medium text-xs md:text-base text-center md:text-left whitespace-pre-wrap md:whitespace-normal w-full">
            {service.title.split(' ').join('\n')}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Content area - desktop */}
        <div className="hidden md:block md:w-2/3 md:float-right md:pl-8">
          <div className="p-10 border border-green-500 rounded h-[400px]">
            <h2 className="text-3xl mb-6">{hoveredService.title}</h2>
            <p className="text-gray-400 leading-relaxed">
              {hoveredService.content}
            </p>
          </div>
        </div>

        {/* Content area - mobile (shows on click) */}
        {selectedService && (
          <div className="block md:hidden mt-4">
            <div className="p-6 border border-green-500 rounded">
              <h2 className="text-2xl mb-4">{selectedService.title}</h2>
              <p className="text-gray-400 leading-relaxed">
                {selectedService.content}
              </p>
            </div>
          </div>
        )}

        {/* Clearfix for floated elements */}
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default CRMServices;
