import React from 'react';

const ContactUsForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ marginTop: '-5rem' }}>
      {/* Main Container */}
      <div className="w-full shadow-lg rounded-lg overflow-hidden grid lg:grid-cols-2 grid-cols-1 mx-auto">
        
        {/* Contact Us Heading */}
        <div className="col-span-full text-center py-4">
          <h1 className="text-6xl font-bold text-white">Contact Us</h1>
        </div>

        {/* Left Side - Description */}
        <div className="bg-dark-secondary p-16 flex flex-col justify-center text-white" style={{ minHeight: '300px' }}>
          <h2 className="text-3xl font-bold mb-4">We're here to help!</h2>
          <p className="text-lg mb-6">
            If you have any questions or need assistance, please don't hesitate to reach out to us.
            Our team is ready to provide you with the support you need.
          </p>
          <p className="text-lg">
            Fill out the form, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-16 bg-dark-main flex flex-col justify-center" style={{ minHeight: '300px' }}>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-black font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 bg-white text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan_green focus:border-cyan_green"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 bg-white text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan_green focus:border-cyan_green"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-black font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                className="mt-2 bg-white text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan_green focus:border-cyan_green"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-dark-main hover:bg-dark-secondary hover:text-black text-white font-bold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

