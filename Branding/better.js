'use client';
import React from 'react';
import './styles.css';

const Icons = {
  Business: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <path d="M12 6v6l4 2" strokeWidth="2"/>
      <path d="M16 8a4 4 0 0 0-8 0" strokeWidth="2"/>
    </svg>
  ),
  Marketing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
    </svg>
  ),
  Communication: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2"/>
      <path d="M8 10h8M8 14h4" strokeWidth="2"/>
    </svg>
  ),
  Deadlines: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <path d="M12 6v6l4 2" strokeWidth="2"/>
    </svg>
  ),
  Results: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M4 14h4v7H4zM10 9h4v12h-4zM16 4h4v17h-4z" strokeWidth="2"/>
    </svg>
  ),
  Expectations: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M20 20v-8a8 8 0 1 0-16 0v8" strokeWidth="2"/>
      <path d="M4 19h16" strokeWidth="2"/>
      <path d="M12 12v8" strokeWidth="2"/>
    </svg>
  )
};

export default function MarketingFeatures() {
  return (
    <div className="bg-black min-h-screen w-full py-16 relative overflow-hidden">
      {/* Barcode Background Effect */}
      <div className="absolute top-0 left-0 w-full h-32 flex justify-center items-center">
        <div className="flex space-x-4">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-28 bg-gray-800"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-white mt-4">
            WHAT MAKES
            <br />
            US BETTER?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Left Column - Animate from left */}
          <div className="flex flex-col gap-8 opacity-0 animate-slide-in-left h-full">
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Business}
                title="BUSINESS-CENTERED APPROACH"
                description="Our brand development services agency works hard to realize your strategic goals. Our high-quality designs act as powerful instruments that propel your business endeavors to new heights."
                isHighlighted={true}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Deadlines}
                title="MEETING THE DEADLINES"
                description="Project delays are rife with procurement risk because, like our clients, we hate them. This is why we strive to minimize their instances by meeting every deadline during our strategic brand development."
                isHighlighted={false}
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-8 h-full">
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Marketing}
                title="STRONG MARKETING TOOLS"
                description="Marketing and design go hand in hand in our digital branding services, seamlessly working together to boost each other's impact, eventually adding more value to your business with increased efficacy."
                isHighlighted={false}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Results}
                title="FUTURE-PROOF RESULTS"
                description="With our outstanding branding and identity services, we aim to always be relevant with our original and innovative designs that stand the test of time."
                isHighlighted={true}
              />
            </div>
          </div>

          {/* Right Column - Animate from right */}
          <div className="flex flex-col gap-8 opacity-0 animate-slide-in-right h-full">
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Communication}
                title="CLOSE COMMUNICATION"
                description="As experts in providing branding agency services, AlgorithmX's findings reinforce the importance of consistent client interaction. They credit 60% of a project's achievements to the act of staying in constant touch throughout the brand development process."
                isHighlighted={true}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Expectations}
                title="EXCEEDING EXPECTATIONS"
                description="What is the motivation behind our striving for your success? Nothing inspires our brand developers more than seeing your brand thrive. AlgorithmX assures you that we surpass your expectations with our unmatched brilliance and top-notch branding services in achieving excellent outcomes that go beyond your objectives."
                isHighlighted={false}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const FeatureCard = ({ Icon, title, description, isHighlighted }) => (
  <div className={`p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2 text-center h-full flex flex-col justify-between ${
    isHighlighted ? 'bg-black border-2 border-white' : 'bg-[#0f0f0f]'
  }`}>
    <div className="flex justify-center mb-4">
      <Icon />
    </div>
    <div>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);