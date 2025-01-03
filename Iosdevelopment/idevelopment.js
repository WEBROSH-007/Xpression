import React from 'react';

const services = [
  {
    title: "App Development Consultation",
    description: "Our team of skilled iOS app developers is here to assist businesses in evaluating if iOS really fits their specific requirements, guide them on the best technical stack suitable for iOS app development, and recommend certain businesses based on their unique aspects to go for iOS apps.",
    image: "/path/to/consultation-image.png", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "iOS UX/UI Design",
    description: "iOS mobile applications are known for their engaging and memorable designs that are tailored to match user expectations in the Apple ecosystem. As a committed iOS app development company, we focus on designing long-lasting and impactful user experiences that are unique to your brand.",
    image: "/path/to/design-image.png", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Custom iOS App Development",
    description: "Our iOS app developers specialize in creating personalized, futuristic, and user-friendly iOS applications that are scalable, and cater to entrepreneurs and businesses across various industries.",
    image: "/path/to/custom-dev-image.png", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "iOS Software Testing",
    description: "As a dedicated iOS app development company, we put security, reliability, and performance first in our iOS app development process, creating glitch-free and hack-proof applications by combining manual and AI-driven automated testing mechanisms.",
    image: "/path/to/testing-image.png", // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Multi-platform Deployment",
    description: "At AlgorithmX, we design custom mobile iOS apps that can be used on any Apple device, ensuring your product or service touches all platforms your customers are active at, and your brand reaches its potential clients.",
    image: "/path/to/deployment-image.png", // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Support & Maintenance",
    description: "Our iOS mobile app development team is available 24*7 to promptly address issues and ensure smooth functioning of your business. We focus on keeping the iOS application stable and reliable at all times providing ultimate customer satisfaction.",
    image: "/path/to/support-image.png", // Replace with the actual path
    alt: "Support Icon",
  },
];

const IosServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
          iOS App
        </h1>
        <h2 className="text-2xl sm:text-5xl font-light text-center mb-12">
          Development Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black rounded-lg p-6 hover:bg-zinc-800 border border-zinc-800 group"
            >
              <img 
                src={service.image} 
                alt={service.alt} 
                className="h-12 w-12 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IosServicesGrid;
