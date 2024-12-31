import React from 'react';

const ShopifyServices = () => {
  const services = [
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Shopify Store Setup",
      description: "The team at our custom Shopify development company is well experienced in characteristics of Shopify. They understand the specific needs of your business and create an online Shopify store that aligns perfectly with your brand’s objectives.",
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Shopify Apps Integration & Configuration",
      description: "AlgorithmX’s off shore Shopify web development services cover everything, from setting up payment gateways to implementing custom features, integrating third-party apps or connecting APIs.",
      borderColor: "border-yellow-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Shopify Store Design and Development",
      description: "We provide extraordinary Shopify development services for businesses by partnering with your company behind the scenes, configuring your store, and getting it market-ready without any hitches.",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Payment & Shipping Zones Set-Up",
      description: "Our premier Shopify development company assists in reducing logistics expenses and ensuring efficient order fulfillment with our shipping zones set-up service. Also, our payment system is designed to make transactions smooth and easy for customers.",
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Theme Development",
        description: "Our team of UI/UX designers and certified Shopify developers work together to offer top-notch Shopify development services with a goal of creating user-friendly, dynamic, and responsive Shopify themes tailored for your store.",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Product & Inventory Set-Up",
        description: "At our custom Shopify development agency, AlgorithmX, we provide product and inventory set-up service that grants you the ability to easily showcase your desired items in your store, seamlessly control your inventory, and effortlessly tweak and make your stock levels.",
        borderColor: "border-orange-500",
        glowColor: "shadow-orange-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Shopify SEO Implementation",
        description: "With our amazing Shopify SEO service, capture your audience’s attention and stand out from competitors while attracting a steady flow of customers.",
        borderColor: "border-white-500",
        glowColor: "shadow-white-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Shopify Migrations",
        description: "The expert professionals at our leading Shopify development company in USA ensure that your store migrates smoothly from old systems to Shopify without downtime (minimum) disruptions.",
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2">SHOPIFY DEVELOPMENT</h1>
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

export default ShopifyServices;