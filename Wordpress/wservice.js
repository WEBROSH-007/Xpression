import React from 'react';

const WordPressServices = () => {
  const services = [
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Custom Theme Development",
      description: "Our WordPress development company designs appealing themes unique to your brand’s style and needs. Our best WordPress developers make layouts, graphics, and user interfaces, ensuring they work proficiently on all devices.",
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Plugin Development",
      description: "AlgorithmX’s WordPress plugin development services involve crafting custom plugins to improve WordPress’s capabilities including simple features like contact forms and super complex ones like management systems and ecommerce solutions.",
      borderColor: "border-yellow-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Website Customization",
        description: "We are a leading WordPress website development company offering custom WordPress development services to adjust plugins and themes based on your business requirements, such as refining design components, improving performance and introducing additional functionalities.",
        borderColor: "border-white-500",
        glowColor: "shadow-white-500/50"
      },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "E-commerce Solutions",
      description: "AlgorithmX excels at providing customized WordPress web solutions and developing ecommerce websites leveraging platforms such as WordPress, where we set up product listings, order management systems, and payment gateways, creating a memorable shopping experience for customers.",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "WordPress Maintenance and Support",
      description: "Being one of the top WordPress development companies, we constantly maintain WordPress sites to ensure their high performance, security, and optimization. Our support services include resolving glitches, monitoring security threats and keeping regular backups.",
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Search Engine Optimization (SEO)",
        description: "Our dedicated WordPress developer in USA uses SEO best practices to improve website visibility and rankings on search engines, which includes optimizing site layout, meta tags, content, and implementing schema markup.",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Migration and Upgrades",
        description: "We help businesses migrate from their current websites to WordPress and assist in upgrading their existing WordPress installations to the latest version. As part of our WordPress CMS development services, we specialize in transferring data, reducing downtime and ensuring compatibility.",
        borderColor: "border-orange-500",
        glowColor: "shadow-orange-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Custom Development Solutions",
        description: "AlgorithmX’s expert enterprise WordPress development services offer personalized development to cater to every client’s needs which involves creating intricate web applications using WordPress, integrating third-party systems and constructing personalized functionalities.",
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-2">WORDPRESS DEVELOPMENT</h1>
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

export default WordPressServices;