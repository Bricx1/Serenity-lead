import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from 'react-icons/fa';

const values = [
  { title: 'Compassion', desc: 'We treat every individual with empathy, understanding, and kindness.' },
  { title: 'Integrity', desc: 'We uphold the highest standards of honesty, accountability, and ethics.' },
  { title: 'Excellence', desc: 'We strive to deliver the highest quality of care and continuous improvement.' },
  { title: 'Empowerment', desc: 'We help individuals build the skills and confidence to achieve lasting recovery.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 text-gray-800">
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
              <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">Our Blogs </Link>
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-green-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Serenity Rehabilitation Center</h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Empowering individuals and families through evidence-based addiction treatment and compassionate care in a safe and supportive environment.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At Serenity Rehabilitation Center, our mission is to provide high-quality, evidence-based addiction treatment
          that empowers individuals to reclaim their lives. We treat every client with dignity and
          respect, supporting their recovery journey with compassion, integrity, and excellence in care.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 mb-6">
            Serenity offers a full continuum of addiction treatment services, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Medication-Assisted Treatment (MAT) using Methadone and Buprenorphine</li>
            <li>Individual and group therapy sessions</li>
            <li>Family counseling and reunification services</li>
            <li>Case management and support services</li>
            <li>Peer coaching and aftercare support</li>
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((val, i) => (
            <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-700">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Licensed Statement */}
      <section className="bg-teal-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Licensed. Accredited. Trusted.</h2>
          <p className="text-lg sm:text-xl font-light">
            Serenity is a state-licensed, CARF-accredited treatment facility with a proven track record of helping individuals overcome addiction.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Our caring staff is here 24/7 to support your journey to recovery. Reach out today for a confidential assessment.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="tel:248-838-3686" className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
            📞 Call Now: (248) 838-3686
          </a>
          <Link to="/services" className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition">
            View Our Services
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4ecde6] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Branding + Social */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">Serenity</h2>
            <p className="text-sm mb-4">Copyright © 2025 Serenity. All rights reserved.</p>
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <FaDribbble />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="mailto:info@serenityrehab.com" aria-label="Send Email">
                <FaPaperPlane />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About us</Link></li>
              <li><Link to="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:underline">Help center</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of service</Link></li>
              <li><Link to="/legal" className="hover:underline">Legal</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy policy</Link></li>
              <li><Link to="/status" className="hover:underline">Status</Link></li>
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
    </div>
  );
};

export default About;