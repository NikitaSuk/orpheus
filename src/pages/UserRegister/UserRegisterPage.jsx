import React from 'react';

const RegisterPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/path/to/background.jpg')" }}
    >
      <div className="p-10 rounded-2xl shadow-lg w-full max-w-lg text-center flex flex-col items-center" style={{ backgroundColor: '#3a3a3a' }}>
        <h1 className="text-3xl font-bold text-white mb-4">Create an account</h1>
        <p className="text-white mb-6 text-base">Join us today!</p>
        <form className="w-full flex flex-col items-center space-y-4">
          <div className="w-full flex flex-col text-left mb-5">
            <label className="text-lg font-bold mb-2 text-white relative">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 text-lg border border-gray-600 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col text-left mb-5">
            <label className="text-lg font-bold mb-2 text-white relative">
              Password
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 text-lg border border-gray-600 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-md bg-dark-main text-white hover:bg-dark-secondary hover:text-black transition-colors"
          >
            Register
          </button>
          <p className="text-gray-400 text-xs mt-4 mb-4">
            By registering, you agree to Campus Collect's{' '}
            <a href="/terms" target="_blank" className="text-dark-main hover:text-dark-secondary">Terms of Service</a> and{' '}
            <a href="/privacy" target="_blank" className="text-dark-main hover:text-dark-secondary">Privacy Policy</a>.
          </p>
          <p className="text-white mt-4">
            <a href="/login" className="text-dark-main hover:text-dark-secondary">Already have an account?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
