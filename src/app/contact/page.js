"use client"; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'; 

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
        });

     
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json(); 

        alert(data.message); 
        router.push('/'); 
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    }
};

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6 animate-bounce">
          Contact Us
        </h1>
        <p className="text-white mb-8 text-lg">
          Got a question or feedback? We'd love to hear from you. Reach out using the form below!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="text-white space-y-8">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl" />
              <span>snehabansal481@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl" />
              <span>+91 7017210793</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/snehabansal483" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl text-white hover:text-gray-300 transition-colors duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/sneha-bansal-67b8a724b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl text-white hover:text-blue-400 transition-colors duration-300"
              />
            </a>
            <a href="https://x.com/SnehaBa50023909" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-3xl text-white hover:text-blue-300 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
