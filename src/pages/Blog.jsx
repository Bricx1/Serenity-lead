// React Router
import { Link } from 'react-router-dom';

// Lucide icon(s)
import { Heart } from 'lucide-react';

// Font Awesome icons
import {
  FaArrowRight,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from 'react-icons/fa';


// ...rest of the component code

const blogPosts = [
  {
    id: 1,
    title: '30-Day Cognitive Behavioral Therapy Transformation',
    category: 'Mental Health',
    image: '/image.png',
    excerpt: 'Discover how CBT helps reshape negative thoughts and foster recovery in addiction treatment.',
    date: 'Jul 2025',
  },
  {
    id: 2,
    title: '14 Subtle Cocaine Addiction Symptoms and Healing Steps',
    category: 'Addiction Recovery',
    image: '/blog/cocaine.webp',
    excerpt: 'Spot early signs of cocaine use and learn actionable recovery plans through therapy and support.',
    date: 'Jul 2025',
  },
  {
    id: 3,
    title: 'Difference Between Crack and Coke & Key Comparison',
    category: 'Awareness',
    image: '/blog/crack-vs-coke.webp',
    excerpt: 'Explore how these two substances differ and the distinct risks they carry.',
    date: 'Jul 2025',
  },
  {
    id: 4,
    title: '7 Effects of Alcohol on Your Brain, Liver, and Nerve System',
    category: 'Alcohol Use',
    image: '/blog/alcohol.webp',
    excerpt: 'Learn how chronic alcohol intake affects your mental, liver, and neurological health.',
    date: 'Jun 2025',
  },
  {
    id: 5,
    title: 'Unsure About Wearing Face Mask? Here’s How and Why',
    category: 'Health',
    image: '/blog/mask.webp',
    excerpt: 'Understand face mask protection for yourself and others in post-pandemic public safety.',
    date: 'Jun 2025',
  },
  {
    id: 6,
    title: '6 Tips to Protect Your Mental Health When You’re Sick',
    category: 'Self Care',
    image: '/blog/mental-sick.webp',
    excerpt: 'Stay emotionally balanced during physical illness with these practical wellness tips.',
    date: 'Jun 2025',
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
       {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-teal-500 rounded-full p-2 mr-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Serenity</span>
                <div className="text-sm text-teal-600 font-medium">Rehabilitation Center, Inc.</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/*" className="text-gray-700 hover:text-teal-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact Us</Link>
               <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">Our Blogs</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <div className="font-semibold text-teal-600">24/7 Crisis Support</div>
                <div className="text-gray-600">248-838-3686</div>
              </div>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold mb-2">Health Essentials</h1>
        <p className="text-sm text-gray-500">Home / Blog</p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-teal-600 font-medium text-sm hover:underline">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center pb-16">
        <ul className="flex gap-2">
          <li><button className="px-3 py-1 rounded bg-teal-600 text-white">1</button></li>
          <li><button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">2</button></li>
          <li><button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">→</button></li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-[#4ecde6] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding + Social */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Serenity</h2>
          <p className="text-sm mb-4">Copyright © 2025 Serenity. All rights reserved.</p>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Dribbble"><FaDribbble /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/blogs" className="hover:underline">Blog</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/serenity-support" className="hover:underline">Help center</Link></li>
<li><Link to="/serenity-support?section=terms" className="hover:underline">Terms</Link></li>
<li><Link to="/serenity-support?section=privacy" className="hover:underline">Privacy</Link></li>
<li><Link to="/serenity-support?section=legal" className="hover:underline">Legal</Link></li>
<li><Link to="/serenity-support?section=status" className="hover:underline">Status</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Stay up to date</h4>
          <form className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 text-gray-800 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#1e3369] hover:bg-[#1a2c59] p-2 text-white"
            >
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>

      </div>
    </footer>
    </main>
  );
};

export default Blog;
