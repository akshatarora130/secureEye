"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  const handleGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    }).then(() => {});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="bg-white max-w-md p-10 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Your Secure Eye</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to access your account
        </p>
        <button
          className="flex items-center justify-center w-full h-12 bg-gray-100 text-black rounded-md border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleGoogle}
        >
          <img
            src="https://i.ibb.co/yYpmGLB/google.png"
            alt="google"
            className="w-6 mr-3"
          />
          <span className="text-lg font-medium">Sign in with Google</span>
        </button>
        <p className="text-xs text-center mt-6 text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
