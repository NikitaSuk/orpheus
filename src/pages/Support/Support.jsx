import React from 'react';
const SupportPage = () => {
  return (
    <div className="font-sans py-12 w-full max-w-screen-xl mx-auto">
      {/* Header and Search Bar Container */}
      <div className="bg-gray-800 text-center text-white py-10 px-5 rounded-2xl">
        <h1 className="text-3xl font-bold mb-5">Support Center</h1>
        <div className="max-w-2xl mx-auto">
          <input 
            type="text" 
            className="w-full p-4 border border-gray-300 rounded-2xl"
            placeholder="Search for help articles..."
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-10 px-5">
        <h2 className="text-2xl text-center font-bold mb-5">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Category 1 */}
          <div className="bg-gray-800 text-center p-5 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Account Management</h3>
            <p className="text-white mb-4">Learn how to manage your account settings and preferences.</p>
            <a href="/support/account-management" className="text-blue-500 hover:underline">View Articles</a>
          </div>
          {/* Category 2 */}
          <div className="bg-gray-800 text-center p-5 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Billing & Payments</h3>
            <p className="text-white mb-4">Get help with billing issues, payment methods, and more.</p>
            <a href="/support/billing-payments" className="text-blue-500 hover:underline">View Articles</a>
          </div>
          {/* Category 3 */}
          <div className="bg-gray-800 text-center p-5 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Troubleshooting</h3>
            <p className="text-white mb-4">Find solutions to common problems and technical issues.</p>
            <a href="/support/troubleshooting" className="text-blue-500 hover:underline">View Articles</a>
          </div>
          {/* More Categories down here if needed */}
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
