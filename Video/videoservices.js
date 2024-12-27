import React from 'react';

const VideoServices = () => {
  const services = [
    {
      id: '01',
      title: 'Corporate Films',
      description: 'AlgorithmX is considered reliable in offering exceptional corporate film production services among brands. We offer personalized corporate video production services to meet our client\'s specific requirements.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '02',
      title: 'TVC/Digital Ad Films',
      description: 'Our digital video solutions and commercial video production services are a class apart as we hold a competitive advantage due to our connections in the mainstream film industry which enables us to produce high-quality TVCs at affordable prices.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '03',
      title: 'Music Video/Web Series',
      description: 'AlgorithmX goes beyond being a creative agency, working as a full-service video production house whose portfolio goes beyond conventional limits, covering music video and web series production services.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '04',
      title: 'Infographic Animation',
      description: 'In our professional video production services, we merge quality videos with animations to make informative content more interesting, helping the audience grasp data better.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '05',
      title: 'Product Video',
      description: 'Our product video services demonstrate a product\'s functionality, while demo videos show how it addresses issues. They usually tell tales that customers resonate with, making it easier for customers to understand and connect with the product.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '06',
      title: 'Testimonial Video',
      description: 'Being the best video production company, we create client testimonial videos featuring customers\' thoughts about your brand, establishing trust and pointing out best features of the product to your audiences. Our team prepares customized video scripts to meet your brand\'s needs.',
      image: '/path/to/image3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4">
            OUR VIDEO SERVICES
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            Professional video production services that engage audiences and elevate your brand&apos;s narrative effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card animate-fade-up animate-delay-${index + 1} relative group bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] cursor-pointer`}
            >
              <div className="absolute top-4 right-4 text-blue-500 text-sm font-medium">
                {service.id}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoServices;
