export default function HeroSection() {
    return (
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
        {/* Content Container */}
        <div className="max-w-4xl px-4">
          {/* Quality Guaranteed Text */}
          <div className="relative mb-8">
            <h2 className="relative text-2xl md:text-4xl font-light text-left">
              <span className="bg-black">QUALITY GUARANTEED</span>
            </h2>
          </div>
  
          <div className="border border-gray-700 border-8 p-6 md:p-8 bg-black/50 backdrop-blur-sm">
            <div className="space-y-2 mb-8 text-left">
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-4xl md:text-4xl font-bold">COMPLIANT</h1>
                <span className="text-4xl md:text-4xl font-bold">&</span>
                <h1 className="text-4xl md:text-4xl font-bold">WORTH EVERY PENNY</h1>
              </div>
            </div>
  
            {/* Description Box */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              AlgorithmX is committed to exploring all possibilities to deliver top-notch and innovative Shopify development services customized to suit all your requirements and surpass your expectations.
            </p>
          </div>
        </div>
      </div>
    );
  }
  