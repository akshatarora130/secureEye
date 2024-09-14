"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  const handleGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    }).then(() => {});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Welcome to Your Secure Eye
        </h1>
        <button
          className="flex items-center justify-center w-full h-12 bg-white text-black rounded-md border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={handleGoogle}
        >
          <img
            src="https://i.ibb.co/yYpmGLB/google.png"
            alt="google"
            className="w-8 mr-4"
          />
          <span className="text-lg">Sign in with Google</span>
        </button>
        <p className="text-sm text-center mt-4 text-gray-600">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
