import React from 'react';

const services = [
  {
    title: "Flutter App Ideation & Consulting",
    description: "Our Flutter app development company assists you in validating your project idea and implementing an optimal technical solution that conforms with the concept behind your product, keeping your Flutter app development cost low. Through extensive research and analysis, we assess the viability and opportunities of your idea amidst the market competition. Trust us to make sure your Flutter project succeeds.",
    image: "/path/to/consultation-image.png", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Flutter App Development",
    description: "Our Flutter mobile app development services help businesses create a strong multi-platform presence. Our expert Flutter app developers are committed to assisting you at every step, from identifying the right product-market fit to smoothly launching your Flutter app on different platforms. We excel in supporting you with the development, testing, and release of Flutter apps.",
    image: "/path/to/design-image.png", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Flutter App Migration",
    description: "At AlgorithmX, we have expertise in transferring your Android and iOS apps to Flutter. With our expert Flutter Android app development team, we are skilled at moving your current apps across different platforms and operating systems. As a premier Flutter app development company in USA, we guarantee the development of applications that cater to your requirements.",
    image: "/path/to/custom-dev-image.png", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  
];

const FlutterServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
          Flutter App
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
              <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300">
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

export default FlutterServicesGrid;
