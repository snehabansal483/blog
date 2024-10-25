"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';  // Fix: Use named import for next/image
// import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Typed from 'typed.js';
import Blog from './blog/page';



export default function Home() {
  const el = useRef(null); // Create a ref to hold the DOM element

  useEffect(() => {
    if (el.current) { // Check if el.current is not null
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineer'],
        typeSpeed: 50,
      });

      return () => {
        typed.destroy(); // Cleanup typed.js instance on component unmount
      };
    }
  }, []); // Empty dependency array to run only once on mount
  return (
    <>
      {/* Include Navbar component<Navbar />  */}
      <main>
      <section className="container px-8 py-10 mx-auto lg:h-128 lg:space-x-12 lg:flex lg:items-center">
  {/* Text Section */}
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:mt-0">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
      A <span className="font-semibold">free repository</span> for community 
      <br className="hidden lg:block" />
      components using <span className="font-semibold underline decoration-primary">  <span ref={el} /></span>
    </h1>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
      Open source Tailwind UI components and templates to 
      <br className="hidden lg:block" /> 
      bootstrap your new apps, projects, or landing sites!
    </p>
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
       
      </form>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
    <Image
      src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
      alt="tailwind css components"
      width={450}
      height={450}
      className="w-full h-auto max-w-lg mx-auto"
    />
  </div>
</section>
        <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg ">
            Simple pricing for everyone. Pick a plan that suits your needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-lg shadow-lg p-6  hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold ">Basic</h3>
            <p className="mt-4 ">Perfect for individuals just getting started.</p>
            <div className="my-6">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-lg ">/month</span>
            </div>
            <ul className="space-y-3 ">
              <li>✔️ 1 Project</li>
              <li>✔️ 5GB Storage</li>
              <li>✔️ Basic Support</li>
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border-2 border-primary rounded-lg shadow-xl p-6  hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold ">Standard</h3>
            <p className="mt-4 ">Ideal for growing teams and small businesses.</p>
            <div className="my-6">
              <span className="text-4xl font-bold">$30</span>
              <span className="text-lg ">/month</span>
            </div>
            <ul className="space-y-3 ">
              <li>✔️ 5 Projects</li>
              <li>✔️ 50GB Storage</li>
              <li>✔️ Priority Support</li>
            </ul>
            <button className="mt-6 w-full bg-black  text-white py-2 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg shadow-lg p-6  hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold ">Premium</h3>
            <p className="mt-4 ">For large organizations and enterprises.</p>
            <div className="my-6">
              <span className="text-4xl font-bold">$50</span>
              <span className="text-lg ">/month</span>
            </div>
            <ul className="space-y-3 ">
              <li>✔️ Unlimited Projects</li>
              <li>✔️ 1TB Storage</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="relative overflow-hidden py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold  mb-4 animate-fade-in-up">
      Elevate Your Experience
    </h2>
    <p className="text-lg  mb-8 max-w-xl mx-auto animate-fade-in-up delay-100">
      Discover modern design components that help you build beautiful user interfaces with ease.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fade-in-up delay-200 ">
      <div className="p-6  rounded-lg shadow-lg border">
        <h3 className="text-xl font-semibold  mb-2">Design Tools</h3>
        <p className="text-sm ">
          Access open-source tools and components for stunning UI designs.
        </p>
      </div>
      <div className="p-6  rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border">
        <h3 className="text-xl font-semibold  mb-2">Templates</h3>
        <p className="text-sm ">
          Use pre-built templates to accelerate your project timeline.
        </p>
      </div>
      <div className="p-6  rounded-lg shadow-lg hover:scale-105 transition-transform border">
        <h3 className="text-xl font-semibold  mb-2">Documentation</h3>
        <p className="text-sm ">
          In-depth guides to integrate components smoothly.
        </p>
      </div>
      <div className="p-6  rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border">
        <h3 className="text-xl font-semibold  mb-2">Community Support</h3>
        <p className="text-sm ">
          Get help and share ideas with developers around the world.
        </p>
      </div>
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40"></div>
</section>

<section className="py-16">
  <div className="container px-6 mx-auto">
    <h2 className="text-4xl font-extrabold text-center  mb-12 animate-fade-in-up">
      Top Blog Posts
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Blog Card 1 */}
      <div className="p-6  rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition duration-300 border">
        <Image
          src="/img/blog1.webp" 
          alt="Blog 1" 
          width={500} 
          height={300} 
          className="rounded-t-lg"
        />
        <h3 className="text-2xl font-semibold mt-4">Understanding JavaScript Closures</h3>
        <p className="mt-2">
          Dive deep into closures in JavaScript and learn how they work under the hood.
        </p>
        <a href="/blog" className="mt-4 inline-block text-primary hover:underline">
        <Button variant="outline">Read More</Button>
        </a>
      </div>

      {/* Blog Card 2 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition duration-300 border">
        <Image
          src="/img/blog2.webp"
          alt="Blog 2"
          width={500}
          height={300}
          className="rounded-t-lg"
        />
        <h3 className="text-2xl font-semibold mt-4">A Guide to Next.js Routing</h3>
        <p className="mt-2">
          Master Next.js dynamic routes and build fast, efficient web applications.
        </p>
        <a href="/blog" className="mt-4 inline-block text-primary hover:underline">
          <Button variant="outline">Read More</Button>
        </a>
      </div>

      {/* Blog Card 3 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition duration-300 border">
        <Image
          src="/img/blog3.webp"
          alt="Blog 3"
          width={500}
          height={300}
          className="rounded-t-lg"
        />
        <h3 className="text-2xl font-semibold mt-4">Building Responsive UIs with Tailwind CSS</h3>
        <p className="mt-2">
          Learn how to use Tailwind CSS to create stunning responsive designs.
        </p>
        <a href="/blog" className="mt-4 inline-block text-primary hover:underline">
        <Button variant="outline">Read More</Button>
          
        </a>
      </div>
    </div>
  </div>
</section>


      </main>
    </>
  );
}
