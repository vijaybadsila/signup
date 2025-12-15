import React, { useState } from "react";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    
  });
  const [loading, setLoading] = useState(false);
const url = process.env.BACKEND_URL
console.log("url---",url)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   

    try {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ User created successfully!");
        navigate("/Emp")
        console.log("Server Response:", result);
        setFormData({ name: "", email: "", password: "" });
      } else {
        alert("❌ " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-md"
      >
       <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          <Link
            to="/"
            className="hover:underline hover:text-purple-700 transition duration-200"
          >
            Register
          </Link>{" "}
          /{" "}
          <Link
            to="/signin"
            className="hover:underline hover:text-purple-700 transition duration-200"
          >
            Login
          </Link>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Please wait..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
