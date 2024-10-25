import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogData = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into React Hooks and how they can simplify your component logic.",
    slug: "understanding-react-hooks",
    date: "2024-10-20",
    author: "John Doe",
    image: "/img/blog1.webp",
  },
  {
    title: "Getting Started with Next.js",
    description: "Learn how to set up your first Next.js application from scratch.",
    slug: "getting-started-with-nextjs",
    date: "2024-10-22",
    author: "Jane Smith",
    image: "/img/blog2.webp",
  },
  {
    title: "CSS Grid vs Flexbox",
    description: "Understanding the differences and use cases for CSS Grid and Flexbox.",
    slug: "css-grid-vs-flexbox",
    date: "2024-10-24",
    author: "Alice Johnson",
    image: "/img/blog3.webp",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
     
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <div key={blog.slug} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image
              src={blog.image}
              alt={`Image for ${blog.title}`} 
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="flex justify-between text-gray-500 text-sm mt-4">
                <span>{blog.date}</span>
                <span>{blog.author}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
