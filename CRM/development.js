'use client'
import React, { useState } from 'react';

const CRMDashboard = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const icons = {
    database: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2z" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
    diamond: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" />
      </svg>
    ),
    target: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      </svg>
    ),
  };

  const crmData = {
    sales: {
      title: "Sales Data Management",
      icon: icons.database,
      content: "We facilitate economic development from CRM solutions by offering tools that help businesses efficiently manage their sales data allowing them to monitor the sales information easily. By utilizing our software, businesses gain instant access to data on sales, track sales performance, forecast sales, and spot trends.",
    },
    accounts: {
      title: "Accounts and Contact Management",
      icon: icons.users,
      content: "As part of our CRM development services, we offer CRM software solutions for managing accounts and contacts. These solutions provide comprehensive customer visibility that lets businesses improve their team efficiency via insights from social media networks or other platforms, allowing users to track discussions, important contacts, past activities etc",
    },
    opportunities: {
      title: "Opportunity Management",
      icon: icons.diamond,
      content: "Take advantage of our top CRM development company’s high-quality opportunity management solutions with a range of features such as lead capture, qualification, pipeline management forecasting as well as reporting to manage your sales opportunities and leads efficiently, resulting in expediting closing of deals.",
    },
    leads: {
      title: "Lead Management",
      icon: icons.target,
      content: "By utilizing our lead monitoring system, companies get oversight of the latest customer information, efficiently conduct marketing campaigns, and track leads from the initial contact to successful conversion. Our exceptional lead management system enables businesses to thrive in lead monitoring, resulting in increased sales and revenue.",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="max-w-screen-xl w-full px-4 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                Initiate<br />
                Advanced CRM<br />
                Development
              </h1>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-12 bg-blue-500"></div>
                  <div>
                    <h2 className="text-xl text-gray-400">STARTING ADVANCED CRM</h2>
                    <h3 className="text-2xl font-bold text-gray-300">DEVELOPMENT SOLUTIONS NOW</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            {Object.entries(crmData).map(([key, data]) => (
              <div key={key}>
                <button
                  onClick={() => setActiveTab(key)}
                  className={`w-full flex items-center justify-between p-4 ${
                    activeTab === key ? 'bg-gray-900' : 'bg-black'
                  } border border-gray-800 transition-colors`}
                >
                  <span className="font-semibold text-lg">{data.title}</span>
                  <span className="text-blue-500">{data.icon}</span>
                </button>

                {/* Content Box */}
                {activeTab === key && (
                  <div className="p-6 border-x border-b border-gray-800">
                    <p className="text-gray-400 text-center">{data.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
