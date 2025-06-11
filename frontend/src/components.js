import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from './App';

// Header Component
export const Header = () => {
  const { user, logout, setShowLoginModal, setShowSignupModal } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">α</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AlphaTutor.ai</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/math" className="text-gray-700 hover:text-purple-600 font-medium">Math</Link>
            <Link to="/science" className="text-gray-700 hover:text-purple-600 font-medium">Science</Link>
            <Link to="/computing" className="text-gray-700 hover:text-purple-600 font-medium">Computing</Link>
            <Link to="/arts" className="text-gray-700 hover:text-purple-600 font-medium">Arts & Humanities</Link>
            <Link to="/economics" className="text-gray-700 hover:text-purple-600 font-medium">Economics</Link>
            <Link to="/token" className="text-gray-700 hover:text-purple-600 font-medium">Token</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ask AI tutor anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                >
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="hidden md:block">{user.name}</span>
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 font-medium"
                >
                  Start Learning
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Token Page Component
export const TokenPage = () => {
  useEffect(() => {
    // Redirect to external token site
    window.location.href = 'https://token.alphatutor.ai';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <span className="text-white font-bold text-2xl">α</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Redirecting to Token Portal...</h2>
        <p className="text-gray-600 mb-4">
          You are being redirected to token.alphatutor.ai
        </p>
        <a 
          href="https://token.alphatutor.ai" 
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          Click here if you're not redirected automatically
        </a>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">α</span>
              </div>
              <span className="text-xl font-bold">AlphaTutor.ai</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered ultra-personalized virtual tutor delivering high-quality, on-demand education 
              with real-time cognitive adaptation and automated micro-course generation.
            </p>
            
            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Contact Support</h3>
              <a 
                href="mailto:Support@AlphaTutor.ai" 
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Support@AlphaTutor.ai
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/math" className="text-gray-300 hover:text-white">Math</Link></li>
              <li><Link to="/science" className="text-gray-300 hover:text-white">Science</Link></li>
              <li><Link to="/computing" className="text-gray-300 hover:text-white">Computing</Link></li>
              <li><Link to="/arts" className="text-gray-300 hover:text-white">Arts & Humanities</Link></li>
              <li><Link to="/economics" className="text-gray-300 hover:text-white">Economics</Link></li>
              <li><Link to="/token" className="text-gray-300 hover:text-white">Token</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* X (Twitter) */}
              <a 
                href="https://x.com/alphatutor_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://facebook.com/alphatutor.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/alphatutor.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 20.312c-3.347 0-6.059-2.711-6.059-6.059 0-3.347 2.711-6.058 6.059-6.058 3.347 0 6.058 2.711 6.058 6.058 0 3.347-2.711 6.059-6.058 6.059zm7.719 0c-3.347 0-6.059-2.711-6.059-6.059 0-3.347 2.711-6.058 6.059-6.058 3.347 0 6.058 2.711 6.058 6.058 0 3.347-2.711 6.059-6.058 6.059z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-r-md hover:from-purple-700 hover:to-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 AlphaTutor.ai. All rights reserved. Powered by Advanced AI Technology.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">AI Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Homepage Component
export const Homepage = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered Ultra-Personalized Learning
              </h1>
              <p className="text-xl mb-8 opacity-90">
                AlphaTutor.ai combines real-time cognitive adaptation with advanced AI to deliver personalized education. Master anything, anytime with automated micro-course generation and structured test prep.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  {user ? 'Continue Your Journey' : 'Start AI Tutoring'}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Explore Test Prep
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Tutor Online</span>
                </div>
                <div>SAT • GRE • LSAT Prep</div>
                <div>Custom Courses</div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1632830049084-308fd151d8ae" 
                alt="AI-powered learning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powered by Advanced AI Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Adaptation</h3>
              <p className="text-gray-600">AI continuously adapts to your learning style and pace</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Course Generation</h3>
              <p className="text-gray-600">Instantly create micro-courses on any topic you want to learn</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Test Prep Excellence</h3>
              <p className="text-gray-600">Structured preparation for SAT, GRE, LSAT and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Learn Any Subject with AI Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">2M+</div>
              <div className="text-gray-700">Students Powered by AI</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-700">Test Score Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-700">AI Tutor Availability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Subject Card Component
const SubjectCard = ({ subject }) => {
  return (
    <Link 
      to={subject.path} 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group border border-gray-200 hover:border-purple-200"
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img 
          src={subject.image} 
          alt={subject.name}
          className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{subject.name}</h3>
      <p className="text-gray-600 mb-4">{subject.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-purple-600 font-medium">
          {subject.courseCount} AI Courses →
        </span>
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-2 py-1 rounded-full text-xs font-medium text-purple-700">
          AI Powered
        </div>
      </div>
    </Link>
  );
};

// Subject data
const subjects = [
  {
    id: 'math',
    name: 'Math',
    path: '/math',
    description: 'AI-guided algebra, geometry, calculus, and statistics with personalized learning paths.',
    image: 'https://images.unsplash.com/photo-1573871014706-263f4dfec410',
    courseCount: 15
  },
  {
    id: 'science',
    name: 'Science',
    path: '/science',
    description: 'Interactive biology, chemistry, physics with AI-generated experiments and explanations.',
    image: 'https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg',
    courseCount: 12
  },
  {
    id: 'computing',
    name: 'Computing',
    path: '/computing',
    description: 'AI-assisted programming, algorithms, and computer science with real-time feedback.',
    image: 'https://images.pexels.com/photos/9784250/pexels-photo-9784250.jpeg',
    courseCount: 8
  },
  {
    id: 'arts',
    name: 'Arts & Humanities',
    path: '/arts',
    description: 'AI-enhanced history, literature, and cultural studies with immersive learning.',
    image: 'https://images.unsplash.com/photo-1697992350218-f0852fcc95ba',
    courseCount: 10
  },
  {
    id: 'economics',
    name: 'Economics & Test Prep',
    path: '/economics',
    description: 'Economics fundamentals plus SAT, GRE, LSAT prep with AI-powered practice.',
    image: 'https://images.pexels.com/photos/6289058/pexels-photo-6289058.jpeg',
    courseCount: 6
  }
];

// Math Page Component
export const MathPage = () => {
  return (
    <SubjectPage 
      subject="Math"
      description="Build mathematical mastery with AI-powered personalized learning paths from basic arithmetic to advanced calculus."
      courses={mathCourses}
      bgColor="bg-blue-50"
      textColor="text-blue-600"
    />
  );
};

// Science Page Component
export const SciencePage = () => {
  return (
    <SubjectPage 
      subject="Science"
      description="Explore scientific concepts with AI-generated experiments and adaptive learning through biology, chemistry, and physics."
      courses={scienceCourses}
      bgColor="bg-purple-50"
      textColor="text-purple-600"
    />
  );
};

// Computing Page Component
export const ComputingPage = () => {
  return (
    <SubjectPage 
      subject="Computing"
      description="Master programming and computer science with AI tutoring, real-time code feedback, and personalized challenges."
      courses={computingCourses}
      bgColor="bg-indigo-50"
      textColor="text-indigo-600"
    />
  );
};

// Arts Page Component
export const ArtsPage = () => {
  return (
    <SubjectPage 
      subject="Arts & Humanities"
      description="Dive deep into history, literature, and culture with AI-enhanced immersive learning experiences."
      courses={artsCourses}
      bgColor="bg-pink-50"
      textColor="text-pink-600"
    />
  );
};

// Economics Page Component
export const EconomicsPage = () => {
  return (
    <SubjectPage 
      subject="Economics & Test Prep"
      description="Master economic principles and excel in standardized tests with AI-powered preparation for SAT, GRE, LSAT and more."
      courses={economicsCourses}
      bgColor="bg-yellow-50"
      textColor="text-yellow-600"
    />
  );
};

// Generic Subject Page Component
const SubjectPage = ({ subject, description, courses, bgColor, textColor }) => {
  const { user, userProgress } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${bgColor} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">AI Tutor Active</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{subject}</h1>
          <p className="text-xl text-gray-700 max-w-3xl">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              subject={subject.toLowerCase().replace(' & ', '-')}
              progress={user ? userProgress[`${subject.toLowerCase()}-${course.id}`] || 0 : 0}
              textColor={textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course, subject, progress, textColor }) => {
  return (
    <Link 
      to={`/course/${subject}/${course.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group border border-gray-200 hover:border-purple-200"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-2 py-1 rounded-full text-xs font-medium text-purple-700">
            AI
          </div>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">AI-Tracked Progress</span>
              <span className={textColor}>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${textColor.replace('text-', 'bg-')} h-2 rounded-full transition-all`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.lessons} AI lessons</span>
          <span className={`${textColor} font-medium`}>{course.level}</span>
        </div>
      </div>
    </Link>
  );
};

// Mock course data
const mathCourses = [
  {
    id: 'basic-algebra',
    title: 'AI Algebra Mastery',
    description: 'Personalized algebra learning with AI tutoring and adaptive problem generation.',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
    lessons: 24,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI'
  },
  {
    id: 'geometry',
    title: 'Interactive AI Geometry',
    description: 'Visual geometry learning with AI-generated proofs and interactive demonstrations.',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    lessons: 32,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/M64HUEBCOZM'
  },
  {
    id: 'calculus',
    title: 'Advanced AI Calculus',
    description: 'Master calculus with AI-powered step-by-step solutions and real-time feedback.',
    thumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop',
    lessons: 45,
    level: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/WUvTyaaNkzM'
  }
];

const scienceCourses = [
  {
    id: 'biology-basics',
    title: 'AI Biology Explorer',
    description: 'Interactive biology with AI-generated virtual labs and personalized learning paths.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    lessons: 28,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/QnQe0xW_JY4'
  },
  {
    id: 'chemistry',
    title: 'Smart Chemistry Lab',
    description: 'AI-powered chemistry with virtual experiments and personalized reaction analysis.',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
    lessons: 35,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/FSyAehMdpyI'
  },
  {
    id: 'physics',
    title: 'AI Physics Mastery',
    description: 'Advanced physics concepts with AI simulations and adaptive problem solving.',
    thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
    lessons: 42,
    level: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/ZM8ECpBuQYE'
  }
];

const computingCourses = [
  {
    id: 'intro-programming',
    title: 'AI Programming Mentor',
    description: 'Learn programming with AI code review, suggestions, and personalized challenges.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    lessons: 20,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg'
  },
  {
    id: 'algorithms',
    title: 'Smart Algorithm Design',
    description: 'Master algorithms with AI-generated problems and real-time optimization feedback.',
    thumbnail: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop',
    lessons: 30,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/8hly31xKli0'
  }
];

const artsCourses = [
  {
    id: 'world-history',
    title: 'AI History Journey',
    description: 'Immersive world history with AI-generated scenarios and personalized timelines.',
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    lessons: 38,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/Yocja_N5s1I'
  }
];

const economicsCourses = [
  {
    id: 'microeconomics',
    title: 'Smart Economics & SAT Prep',
    description: 'Economics mastery combined with AI-powered SAT, GRE, and LSAT preparation.',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
    lessons: 25,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/3ez10ADR_gM'
  }
];

// Course Detail Page Component
export const CourseDetailPage = () => {
  const { subject, courseId } = useParams();
  const { user, updateProgress } = useContext(AppContext);
  const [currentLesson, setCurrentLesson] = useState(0);
  
  // Get course data based on subject and courseId
  const getCourseData = () => {
    const allCourses = {
      math: mathCourses,
      science: scienceCourses,
      computing: computingCourses,
      'arts-humanities': artsCourses,
      'economics-test-prep': economicsCourses
    };
    
    const subjectCourses = allCourses[subject] || [];
    return subjectCourses.find(course => course.id === courseId);
  };

  const course = getCourseData();
  
  if (!course) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
        <Link to="/" className="text-purple-600 hover:text-purple-700">← Back to home</Link>
      </div>
    </div>;
  }

  const handleLessonComplete = () => {
    if (user) {
      const progress = Math.min(100, ((currentLesson + 1) / course.lessons) * 100);
      updateProgress(subject, courseId, Math.round(progress));
    }
    if (currentLesson < course.lessons - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to={`/${subject}`} className="text-purple-600 hover:text-purple-700 mb-4 inline-block">
            ← Back to {subject}
          </Link>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">AI Tutor Ready</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-xl text-gray-700">{course.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="w-full h-96"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  AI Lesson {currentLesson + 1}: {course.title} Fundamentals
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>AI Insight:</strong> Based on your learning pattern, this lesson is optimized for your current skill level. 
                    The AI has adapted the content complexity to match your progress.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleLessonComplete}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-700"
                  >
                    {currentLesson < course.lessons - 1 ? 'Next AI Lesson' : 'Complete Course'}
                  </button>
                  <Link
                    to={`/practice/${subject}/${courseId}`}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                  >
                    AI Practice
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course Progress Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">AI Learning Progress</h3>
            
            {user && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>AI-Tracked Progress</span>
                  <span>{Math.round(((currentLesson + 1) / course.lessons) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentLesson + 1) / course.lessons) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  AI adapts based on your performance
                </div>
              </div>
            )}

            <div className="space-y-2">
              {Array.from({ length: course.lessons }, (_, i) => (
                <div
                  key={i}
                  className={`flex items-center space-x-3 p-2 rounded ${
                    i === currentLesson ? 'bg-purple-50 border border-purple-200' : 
                    i < currentLesson ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                    i < currentLesson ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' :
                    i === currentLesson ? 'bg-purple-100 text-purple-600 border border-purple-300' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {i < currentLesson ? '✓' : i + 1}
                  </div>
                  <span className={`text-sm ${
                    i === currentLesson ? 'font-medium text-purple-600' : 'text-gray-700'
                  }`}>
                    AI Lesson {i + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">AI Recommendations</h4>
              <p className="text-sm text-gray-600">
                Based on your progress, the AI suggests focusing on practice problems after lesson 3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Practice Page Component
export const PracticePage = () => {
  const { subject, lessonId } = useParams();
  const { user } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const practiceQuestions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      aiHint: "Try breaking this down step by step. Add each number individually."
    },
    {
      question: "What is the square root of 16?",
      options: ["2", "3", "4", "5"],
      correct: 2,
      aiHint: "Think about which number multiplied by itself equals 16."
    },
    {
      question: "What is 10 × 5?",
      options: ["45", "50", "55", "60"],
      correct: 1,
      aiHint: "Multiplication is repeated addition. Try adding 10 five times."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === practiceQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Practice Complete!</h2>
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {score}/{practiceQuestions.length}
          </div>
          <p className="text-gray-600 mb-4">
            You got {score} out of {practiceQuestions.length} questions correct!
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700">
              <strong>AI Analysis:</strong> Based on your performance, you're ready for the next lesson. 
              The AI has identified areas for improvement and will adjust future content accordingly.
            </p>
          </div>
          <Link
            to={`/course/${subject}/${lessonId}`}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-700"
          >
            Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to={`/course/${subject}/${lessonId}`} className="text-purple-600 hover:text-purple-700 mb-4 inline-block">
            ← Back to Course
          </Link>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">AI Practice Mode Active</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI-Generated Practice Questions</h1>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {practiceQuestions.length}
            </span>
            <span className="text-purple-600 font-medium">Score: {score}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6">
            {practiceQuestions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3 mb-6">
            {practiceQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-gray-900 mb-2">AI Hint</h3>
            <p className="text-sm text-gray-700">
              {practiceQuestions[currentQuestion].aiHint}
            </p>
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-6 py-2 rounded-md font-medium ${
              selectedAnswer !== null
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < practiceQuestions.length - 1 ? 'Next Question' : 'Complete Practice'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Login Modal Component
export const LoginModal = () => {
  const { login, setShowLoginModal, setShowSignupModal } = useContext(AppContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    login({ name: 'Google User', email: 'user@gmail.com' });
  };

  const handleFacebookLogin = () => {
    // Mock Facebook login
    login({ name: 'Facebook User', email: 'user@facebook.com' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign in to AlphaTutor.ai</h2>
          <button
            onClick={() => setShowLoginModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
          
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-blue-700 font-medium"
          >
            Start AI Learning
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => {
                setShowLoginModal(false);
                setShowSignupModal(true);
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Join AlphaTutor.ai
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Signup Modal Component
export const SignupModal = () => {
  const { login, setShowLoginModal, setShowSignupModal } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleGoogleSignup = () => {
    // Mock Google signup
    login({ name: 'Google User', email: 'user@gmail.com' });
  };

  const handleFacebookSignup = () => {
    // Mock Facebook signup
    login({ name: 'Facebook User', email: 'user@facebook.com' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Join AlphaTutor.ai</h2>
          <button
            onClick={() => setShowSignupModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Start your AI-powered learning journey with personalized tutoring and adaptive courses.
          </p>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign up with Google
          </button>
          
          <button
            onClick={handleFacebookSignup}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Sign up with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-blue-700 font-medium"
          >
            Begin AI Learning
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => {
                setShowSignupModal(false);
                setShowLoginModal(true);
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Profile Page Component
export const ProfilePage = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-6 mb-8">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {user.level} Learner
                </span>
                <span className="text-gray-600">
                  🔥 {user.streakDays} day AI streak
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">AI Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">{user.totalPoints}</div>
              <div className="text-gray-700">AI Learning Points</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-700">AI Courses Started</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
              <div className="text-gray-700">AI Courses Mastered</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent AI Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Completed AI Algebra lesson</span>
                  <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">AI generated custom practice set</span>
                  <span className="text-gray-500 text-sm ml-auto">1 day ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Achieved mastery in AI Biology</span>
                  <span className="text-gray-500 text-sm ml-auto">3 days ago</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Learning Insights</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">Personalized Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Focus on geometry proofs for 15 min daily</li>
                  <li>• Review chemistry equations before Friday</li>
                  <li>• Try advanced calculus problems next week</li>
                  <li>• Consider SAT prep course based on your progress</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Learning Pattern Analysis</h4>
                <p className="text-sm text-gray-700">
                  Your peak learning time: 7-9 PM. You perform 23% better with visual explanations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};