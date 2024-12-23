import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden px-4 py-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Left (Image above text) */}
          <div className="space-y-4">
            <img src="/logo.png" alt="AlgorithmX Logo" className="w-16 h-16 mx-auto" />
            <h2 className="text-xl font-bold text-white">ALGORITHMX</h2>
            <div className="space-y-2 text-sm">
              <p>2810 N Church St. PMB 15369,</p>
              <p>Wilmington, DE 19802</p>
              <p>AlgorithmX Inc</p>
              <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                connect@thealgorithmx.com
              </a>
              <p>+1-425-577-6660</p>
            </div>
          </div>

          {/* India Office - Center (Image above text) */}
          <div className="space-y-4">
            <img src="/india-office.png" alt="India Office" className="w-16 h-16 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Operation Control Center</h3>
            <div className="space-y-2 text-sm">
              <p>Cyber City, Sector 24, Gurgaon,</p>
              <p>Haryana, India AlgorithmX Inc</p>
              <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                connect@thealgorithmx.com
              </a>
              <p>1800 202 2202</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">FOLLOW US</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">ALGORITHMX NEWSLETTER</h3>
            <p className="text-sm">From Concept To Market Dominance</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="enter-your@mail.com"
                className="w-full px-4 py-2 rounded-full bg-white text-black"
              />
              <button className="w-full px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">©2024 AlgorithmX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-sm">Terms of use</a>
            <a href="#" className="hover:text-white transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
