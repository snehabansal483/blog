"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const router = useRouter(); 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
  
    try {
      const response = await fetch('/api/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Account created successfully!');
        router.push('/login');
      } else {
        setError(result.message || 'Sign-up failed.');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate-pulse">
          Create an Account
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Social Sign-up Section */}
        <div className="mt-8">
          <p className="text-center text-gray-600 mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-6">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <FontAwesomeIcon icon={faGoogle} className="text-xl text-red-500" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} className="text-xl text-black" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl text-blue-700" />
            </button>
          </div>
        </div>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-gray-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-green-600 hover:text-green-400 transition-colors duration-300"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
