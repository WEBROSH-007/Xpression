import React from "react";
import './styles.css';

const VideoSection = () => {
  return (
    <div className="min-h-screen bg-black">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="container justify-center justify-items-center">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          {/* Left side - Image */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img
                src="images/Graphics.webp"
                alt="Branding process with color swatches"
                className="w-4/5 h-auto shadow-lg mx-auto custom-rounded-tr"
              />
              {/* Rectangular image below the main image (hidden on phones) */}
              <img
                src="images/a3.png"
                alt="Rectangular Branding Image"
                className="w-4/5 h-auto shadow-lg mt-4 hidden md:block mx-auto"
              />
              <div className="absolute bottom-6 left-4 flex items-center space-x-2">
                <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <a
                  href="#explore"
                  className="text-gray-300 md:text-xl tracking-widest text-lg hover:text-white transition"
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Branding and description */}
          <div className="w-full md:w-2/3 flex flex-col space-y-6">
            {/* Cylindrical image above branding (hidden on phones) */}
            <img
              src="images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-lg hidden md:block"
            />
            <h1 className="text-4xl md:text-8xl tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent font-light">
              VIDEO
            </h1>
          </div>
        </div>
        {/* Description below branding */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-500 text-lg md:text-4xl leading-relaxed   ">
          Unlock the power of visual storytelling with our dynamic video production services. Our creative expertise extends from concept development and scripting to shooting and post-production.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default VideoSection;
