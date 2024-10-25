
const blogData = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into React Hooks and how they can simplify your component logic.",
    slug: "understanding-react-hooks",
    date: "2024-10-20",
    author: "John Doe",
    content: `
      <p>React Hooks are a new addition to React that allow you to use state and other React features without writing a class. 
      They were introduced in React 16.8 and have quickly become a standard for managing state and lifecycle events in functional components.</p>
      <p>One of the most commonly used hooks is <code>useState</code>, which allows you to add state to functional components. 
      This makes your code cleaner and easier to read.</p>
      <p>Another important hook is <code>useEffect</code>, which enables you to perform side effects in your components. 
      This is particularly useful for data fetching, subscriptions, or manually changing the DOM.</p>
      <p>React Hooks promote reusability by allowing you to extract component logic into reusable functions. 
      This makes your components more modular and easier to maintain.</p>
      <p>However, it's important to use hooks at the top level of your component to ensure they run in the same order on every render. 
      This is essential for maintaining the integrity of the hooks.</p>
      <p>In summary, React Hooks provide a powerful way to manage state and side effects in your components, 
      making your code more organized and easier to understand.</p>
      
    `, 
  },
  {
    title: "Getting Started with Next.js",
    description: "Learn how to set up your first Next.js application from scratch.",
    slug: "getting-started-with-nextjs",
    date: "2024-10-22",
    author: "Jane Smith",
    content: `
      <p>Next.js is a React framework that enables server-side rendering and static site generation, 
      making it a popular choice for building modern web applications.</p>
      <p>To get started, first, ensure you have Node.js installed on your machine. 
      You can then create a new Next.js application using the command <code>npx create-next-app@latest my-next-app</code>.</p>
      <p>Once your project is set up, you can navigate to the project directory and start the development server with <code>npm run dev</code>.</p>
      <p>Next.js comes with built-in routing based on the file system, so you can create new pages by adding files to the <code>pages</code> directory.</p>
      <p>Additionally, Next.js supports CSS and Sass out of the box, allowing you to style your components easily. 
      You can also use CSS Modules for scoped styles.</p>
      <p>One of the key features of Next.js is its ability to fetch data at build time or request time, 
      enabling you to create highly dynamic applications.</p>
      <p>In summary, Next.js simplifies the development process for React applications by providing features like routing, 
      API routes, and performance optimizations.</p>
    `, 
  },
  {
    title: "CSS Grid vs Flexbox",
    description: "Understanding the differences and use cases for CSS Grid and Flexbox.",
    slug: "css-grid-vs-flexbox",
    date: "2024-10-24",
    author: "Alice Johnson",
    content: `
      <p>CSS Grid and Flexbox are powerful layout systems in CSS that serve different purposes. 
      Understanding their differences is crucial for effective web design.</p>
      <p>Flexbox is designed for one-dimensional layouts, meaning it can handle either rows or columns at a time. 
      It excels at distributing space along a single axis and aligning items within a container.</p>
      <p>On the other hand, CSS Grid is a two-dimensional layout system, which allows you to create complex grid-based designs 
      with both rows and columns. It provides greater control over the layout, enabling you to position elements in a more versatile way.</p>
      <p>Flexbox is great for simpler layouts, such as navigation menus or aligning items in a single row. 
      However, when you need to create more intricate designs, CSS Grid is the better choice.</p>
      <p>In many cases, you can use both systems together to create responsive and flexible layouts. 
      For example, you might use Grid to define the overall layout and Flexbox for aligning items within a grid cell.</p>
      <p>Ultimately, the choice between Grid and Flexbox depends on your specific layout needs and preferences. 
      Both are essential tools in modern web development.</p>
    `, 
  },
];

export default function Page({ params }) {

  const post = blogData.find((blog) => blog.slug === params.slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto p-6">
   
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600">The blog post you&apos;re looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
     
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between text-gray-500 text-sm mb-4">
        <span>{post.date}</span>
        <span>{post.author}</span>
      </div>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
