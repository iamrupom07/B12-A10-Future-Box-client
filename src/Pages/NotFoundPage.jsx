import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.warning("⚠️ Page not found!");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
