import React from 'react';

const EstimationBox = ({ imageSrc, title, description }) => (
  <div className="border border-pink-500 shadow-[0px_0px_15px_5px_rgba(255,20,147,0.2)] p-6 text-center transition-all">
    <img
      src={imageSrc}
      alt={title}
      className="mx-auto mb-4 w-32 h-32 object-cover "
    />
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="text-sm text-zinc-400 mt-4">{description}</p>
  </div>
);

const CostEstimations = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-center">Cost</h1>
        <h2 className="text-2xl md:text-5xl font-light mb-8 text-center ">Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <EstimationBox
            imageSrc="images/c1.png"
            title="From $15,000"
            description="A CRM with standard functionality and minimal customization, meant for about 10 users."
          />

          {/* Box 2 */}
          <EstimationBox
            imageSrc="images/c1.png"
            title="Up to $250,000"
            description="A heavily customized CRM with industry-specific functionality and advanced analytics features, meant for over 1,000 users in diverse roles."
          />
        </div>
      </div>
    </div>
  );
};

export default CostEstimations;
