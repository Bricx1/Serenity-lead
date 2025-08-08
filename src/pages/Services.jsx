import { useEffect, useState } from 'react';

// Lucide icons
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Clock,
  Award,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

// React Router
import { Link } from 'react-router-dom';

// Font Awesome icons
import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from 'react-icons/fa';

// Inline RecoveryQuest Components
const ScenarioCard = ({ scenario, onChoice }) => {
  return (
    <div className="text-center">
      <p className="text-lg text-gray-800 mb-6 leading-relaxed">
        {scenario.text}
      </p>
      <div className="space-y-3">
        {scenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice)}
            className="w-full p-4 bg-white border-2 border-teal-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-all duration-200 text-left"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const ReflectionModal = ({ onClose }) => {
  const [reflection, setReflection] = useState('');

  const handleSubmit = () => {
    console.log('User reflection:', reflection);
    onClose();
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-teal-800 mb-4">
        Take a moment to reflect
      </h3>
      <p className="text-gray-600 mb-6">
        How did that choice make you feel? What did you learn?
      </p>
      
      <textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full p-4 border border-gray-300 rounded-lg mb-6 h-32 resize-none focus:border-teal-500 focus:outline-none"
      />
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
        >
          Continue Journey
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
        >
          Skip Reflection
        </button>
      </div>
    </div>
  );
};

const RecoveryQuest = () => {
  const scenarios = [
    {
      id: "party-invite",
      text: "You get invited to a party where alcohol may be present. What do you do?",
      choices: [
        { text: "Decline and suggest coffee instead", next: "coffee-success", score: +1 },
        { text: "Say maybe and see how you feel", next: "temptation", score: 0 },
        { text: "Agree to go", next: "relapse", score: -1 },
      ],
    },
    {
      id: "coffee-success",
      text: "Your friend agrees to coffee. You feel proud of your decision.",
      reflection: true,
    },
    {
      id: "temptation",
      text: "You went but left early, feeling conflicted.",
      reflection: true,
    },
    {
      id: "relapse",
      text: "You gave in. It's okay — time to reset and try again.",
      restart: true,
    }
  ];

  const [currentId, setCurrentId] = useState("party-invite");
  const [score, setScore] = useState(0);

  const scenario = scenarios.find((s) => s.id === currentId);

  const handleChoice = (choice) => {
    setScore(prev => prev + (choice.score || 0));
    setCurrentId(choice.next);
  };

  const handleReflectionClose = () => {
    setCurrentId("party-invite");
    setScore(0);
  };

  if (!scenario) return <p className="text-center">Loading...</p>;

  return (
    <div className="min-h-[400px] bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Recovery Quest</h2>
      <p className="text-center text-sm text-gray-600 mb-2">Your Score: {score}</p>

      {scenario.reflection ? (
        <ReflectionModal onClose={handleReflectionClose} />
      ) : scenario.restart ? (
        <div className="text-center">
          <p className="text-lg text-gray-800 mb-6">{scenario.text}</p>
          <button
            onClick={handleReflectionClose}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Restart Quest
          </button>
        </div>
      ) : (
        <ScenarioCard scenario={scenario} onChoice={handleChoice} />
      )}
    </div>
  );
};

// Move data outside component to avoid dependency issues
const services = [
  {
    title: 'Counseling',
    icon: '👥',
    description: 'Individual and group therapy to support recovery.',
    features: ['Peer support groups', 'Substance abuse counseling', 'Crisis intervention'],
    linkText: 'Learn More',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop'
  },
  {
    title: 'Medication‑Assisted Treatment (MAT)',
    icon: '💊',
    description: 'FDA-approved medications like methadone combined with therapy.',
    features: ['Medical supervision', 'Dose adjustments', 'Behavioral counseling'],
    linkText: 'Learn More',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
  },
  {
    title: 'Family Reunification',
    icon: '👨‍👩‍👧‍👦',
    description: 'Rebuild family relationships with structured therapeutic support.',
    features: ['Family therapy sessions', 'Communication workshops', 'Parenting skills'],
    linkText: 'Learn More',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop'
  },
  {
    title: 'Aftercare & Peer Support',
    icon: '🤝',
    description: 'Ongoing support post-treatment including mentoring and relapse prevention.',
    features: ['Peer support', 'Recovery education', 'Case coordination'],
    linkText: 'Learn More',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    age: "34",
    treatment: "MAT Program",
    quote: "The staff at Serenity gave me hope when I had none. Their comprehensive approach helped me rebuild my life and reconnect with my children.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Michael R.",
    age: "28",
    treatment: "Counseling & Peer Support",
    quote: "Two years clean thanks to this program. The peer support groups showed me I wasn't alone in this journey.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Jennifer L.",
    age: "41",
    treatment: "Family Reunification",
    quote: "Not only did they help me recover, but they helped repair the relationships that mattered most to me.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  }
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    caption: "Group therapy session"
  },
  {
    url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
    caption: "Individual counseling"
  },
  {
    url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    caption: "Family therapy workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    caption: "Medical consultation"
  }
];

const patientJourneys = [
  {
    id: 1,
    name: 'Sarah M.',
    age: 34,
    phase: 'Recovery Phase 3',
    daysClean: 127,
    nextAppointment: 'Tomorrow 2:00 PM',
    successRate: 85,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face',
    milestones: [
      { task: 'Initial Assessment', date: '4 months ago', completed: true },
      { task: 'Treatment Planning', date: '3 months ago', completed: true },
      { task: 'Group Therapy Sessions', date: 'Ongoing', completed: true },
      { task: 'Family Counseling', date: 'Next week', completed: false }
    ]
  },
  {
    id: 2,
    name: 'Michael R.',
    age: 28,
    phase: 'Recovery Phase 2',
    daysClean: 89,
    nextAppointment: 'Friday 10:00 AM',
    successRate: 70,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    milestones: [
      { task: 'Initial Assessment', date: '3 months ago', completed: true },
      { task: 'Detox Program', date: '2 months ago', completed: true },
      { task: 'Individual Counseling', date: 'Ongoing', completed: true },
      { task: 'Peer Support Groups', date: 'This week', completed: false }
    ]
  },
  {
    id: 3,
    name: 'Jennifer L.',
    age: 41,
    phase: 'Aftercare Support',
    daysClean: 365,
    nextAppointment: 'Monthly Check-in',
    successRate: 95,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    milestones: [
      { task: 'Complete Treatment Program', date: '1 year ago', completed: true },
      { task: 'Family Reunification', date: '8 months ago', completed: true },
      { task: 'Job Placement Support', date: '6 months ago', completed: true },
      { task: 'Ongoing Peer Mentoring', date: 'Ongoing', completed: true }
    ]
  },
  {
    id: 4,
    name: 'David K.',
    age: 35,
    phase: 'Recovery Phase 1',
    daysClean: 45,
    nextAppointment: 'Monday 3:30 PM',
    successRate: 55,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    milestones: [
      { task: 'Medical Detox', date: '6 weeks ago', completed: true },
      { task: 'Stabilization', date: '1 month ago', completed: true },
      { task: 'Counseling Sessions', date: 'Ongoing', completed: false },
      { task: 'MAT Program', date: 'Next phase', completed: false }
    ]
  }
];

const stats = [
  { number: "2,500+", label: "Patients Helped", icon: Users },
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "95%", label: "Success Rate", icon: Award }
];

