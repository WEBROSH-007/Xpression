import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center py-8">
      {/* First Div with image left and text right */}
      <div className="flex items-center justify-center w-full px-6 md:px-12 py-8 mb-8">
        <div className="flex flex-wrap items-center justify-center max-w-7xl w-full">
          {/* Image on left */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 gap-2">
            <img
              src="images/Essential.webp" // Replace with your image path
              alt="Image"
              className="w-4/5 h-auto rounded-lg shadow-lg" // Reduced image width
            />
          </div>

          {/* Text on right */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Essential Business Videos</h2>
            <p className="text-gray-400 text-lg">
              AlgorithmX’s enterprise video solution delivers web videos that are essential tools businesses rely on to share important
              details about their company, products, and services. These videos use a mix of elements such as music, animation, and customized
              footage to connect to a targeted audience, inform, entertain, and encourage action. They play a crucial role in boosting website
              traffic and are an integral part of modern websites, especially when appealing to customers seeking information.
            </p>
          </div>
        </div>
      </div>

      {/* Second Div with image right and text left */}
      <div className="flex items-center justify-center w-full px-6 md:px-12 py-8">
        <div className="flex flex-wrap items-center justify-center max-w-7xl w-full">
          {/* Text on left */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Digital Video Strategy</h2>
            <p className="text-gray-400 text-lg">
              Website video productions are an essential component of modern online presence, reaching a vast audience and serving as potent tools
              for communication and marketing. To maximize their effectiveness, it's crucial to know your target audience, define key messaging,
              and plan the number and distribution of videos. Our digital marketing video production services are efficient in filming multiple videos
              at once and keeping them concise. With videos dominating internet traffic, web video production is paramount for representing your
              company, product, or service online. The more videos you create, the better you’ll get at it so start creating and strive for improvement
              with each new project!
            </p>
          </div>

          {/* Image on right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="images/Essential.webp" // Replace with your image path
              alt="Image"
              className="w-4/5 h-auto rounded-lg shadow-lg" // Reduced image width
            />
          </div>
        </div>
      </div>
    </div>
  );
}
