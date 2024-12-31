import React from 'react';

const ShopifySection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        Shopify
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-gray-400 leading-relaxed">
        Partner with AlgorithmX to realize your ecommerce dreams as we build high-performing and stunning Shopify stores customized for your exclusive business needs. Our Shopify development services prioritize satisfactory user experience, high sales, and customer loyalty to make your brand thrive in the competitive digital market.
        </p>
      </div>
    </section>
  );
};

export default ShopifySection;