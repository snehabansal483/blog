"use client"; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert(data.message);
        router.push('/'); 
      } else if (res.status === 404) {
        setError('Account not found. Redirecting to signup...');
        setTimeout(() => router.push('/signup'), 2000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate-pulse">
          Login
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <p className="text-center text-gray-600 mb-4">Or log in with</p>
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

        {/* Signup Redirect */}
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
