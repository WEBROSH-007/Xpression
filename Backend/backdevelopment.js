import React from 'react';

const services = [
  {
    title: "Server-Side Scripting",
    description: "In order to manage dynamic content generation and communication with databases, our specialized back end developer develops server-side scripts using languages like Ruby, PHP, Python, or Node.js.",
    image: "/path/to/consultation-image.png", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Database Management",
    description: "Our back end development company utilizes technologies like PostgreSQL, MySQL, SQLite, or MongoDB to establish and administer databases to efficiently store web data and recover it.",
    image: "/path/to/design-image.png", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "User Authentication and Authorization",
    description: "AlgorithmX offers an expert back end developer who uses encryption, hashing, and session handling techniques to develop user authentication and authorization systems in order to control access to website data and safeguard confidential information.",
    image: "/path/to/custom-dev-image.png", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Web Services/API Development",
    description: "Our on demand back end web development solutions include building APIs and web services that facilitate communication between websites and other external systems, enabling third-party services integration or development of mobile applications.",
    image: "/path/to/testing-image.png", // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Security and Compliance",
    description: "We enforce security measures to prevent frequent internet threats like cross-site scripting (XSS) and SQL injection and ensure adherence to data protection laws such as GDPR or HIPAA.",
    image: "/path/to/deployment-image.png", // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Data Analysis and Insights",
    description: "As part of our back end development services, we employ data analysis and processing features leveraging techniques like data mining, machine learning algorithms, and predictive analytics to derive valuable insights from user engagement on websites in order to tailor content and make informed business choices.",
    image: "/path/to/support-image.png", // Replace with the actual path
    alt: "Support Icon",
  },
];

const BackServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
    className="mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
    style={{ top: '-20px' }}>
    ENHANCEMENTS
  </span>
</div>

        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            ADVANCED
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            INTEGRATIONS
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

export default BackServicesGrid;
