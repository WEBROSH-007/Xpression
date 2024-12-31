import React from 'react';

const MagentoServices = () => {
  const services = [
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Customization and Development",
      description: "One essential part of our custom Magento development services is personalizing themes, modules, workflows, and extensions to match your Magento eCommerce store’s specific requirements.",
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Extension Integration and Development",
      description: "At our Magento development agency, we utilize the wide range of plugins and extensions that Magento’s ecosystem offers to enhance functionality as it is crucial to integrate these extensions and develop custom plugins to increase the capabilities of the platform.",
      borderColor: "border-yellow-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Performance Optimization",
        description: "As a dedicated Magento development company, we ensure that the Magento store runs smoothly to offer a flawless user experience which involves optimizing everything from images and codes to databases and caching systems to boost the page’s loading speed and enhance overall website efficiency.",
        borderColor: "border-white-500",
        glowColor: "shadow-white-500/50"
      },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Security Enhancements",
      description: "In Magento ecommerce website development, AlgorithmX prioritizes the significance of security, so we apply safety measures like timely security audits, SSL certificates, and secure payment gateways to avoid breach of security and protect clients’ data.",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Responsive Design and Mobile Optimization",
      description: "Since mobile shopping is on the rise, it is vital to have a responsive and mobile-friendly Magento store that offers a seamless online shopping experience to users. Our expert Magento development services include creating and designing themes that adjust smoothly on any resolution or screen size.",
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Integration with Third-Party Systems",
        description: "As numerous businesses depend on third-party systems like CRM, inventory management software and ERP, our certified Magento developer integrates Magento with these systems. This helps synchronize datasets, streamline operations and enhance efficiency and accuracy.",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Migration and Upgrades",
        description: "As a leading Magento development company, we specialize in migration from Magento 1 to Magento 2 and transitioning to newer Magento versions. We provide professional assistance in meticulously carrying out the whole process, safeguarding data security, and reducing downtime.",
        borderColor: "border-orange-500",
        glowColor: "shadow-orange-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Support and Maintenance",
        description: "After launching the Magento store, AlgorithmX provides continuous assistance in maintenance and upkeep of your ecommerce Magento store by resolving issues in time and performing routine updates to guarantee its smooth functioning.",
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <p className="text-lg sm:text-sm md:text-lg font-light text-blue-600 mb-2"> OFFERINGS</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-2">MAGENTO DEVELOPMENT</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">SERVICES</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 p-14
                         border ${service.borderColor} rounded-lg bg-black
                         shadow-lg ${service.glowColor}
                         transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <img 
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagentoServices;