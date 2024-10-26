"use client"; 
import { useState } from 'react';

const blogData = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into React Hooks and how they can simplify your component logic.",
    slug: "understanding-react-hooks",
    date: "2024-10-20",
    author: "John Doe",
    content: `
      <p>React Hooks are a new addition to React that allow you to use state and other React features without writing a class.</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      <p>They were introduced in React 16.8 and have quickly become a standard for managing state and lifecycle events in functional components.</p>
      <p>Another important hook is <code>useEffect</code>, which enables you to perform side effects in your components.</p>
      <pre><code>useEffect(() => { /* effect */ }, [dependencies]);</code></pre>
      <p>React Hooks promote reusability by allowing you to extract component logic into reusable functions.</p>
      <p>In summary, React Hooks provide a powerful way to manage state and side effects in your components.</p>
    `,
    codeExample: `
      <pre><code>
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
      </code></pre>
    `,
    detailedDescription: `
      <h2>Description</h2>
      <p>This blog post dives into the concept of React Hooks, a significant feature introduced in React 16.8. Hooks allow developers to use state and lifecycle features in functional components without needing to convert them into class components.</p>
      <h3>Key Points:</h3>
      <ul>
        <li><strong>Introduction to Hooks:</strong> React Hooks enable the use of state management and other React functionalities without class components, promoting a more straightforward syntax.</li>
        <li><strong>useState Hook:</strong> This is the most commonly used hook for managing state within a functional component. It simplifies state management and improves readability.</li>
        <li><strong>useEffect Hook:</strong> This hook allows developers to perform side effects such as data fetching and subscriptions.</li>
        <li><strong>Promoting Reusability:</strong> Hooks enable the extraction of component logic into reusable functions, leading to cleaner and more maintainable code.</li>
        <li><strong>Conclusion:</strong> The article emphasizes that React Hooks offer a powerful way to manage state and side effects, making the code more organized and easier to understand.</li>
      </ul>
    `,
  },
  {
    title: "Getting Started with Next.js",
    description: "Learn how to set up your first Next.js application from scratch.",
    slug: "getting-started-with-nextjs",
    date: "2024-10-22",
    author: "Jane Smith",
    content: `
      <p>Next.js is a React framework that enables server-side rendering and static site generation.</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      <p>Once your project is set up, you can navigate to the project directory and start the development server.</p>
      <p>Next.js comes with built-in routing based on the file system.</p>
    `,
    codeExample: `
      <pre><code>
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
      </code></pre>
    `,
    detailedDescription: `
      <h2>Description</h2>
      <p>This article serves as an introductory guide to setting up a Next.js application from scratch. Next.js is a popular React framework that enhances React applications with server-side rendering and static site generation capabilities.</p>
      <h3>Key Points:</h3>
      <ul>
        <li><strong>What is Next.js?</strong> An overview of Next.js, explaining its role as a framework that simplifies building modern web applications.</li>
        <li><strong>Setup Instructions:</strong> The blog provides step-by-step instructions for creating a new Next.js application.</li>
        <li><strong>Development Server:</strong> Instructions on navigating to the project directory and starting the development server are included.</li>
        <li><strong>Routing:</strong> The article discusses the built-in routing capabilities of Next.js.</li>
        <li><strong>Conclusion:</strong> It wraps up by highlighting Next.js as a powerful framework that simplifies many aspects of developing React applications.</li>
      </ul>
    `,
  },
  {
    title: "CSS Grid vs Flexbox",
    description: "Understanding the differences and use cases for CSS Grid and Flexbox.",
    slug: "css-grid-vs-flexbox",
    date: "2024-10-24",
    author: "Alice Johnson",
    content: `
      <p>CSS Grid and Flexbox are powerful layout systems in CSS that serve different purposes.</p>
      <p>Flexbox is designed for one-dimensional layouts.</p>
      <pre><code>display: flex;</code></pre>
      <p>CSS Grid is a two-dimensional layout system.</p>
      <pre><code>display: grid;</code></pre>
    `,
    codeExample: `
      <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.item {
  background-color: lightblue;
  padding: 20px;
}
      </code></pre>
    `,
    detailedDescription: `
      <h2>Description</h2>
      <p>This blog post explores the differences between CSS Grid and Flexbox, two essential layout systems in CSS. Understanding these differences is crucial for web developers and designers to create responsive and well-structured layouts.</p>
      <h3>Key Points:</h3>
      <ul>
        <li><strong>Overview of CSS Layout Systems:</strong> The article introduces both CSS Grid and Flexbox, explaining their unique strengths and suitable use cases.</li>
        <li><strong>Flexbox:</strong> Designed for one-dimensional layouts (either row or column), Flexbox excels in distributing space along a single axis and aligning items within a container.</li>
        <li><strong>CSS Grid:</strong> Unlike Flexbox, CSS Grid is a two-dimensional layout system that allows for complex grid-based designs.</li>
        <li><strong>Use Cases:</strong> The blog explains when to use Flexbox versus CSS Grid, emphasizing that both can be used together.</li>
        <li><strong>Conclusion:</strong> The article concludes by reinforcing the importance of understanding the strengths of each layout system.</li>
      </ul>
    `,
  },
];

export default function Page({ params }) {
  const post = blogData.find((blog) => blog.slug === params.slug);
  const [copyMessage, setCopyMessage] = useState('');

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600">The blog post you&apos;re looking for does not exist.</p>
      </div>
    );
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage('Code copied to clipboard!');
    setTimeout(() => setCopyMessage(''), 2000); 
  };

  const renderContentWithCopyButtons = (content) => {
    const parts = content.split(/<pre>(.*?)<\/code><\/pre>/g);
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <p key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      }
      return (
        <div key={index} className="relative mb-4">
          <pre className=" p-2 rounded">
            <code>{part}</code>
            <button
              onClick={() => handleCopy(part)}
              className="absolute top-1 right-1 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200"
            >
              Copy
            </button>
          </pre>
        </div>
      );
    });
  };

  const renderCodeExample = (code) => (
    <div className="relative mb-4">
      <pre className="p-2 rounded ">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => handleCopy(code)}
        className="absolute top-1 right-1 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200"
      >
        Copy
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between text-gray-500 text-sm mb-4">
        <span>{post.date}</span>
        <span>{post.author}</span>
      </div>
      <p className="text-gray-600 mb-4">{post.description}</p>

      {/* Render the detailed description here */}
      <div className="prose mb-6" dangerouslySetInnerHTML={{ __html: post.detailedDescription }} />

      {/* Render the code example here */}
      <h3 className="text-xl font-semibold mb-2">Code Example</h3>
      {renderCodeExample(post.codeExample)}

      <div className="prose">{renderContentWithCopyButtons(post.content)}</div>
      {copyMessage && <p className="text-green-500 mt-2">{copyMessage}</p>}
    </div>
  );
}
