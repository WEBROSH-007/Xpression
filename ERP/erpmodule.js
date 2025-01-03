import React from 'react';

const ModuleCard = ({ title, description, imageSrc }) => (
  <div className="p-6 bg-black relative">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={imageSrc || "/api/placeholder/48/48"}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="absolute bottom-0 left-6 right-6 h-px bg-gray-800"></div>
  </div>
);

const ERPModules = () => {
  const modules = [
    {
      title: 'Manufacturing',
      description: 'The manufacturing module helps with organizing and improving all aspects of the manufacturing process, including handling bills, managing costs, planning production schedules, and maintaining quality standards.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
      title: 'Marketing and Sales',
      description: 'We create the best ERP for service companies as our marketing and sales module allows to handle and automate sales and marketing functions such as tracking opportunities, managing leads, and overseeing campaigns.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
      title: 'Supply Chain Management',
      description: 'AlgorithmX builds a powerful supply chain management module that helps in optimizing several supply chain elements like logistics, inventory control, forecasting demand, and purchasing.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
      title: 'Finance and Accounting',
      description: 'With our best ERP for financial services, we assist companies in carrying out transactions, creating financial statements and tracking costs, resulting in improved financial precision, streamlined accounting processes, and minimized errors.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
      title: 'Customer Relationship Management',
      description: 'With our ERP development services, we empower organizations to analyze their customers\' interactions, manage customer information, and automate marketing and sales activities using customer relationship management module that offers a coherent environment to boost sales and optimize customer focused operations.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
      title: 'Analytics',
      description: 'Our leading ERP development company develops ERP analytics module that helps businesses better understand their performances and operations. This module is employed by conducting in-depth analysis, creating tailored reports, and visually presenting diverse data to make better business decisions.',
      imageSrc: "/api/placeholder/48/48" // Replace with actual image path
    },
    {
        title: 'Inventory',
        description: 'Companies can easily manage their inventory across various sites, analyze costs, and automate transactions using the inventory module as it offers a platform to prevent shortages and manage excess inventory, enhancing precision and streamlining inventory operations.',
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      {
        title: 'Human Resources',
        description: 'Our ERP development company, AlgorithmX builds ERP for professional services, which involves creating HR modules that enable businesses to manage employee data, automate HR responsibilities, and monitor performance indicators, lowering administrative burdens, accelerating HR operations and efficiency.',
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      {
        title: 'Distribution',
        description: 'The distribution module allows companies to monitor deliveries, streamline invoicing procedures, and handle customer requests. it offers a platform with user-friendly interface for boosting interaction and visibility at various phases of distribution process.',
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      {
        title: 'Purchasing',
        description: 'Our ERP development services ease the procurement process of companies with the help of the ERP purchasing module. This module includes generating purchase orders, evaluating supplier performance, and automating the workflow.',
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      {
        title: 'Business Intelligence',
        description: "The ERP software's business intelligence module enables businesses to produce real-time reports, analyze data, and make better decisions, assisting companies to analyze information from different sources by means of BI Platforms, produce dashboards and reports, and make more data-driven decisions.",
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      {
        title: 'Chatbots and virtual assistance',
        description: 'AlgorithmX’s ERP development services create Virtual assistants that automate tasks like sending inventory alerts and updating customers. Also, Chatbots help users navigate through ERP systems and support in tasks such as employee onboarding.',
        imageSrc: "/api/placeholder/48/48" // Replace with actual image path
      },
      

  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
    className="mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
    style={{ top: '-20px' }}>
    MODULIFY
  </span>
</div>

        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            BUILDING PREMIUM
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            ERP MODULES
          </h3>
        </div>
      </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPModules;