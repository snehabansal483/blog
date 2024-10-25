
'use client';

import React, { use, useEffect } from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

import {ModeToggle} from './theme-button'
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';



const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname=usePathname();
  
  useEffect(() => {
    setProgress(30);
    setTimeout(() =>{
      setProgress(70),

    100}
    )
    setTimeout(() =>{
      setProgress(100)},800
    )
  }, [pathname]);

  useEffect(() => {
    setTimeout(() =>{
     setProgress(0)
  }, 900);
},[])

 
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-3 bg-background/50 sticky top-0 backdrop-blur border-b mx-auto z-10">
      <LoadingBar
        color='#0000FF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              SnehaBlog
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-400 hover:font-semibold hover:scale-105 transition-transform">Home</Link>
            <Link href="/about" className="hover:text-yellow-400 hover:font-semibold hover:scale-105 transition-transform">About</Link>
            <Link href="/blog" className="hover:text-yellow-400 hover:font-semibold hover:scale-105 transition-transform">Blog</Link>
            <Link href="/contact" className="hover:text-yellow-400 hover:font-semibold hover:scale-105 transition-transform">Contact</Link>
            <a href="/login">
            <Button variant="outline">Login</Button>
            </a>
            <a href="/signup">
            <Button variant="outline">Signup</Button>
            </a>

            <ModeToggle/>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block px-4 py-2 hover:bg-purple-600">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-purple-600">
            About
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-purple-600">
            Blog
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-purple-600">
            Contact
          </Link>
          <a href="/login">
          <Button  className="text-xs-1 px-4 py-2 mx-1" variant="outline">Login</Button>
          </a>
          <a href="/signup">
          <Button className="text-xs-1 px-4 py-2 mx-1" variant="outline">Signup</Button>
          </a>
          <div className="px-2 py-2 ">
          <ModeToggle/>
          </div>

          

        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
