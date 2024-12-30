import React from 'react';

const services = [
  {
    title: "React Native App Ideation & Consulting",
    description: "Even though React Native app development has its benefits for SMEs and Enterprises, it might not fit every development scenario. We are reliable developers for custom React Native app development as we closely discuss your product idea to understand and provide solutions that best suit your business goals.",
    image: "/path/to/consultation-image.png", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "App Development with React Native",
    description: "Our expertise lies in providing a custom React Native development service to fulfill all your development needs from start to finish. As a leading React Native app development company, we manage every aspect, including design, coding, testing, and launch to ensure a seamless process of bringing your app idea to life.",
    image: "/path/to/design-image.png", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "React Native Migration",
    description: "AlgorithmX offers off-shore React Native application development solutions with migration specialists who are experts in the seamless transition of an existing iOS or Android app to a cross-platform application. Our deployment experts who are experienced in leading projects, ensure a smooth user experience during your application’s expansion into mobile platforms, including web and smart devices.",
    image: "/path/to/custom-dev-image.png", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Support & Maintenance",
    description: "Our team of dedicated React Native app developers recognizes the significance of continuous upgrades and gives full support and maintenance after the product is deployed. It involves resolving errors and bugs, improving performance, and making technological updates among others.",
    image: "/path/to/testing-image.png", // Replace with the actual path
    alt: "Testing Icon",
  },
];

const NativeServicesGrid = () => {
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
            React-Native App
          </h1>
          <h2 className="text-2xl sm:text-5xl font-light text-center mb-12">
            Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index}
                className="bg-black rounded-lg p-6 hover:bg-zinc-800 border border-zinc-800 group"
              >
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="h-12 w-12 object-contain rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
  
            {/* Full-width box for the 4th item */}
            <div 
              className="bg-black rounded-lg p-6 hover:bg-zinc-800 border border-zinc-800 group lg:col-span-3 flex flex-col items-center text-center justify-center "
            >
              <img 
                src={services[3].image} 
                alt={services[3].alt} 
                className="h-12 w-12 object-contain rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300">
                {services[3].title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NativeServicesGrid;
  