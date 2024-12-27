import React from 'react';

const DevelopmentProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Get Ideas',
      description: 'Every project commences with a brilliant concept.',
      color: 'bg-green-400'
    },
    {
      number: '02',
      title: 'Discuss',
      description: 'Your contributions are the most valuable assets for achieving success.',
      color: 'bg-cyan-400'
    },
    {
      number: '03',
      title: 'Make Plan',
      description: 'A carefully crafted execution plan guarantees punctual delivery.',
      color: 'bg-red-400'
    },
    {
      number: '04',
      title: 'Production',
      description: '"Lights, camera, action!"—This is where all the magic unfolds.',
      color: 'bg-orange-400'
    },
    {
      number: '05',
      title: 'Post Production',
      description: 'Where all elements are intricately woven together with creativity.',
      color: 'bg-yellow-400'
    },
    {
      number: '06',
      title: 'Approval',
      description: 'Your approval holds significant value for our entire team.',
      color: 'bg-blue-400'
    }
  ];

  return (
    <div className=" bg-black p-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "CRAFTMANSHIP" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
            className="mb-8 text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
            style={{ top: '-20px' }}>
             CRAFTMANSHIP
        </span>
    </div>

        
        {/* Main titles */}
        <div className="relative z-10">
            
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            ALGORITHMX'S VIDEO
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            DEVELOPMENT PROCESS
          </h3>
        </div>
      </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex-1">
              {/* Border */}
              <div
                className={`${
                  step.color
                } absolute md:top-0 md:right-0 md:w-1 md:h-full w-full h-1 top-full right-0 mt-4 md:mt-0 md:w-2 rounded-lg`}
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs transform rotate-90 text-gray-400 mr-2">
                    STEP
                  </span>
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3
                  className={`text-xl font-medium mb-2 ${
                    index === 0
                      ? 'text-green-400'
                      : index === 1
                      ? 'text-cyan-400'
                      : index === 2
                      ? 'text-red-400'
                      : index === 3
                      ? 'text-orange-400'
                      : index === 4
                      ? 'text-yellow-400'
                      : 'text-blue-400'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-white text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
