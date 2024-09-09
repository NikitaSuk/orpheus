import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="font-sans py-10 w-full max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="bg-gray-800 text-center text-white py-5 px-5">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>

      {/* Container for both boxes */}
      <div className="py-10 px-5 flex flex-col items-center">
        {/* Support Box */}
        <div className="bg-gray-800 text-center p-10 rounded-lg shadow mb-10 w-full md:w-96 lg:w-96">
          <h2 className="text-2xl font-bold text-white mb-5">Support</h2>
          <p className="text-white mb-5">Find answers to common questions and explore our knowledge base.</p>
          <Link 
            to="/support" 
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium"
          >
            Go to Support
          </Link>
        </div>

        {/* Talk to a Member Box */}
        <div className="bg-gray-800 text-center p-10 rounded-lg shadow w-full md:w-96 lg:w-96">
          <h2 className="text-xl font-bold text-white mb-5">Talk to a Member of Our Team</h2>
          <p className="text-white mb-5">Need personalized help? Our support team is here to assist you.</p>
          <Link 
            to="/contact/form" 
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
