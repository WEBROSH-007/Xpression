import React from 'react';

const HubspotServices = () => {
  const services = [
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Website Design and Development",
      description: "Our HubSpot web development company creates custom websites tailored to your brand’s business goals and target audience. We have dedicated HubSpot developers who build responsive layouts, user-friendly interfaces, and adaptable designs, ensuring an engaging experience across various devices.",
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "HubSpot CMS Implementation",
      description: "AlgorithmX offers exceptional HubSpot CMS development services where we utilize HubSpot CMS for website development and maintenance that includes establishing hosting, configuring domain, and integrating advanced CMS functionalities to create, publish, and optimize content.",
      borderColor: "border-yellow-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Analytics and Reporting",
        description: "At our premier HubSpot development company, we put in place monitoring tools and software for tracking performance, conversion metrics, and user-behavior of the website. Our process includes analyzing data, generating reports, and offering suggestions on how best to improve website’s efficiency consistently.",
        borderColor: "border-white-500",
        glowColor: "shadow-white-500/50"
      },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Template Customization",
      description: "Our experienced and certified HubSpot developer modifies HubSpot templates and designs customized templates from the ground up to cater to specific functionality and design specifications, adjusting styles, modules, and layouts to align with your brand’s identity and content approach.",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Conversion Rate Optimization (CRO)",
      description: "We use methods such as A/B testing, heat mapping, and analysis to identify and execute strategies to increase conversion rates of your website at our HubSpot development agency, which includes improving elements like landing page, form, call-to-action (CTA) and user journey, ultimately heightening conversion rates.",
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Search Engine Optimization (SEO)",
        description: "AlgorithmX’s HubSpot development services employ SEO strategies to improve website visibility and boost rankings on search engine results (SERPs) by optimizing on-page elements, conducting keyword research, and structuring content for search engines.",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Content Strategy and Creation",
        description: "We offer custom HubSpot development solutions where we craft a content plan that resonates with your business’s target audience and goals. Part of it involves producing engaging content like blog posts, articles, infographics, and videos to educate, draw, and convert your website visitors.",
        borderColor: "border-orange-500",
        glowColor: "shadow-orange-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Integration with HubSpot CRM and Marketing Tools",
        description: "Our HubSpot CRM development services include integrating the website with HubSpot's CRM and marketing automation software to simplify lead generation, nurturing, and customer relationship management, ensuring improved coordination between Marketing and sales teams resulting in seamless data synchronization.",
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-2">HUBSPOT DEVELOPMENT</h1>
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

export default HubspotServices;