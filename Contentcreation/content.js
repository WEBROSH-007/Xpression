import React from "react";
import "./style.css"; // External CSS for hiding scrollbar

export default function Content() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-1/2 lg:w-1/2 p-8 flex flex-col justify-start mt-10">
          <h1 className="text-6xl  text-white">Explore Our</h1>
          <h2 className="text-6xl font-bold mb-1 text-white">Content </h2>
          <h2 className="text-6xl font-bold mb-1 text-white"> Creation </h2>
          <h2 className="text-6xl font-bold mb-1 text-white"> Variety </h2>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-8 border-blue-500 rounded-full mr-4"></div> {/* Increased line height and width */}
            <p className="text-xl text-white-500">Discovering Our Range of Content</p>
          </div>
        </div>

        {/* Right Section (Scrolling) */}
        <div className="w-full lg:w-1/2 md:overflow-y-auto md:overflow-y-scroll p-8 max-h-screen scroll-content">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Article Writing</h2>
            <p className="mt-2 text-sm text-white">
              At our premier content creation firm, we carefully plan article concepts and generate top-notch content tailored to enhance your brand’s online presence.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Product Description</h2>
            <p className="mt-2 text-sm text-white">
            Our content creation agency crafts compelling product descriptions that highlight the key features, captivate your customers and drive conversions.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Editing & Proofreading
            </h2>
            <p className="mt-2 text-sm text-white">
            AlgorithmX offers excellent proofreading services to ensure your content is consistently error-free.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">White Paper</h2>
            <p className="mt-2 text-sm text-white">
            We produce well-researched documents that establish your brand’s thought leadership and credibility.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Blog Writing</h2>
            <p className="mt-2 text-sm text-white">
            Our well-written and engaging SEO-optimized blogs enhance your SERP ranking, drive traffic, and elevate your visibility online.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Website Content</h2>
            <p className="mt-2 text-sm text-white">
            We offer comprehensive website content creation services, creating compelling content that effectively communicates your brand’s message and reaches your desired audience.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">SEO Writing</h2>
            <p className="mt-2 text-sm text-white">
            AlgorithmX’s SEO content creation services involve thorough keyword research that enables us to craft tailored and optimized content for your business needs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Press Release</h2>
            <p className="mt-2 text-sm text-white">
            Being a content creation marketing agency, we create media exposure and enhance brand recognition with our on-time press releases.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Article Rewriting</h2>
            <p className="mt-2 text-sm text-white">
            Iterate pre-written articles to enhance content quality and boost SEO effectiveness.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Copy Writing</h2>
            <p className="mt-2 text-sm text-white">
            Our engaging advertising copies attract and convert, establishing a strong online presence across all major content creation platforms.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">FAQ's</h2>
            <p className="mt-2 text-sm text-white">
            We create informative, clear, and concise FAQs that educate your clients and address their common queries as part of your content creation services.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Newsletter Writing</h2>
            <p className="mt-2 text-sm text-white">
            AlgorithmX produces comprehensive and well-structured newsletters that list your latest updates and insights to keep your subscribers informed and engaged.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Technical Content Writing</h2>
            <p className="mt-2 text-sm text-white">
            Being one of the best content creation companies in USA, we simplify complex information with accuracy and clarity for your audience.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Emailers</h2>
            <p className="mt-2 text-sm text-white">
            We design persuasive and precise email campaigns to drive conversions and promote customer relationships to reach your marketing goals.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Case Studies</h2>
            <p className="mt-2 text-sm text-white">
            Our team of content creation specialists provides detailed case studies with your achievements and solutions to build trust with your customers and showcase your expertise.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Magazine Writing</h2>
            <p className="mt-2 text-sm text-white">
            AlgorithmX’s content and branding creation team covers a wide range of topics with in-depth research tailored to your style to inform and educate your clients effectively.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">E-book </h2>
            <p className="mt-2 text-sm text-white">
            We generate impactful e-books to assist you in digitally accessing untapped markets.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Social Media Posts</h2>
            <p className="mt-2 text-sm text-white">
            Our social media content creation agency focuses on crafting on-brand content for each of your social media platforms with consistent updates to maintain engagement.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
