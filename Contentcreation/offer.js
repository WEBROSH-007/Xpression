import React from 'react';

const Offer = () => {
  const services = [
    {
      id: '01',
      title: 'SEO-friendly content',
      description: 'Digital marketing content creation involves keyword research and optimized content to improve brand visibility and ranking on search results.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '02',
      title: 'Business-boosting copies',
      description: 'AlgorithmX’s effective ads and compelling CTAs drive desired engagement, boosting CTR and enhancing ROAS.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '03',
      title: 'Rapid content delivery',
      description: 'A major part of our content creation services is producing customized, high-quality content exceeding 20,000 words delivered within 48 hours.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '04',
      title: 'Proofed, original write-ups',
      description: 'Every content piece undergoes Grammarly and premium plagiarism checks, ensuring 100% originality and 0% plagiarism.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '05',
      title: 'Quality multilingual content',
      description: 'Our content creation agency specializes in quality content that transcends language barriers, offering delivery in multiple languages for diverse audience needs.',
      image: '/path/to/image3.jpg',
    },
    {
      id: '06',
      title: 'Stunning visual graphics',
      description: 'Our premium graphics in video content creation elevate your content, enhancing its aesthetic appeal, and persuasive power, creating a captivating experience.',
      image: '/path/to/image3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-5xl text-white tracking-wider mb-4">
            WHAT WE OFFER
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card animate-fade-up animate-delay-${index + 1} relative group bg-white/10 rounded-lg p-6 transition-all duration-300  hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] cursor-pointer max-w-xs`}
            >
              <div className="absolute top-4 right-4 text-blue-500 text-sm font-medium">
                {service.id}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
