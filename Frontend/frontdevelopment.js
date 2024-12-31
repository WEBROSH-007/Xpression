import React from 'react';

const services = [
  {
    title: "User Interface (UI) Design",
    description: "We are a top front end web development company focused on designing the visual layout and aesthetics of a website or app in order to create a user-friendly and visually pleasing user interface.",
    image: "/path/to/consultation-image.png", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "UX Testing and Optimization",
    description: "AlgorithmX’s UX services include creating unique digital experiences that involve grasping user requirements, crafting instinctive interfaces, and testing usability to enhance engagement and boost brand reputation.",
    image: "/path/to/design-image.png", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Front-End Frameworks",
    description: "In our front end web development services, we use front end frameworks, such as Angular, React.js, or Vue.js, to simplify development, improve code organization and streamline building complex and advanced user interfaces with ease.",
    image: "/path/to/custom-dev-image.png", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Responsive Web Design",
    description: "Our progressive web app development includes designing websites that adjust and operate seamlessly on various devices and all screen sizes to maintain a uniform user experience.",
    image: "/path/to/testing-image.png", // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "HTML/CSS/JS Development",
    description: "We pride ourselves on our Xamarin app development services as we ensure your apps deliver the best performance possible by providing constant technical support and maintaining the software at all times according to industry trends and standards. You can depend on us for your app’s smooth and reliable functioning.",
    image: "/path/to/deployment-image.png", // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Performance Optimization",
    description: "AlgorithmX’s front end development involves excellent optimization of assets and front end codes to enhance the website’s efficiency and speed by reducing file sizes, employing lazy load functionality for resources and leveraging caching methods.",
    image: "/path/to/support-image.png", // Replace with the actual path
    alt: "Support Icon",
  },
];

const FrontServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
    className="mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
    style={{ top: '-20px' }}>
    ALL-IN-ONE
  </span>
</div>

        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            FRONT END
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            DEVELOPMENT SERVICES
          </h3>
        </div>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-neutral-800 rounded-lg p-6 hover:bg-zinc-800 border border-zinc-800 group"
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

export default FrontServicesGrid;