const Services = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [currentPatient, setCurrentPatient] = useState(0);
  const [, setAnimatedStats] = useState({ patients: 0, years: 0, success: 0 });
  const [, setProgressAnimation] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animate statistics counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          patients: Math.floor(2500 * progress),
          years: Math.floor(15 * progress),
          success: Math.floor(95 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats({ patients: 2500, years: 15, success: 95 });
        }
      }, increment);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  // Progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressAnimation(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials - Fixed dependency array
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array is fine since testimonials is now constant

  // Auto-rotate gallery images - Fixed dependency array  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array is fine since galleryImages is now constant

  // Auto-rotate patient stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPatient(prev => (prev + 1) % patientJourneys.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
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
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors transform hover:scale-105">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Rotating Gallery */}
      <div className="relative w-full max-w-7xl mx-auto px-4 pt-12">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-64 md:h-80">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentGalleryImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{img.caption}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentGalleryImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="bg-teal-600 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <stat.icon className="h-12 w-12 mb-4 text-teal-200 animate-pulse" />
                <div className="text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-200">{stat.label}</div>
                <div className="w-full bg-teal-700 rounded-full h-2 mt-3">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-2000 ease-out"
                    style={{ 
                      width: index === 0 ? '100%' : 
                             index === 1 ? '100%' : 
                             '95%' 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 text-gray-800 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Treatment Services</h1>
          <p className="text-lg text-gray-600">
            Personalized addiction recovery services including counseling, MAT,
            family therapy, peer support, and aftercare.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 mt-12 px-4 grid-cols-1 md:grid-cols-2">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-5xl bg-white/90 p-2 rounded-full">
                  {svc.icon}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3">{svc.title}</h2>
                <p className="text-gray-600 mb-4">{svc.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                  {svc.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="w-full px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                  {svc.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Journey Automation */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Patient Recovery Journey
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setCurrentPatient(prev => 
                  prev === 0 ? patientJourneys.length - 1 : prev - 1
                )}
                className="p-3 rounded-full bg-teal-100 hover:bg-teal-200 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-teal-600" />
              </button>
              
              <div className="flex-1 mx-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <img
                      src={patientJourneys[currentPatient].image}
                      alt={patientJourneys[currentPatient].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-teal-500 shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      {patientJourneys[currentPatient].daysClean} days
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {patientJourneys[currentPatient].name}
                  </h3>
                  <div className="text-teal-600 font-semibold mb-2">
                    {patientJourneys[currentPatient].phase}
                  </div>
                  <div className="text-sm text-gray-600">
                    Age {patientJourneys[currentPatient].age} • Next: {patientJourneys[currentPatient].nextAppointment}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Recovery Progress</span>
                    <span>{patientJourneys[currentPatient].successRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${patientJourneys[currentPatient].successRate}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-teal-600" />
                    Treatment Milestones
                  </h4>
                  {patientJourneys[currentPatient].milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        milestone.completed 
                          ? 'bg-green-50 border-l-4 border-green-500' 
                          : 'bg-gray-50 border-l-4 border-gray-300'
                      }`}
                    >
                      <div className={`flex-shrink-0 ${milestone.completed ? 'animate-bounce' : ''}`}>
                        {milestone.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <Clock className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className={`font-medium ${
                          milestone.completed ? 'text-green-800' : 'text-gray-600'
                        }`}>
                          {milestone.task}
                        </div>
                        <div className="text-sm text-gray-500">{milestone.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setCurrentPatient(prev => 
                  (prev + 1) % patientJourneys.length
                )}
                className="p-3 rounded-full bg-teal-100 hover:bg-teal-200 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-teal-600" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2">
              {patientJourneys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPatient(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPatient ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Patient Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Patient Success Stories</h2>
          
          <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentTestimonial(prev => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-teal-600" />
              </button>
              
              <div className="flex-1 mx-8">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].treatment}
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setCurrentTestimonial(prev => 
                  (prev + 1) % testimonials.length
                )}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-teal-600" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

     {/* Call to Action */}
<div className="bg-teal-600 text-white py-16">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
    <p className="text-xl text-teal-100 mb-8">
      Our compassionate team is here to support you every step of the way.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
        Schedule Consultation
      </button>

      {/* Download Brochure button */}
      <a
        href="/Serenity-Brochure-High-Res_compressed.pdf"
        download
        className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors"
      >
        Download Brochure
      </a>
    </div>
  </div>
</div>

{/* Recovery Quest Game Section */}
<div className="bg-gradient-to-br from-blue-100 to-white py-16">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
      🎮 Recovery Quest: Make Empowered Decisions
    </h2>
    <RecoveryQuest />
  </div>
  
</div>

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
    </div>
  );
};

export default Services;