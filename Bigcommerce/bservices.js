import React from 'react';

const BigcommerceServices = () => {
  const services = [
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Custom BigCommerce development",
      description: "We offer BigCommerce store development services focused on creativity and functionality, resulting in personalized success of brands. By leveraging a customized approach, we create attractive designs and strong solutions that transform website visitors into regular customers.",
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Headless BigCommerce development",
      description: "AlgorithmX is a leading BigCommerce development company in USA where we elevate your brand by incorporating high-quality vendors with crucial e-commerce features, thereby enabling sales across platforms like self-service kiosks, websites, mobile apps, and integrated commerce systems.",
      borderColor: "border-yellow-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "BigCommerce UI/UX design",
        description: "Partner with our best BigCommerce website development agency to brighten up your online store using top-notch BigCommerce UI/UX designs that inspire and encourage customers to buy from you. Our expert BigCommerce developers create compelling interfaces that effortlessly lead customers, offering a memorable user journey on all devices.",
        borderColor: "border-white-500",
        glowColor: "shadow-white-500/50"
      },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Migration and Replatforming",
      description: "Being a top BigCommerce web development agency, our migration solutions focus on making the transition smooth and efficient while minimizing disruptions and maximizing improvements. Our team is expert in handling tasks such as data migration, product transfer, SEO preservation, and customization.",
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      iconSrc: "/api/placeholder/48/48",
      title: "Testing and Quality Assurance",
      description: "We perform thorough testing of BigCommerce websites as part of our BigCommerce development services to ensure the highest functionality and buyer satisfaction, establishing benchmarks through in-depth analysis of checkout processes and evaluation of payment gateways for a memorable user experience.",
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/50"
    },
    {
        iconSrc: "/api/placeholder/48/48",
        title: "Performance Optimization",
        description: "Our excellent ecommerce solutions with BigCommerce development include fine-tuning every element to achieve peak efficiency and lightning-fast responsiveness, enhancing your digital platforms. We ensure swift and seamless interactions by conducting in-depth analysis and simplifying processes, resulting in optimized load times and database inquiries.",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Ongoing Maintenance & Support",
        description: "As the top BigCommerce web development agency, we provide constant support to ensure the reliability, security, and outstanding performance of BigCommerce solutions with a main focus on consistent monitoring and frequent updates, thus enhancing user satisfaction.",
        borderColor: "border-orange-500",
        glowColor: "shadow-orange-500/50"
      },
      {
        iconSrc: "/api/placeholder/48/48",
        title: "Mobile App Development",
        description: "With AlgorithmX’s dynamic mobile apps, your shopping encounters become more fascinating, transcending simple transactions. Our BigCommerce app development services guarantee swift interactions from browsing to checkout on any device.",
        borderColor: "border-blue-500",
        glowColor: "shadow-blue-500/50"
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-2">BIGCOMMERCE DEVELOPMENT</h1>
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

export default BigcommerceServices;