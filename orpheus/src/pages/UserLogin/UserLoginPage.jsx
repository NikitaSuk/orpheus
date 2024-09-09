import React from 'react';

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/path/to/background.jpg')" }}
    >
      <div
        className="p-10 rounded-2xl shadow-lg w-full max-w-lg text-center flex flex-col items-center"
        style={{ backgroundColor: '#3a3a3a' }} // Applying the #3a3a3a background color
      >
        <h1 className="text-3xl font-bold text-white mb-4">Welcome back!</h1>
        <p className="text-white mb-6 text-base">We're so excited to see you again!</p>
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
          <a href="#" className="text-dark-main hover:text-dark-secondary text-sm self-start">Forgot your password?</a>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-md bg-dark-main text-white hover:bg-dark-secondary hover:text-black transition-colors"
          >
            Login
          </button>
          <p className="text-white mt-4 text-sm self-start">
            <span className="text-white">Need an account?</span>
            <a href="/register" className="text-dark-main hover:text-dark-secondary ml-1"> Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;