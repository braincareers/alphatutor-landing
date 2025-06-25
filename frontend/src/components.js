import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from './App';

// Header Component
export const Header = () => {
  const { user, logout, setShowLoginModal, setShowSignupModal } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <nav className="hidden md:flex space-x-2">
            <Link 
              to="/math" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium group"
            >
              <svg className="w-4 h-4 text-blue-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Math</span>
            </Link>
            <Link 
              to="/science" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium group"
            >
              <svg className="w-4 h-4 text-green-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Science</span>
            </Link>
            <Link 
              to="/computing" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium group"
            >
              <svg className="w-4 h-4 text-indigo-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>Computing</span>
            </Link>
            <Link 
              to="/arts" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium group"
            >
              <svg className="w-4 h-4 text-pink-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Arts</span>
            </Link>
            <Link 
              to="/economics" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium group"
            >
              <svg className="w-4 h-4 text-yellow-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>Economics</span>
            </Link>
            <Link 
              to="/token" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 transition-all duration-200 font-medium group border border-purple-200"
            >
              <svg className="w-4 h-4 text-purple-600 group-hover:text-purple-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>Token</span>
            </Link>
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/math" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Math</span>
              </Link>
              <Link 
                to="/science" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="font-medium">Science</span>
              </Link>
              <Link 
                to="/computing" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="font-medium">Computing</span>
              </Link>
              <Link 
                to="/arts" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-medium">Arts & Humanities</span>
              </Link>
              <Link 
                to="/economics" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-medium">Economics & Test Prep</span>
              </Link>
              <Link 
                to="/token" 
                className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 rounded-lg transition-all duration-200 border border-purple-200"
                onClick={() => setShowMobileMenu(false)}
              >
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-medium">Token</span>
              </Link>

              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {user ? (
                  <div className="space-y-2">
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                      <span className="font-medium">{user.name}</span>
                    </Link>
                    <button 
                      onClick={() => { logout(); setShowMobileMenu(false); }}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg w-full text-left"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => { setShowLoginModal(true); setShowMobileMenu(false); }}
                      className="w-full text-left px-4 py-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => { setShowSignupModal(true); setShowMobileMenu(false); }}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium"
                    >
                      Start Learning
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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

// Coming Soon Page Component
export const ComingSoonPage = ({ title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <span className="text-white font-bold text-5xl">α</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            We're working hard to bring you an amazing AI-powered learning experience for {title}. 
            Stay tuned for revolutionary personalized education!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get notified when {title} launches
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium transition-all duration-200">
              Notify Me
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Homepage</span>
          </Link>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>🚀 AI-Powered Learning</span>
            <span>📚 Personalized Curriculum</span>
            <span>⚡ Real-time Adaptation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Homepage Component
export const Homepage = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Revolutionizing Education */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Revolutionizing Education
              </h1>
              <p className="text-xl mb-8 opacity-90">
                AlphaTutor is an AI-powered, ultra-personalized learning platform designed to deliver high-quality, on-demand education. 
                It combines structured test preparation for exams like the SAT, ACT, and GRE with a dynamic, user-driven engine that can 
                generate entire micro-courses on any topic.
              </p>
              <p className="text-lg mb-8 opacity-80">
                By leveraging advanced AI and a scalable cloud architecture, AlphaTutor adapts its teaching style, pace, and content 
                in real-time to match each learner's unique profile, making elite-level tutoring accessible and affordable for everyone.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  See How It Works
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Join the Revolution
                </button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1632830049084-308fd151d8ae" 
                alt="AI-powered learning revolution" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EdTech Market Growth */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            EdTech Market Growth Projection
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            The global EdTech market is experiencing exponential growth, driven by the demand for accessible and personalized learning solutions. 
            AlphaTutor is positioned to capture a significant share of this expanding market.
          </p>
          
          {/* Market Growth Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$350B</div>
              <div className="text-gray-700">Market Size by 2025</div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">16.3%</div>
              <div className="text-gray-700">Annual Growth Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">2B+</div>
              <div className="text-gray-700">Potential Learners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Milestones */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Target Milestones (Year 1)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">1M+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Active Users</h3>
              <p className="text-gray-600">Building a massive community of AI-powered learners</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">10%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free-to-Premium Conversion</h3>
              <p className="text-gray-600">Converting users with exceptional AI tutoring value</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">99.9%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Platform Uptime</h3>
              <p className="text-gray-600">Ensuring reliable access to AI-powered education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Target Audience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Primary Target Audience
          </h2>
          <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
            AlphaTutor serves a diverse user base, with a primary focus on students preparing for standardized tests and lifelong learners seeking knowledge on specific topics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">High School Students</h3>
              <p className="text-gray-600 text-sm">SAT, ACT, AP exam preparation with personalized AI guidance</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">College Students</h3>
              <p className="text-gray-600 text-sm">GRE, LSAT, MCAT prep and supplementary course material</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Professionals</h3>
              <p className="text-gray-600 text-sm">Skill development and continuous learning for career advancement</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lifelong Learners</h3>
              <p className="text-gray-600 text-sm">Custom micro-courses on any topic of personal interest</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: The AI Learning Cycle */}
      <section id="how-it-works" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works: The AI Learning Cycle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prompt or Assess</h3>
              <p className="text-gray-600">User enters a topic to learn or takes a diagnostic test.</p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Generates & Adapts</h3>
              <p className="text-gray-600">Our engine creates a custom curriculum with lessons and quizzes.</p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-orange-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Engage & Learn</h3>
              <p className="text-gray-600">Student interacts with content, takes quizzes, and asks questions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyze & Refine</h3>
              <p className="text-gray-600">The system analyzes performance and adjusts the learning path in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powered by a Modern Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Frontend</h3>
              <p className="text-sm text-gray-600">React & Next.js</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Backend</h3>
              <p className="text-sm text-gray-600">Node.js/Python</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">AI Engine</h3>
              <p className="text-sm text-gray-600">GPT-4 & Claude 3.5</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Databases</h3>
              <p className="text-sm text-gray-600">PostgreSQL & Pinecone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Revenue Streams
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            A diversified monetization strategy ensures sustainability and growth, while keeping core learning features accessible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Freemium Model</h3>
              <p className="text-gray-600">Basic AI tutoring free, premium features for advanced personalization</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Institutional Licensing</h3>
              <p className="text-gray-600">Schools and universities can license our AI platform for their students</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Certification Programs</h3>
              <p className="text-gray-600">Verified credentials and certificates for completed courses and achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Competitive Advantage
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hyper-Personalization</h3>
                  <p className="text-lg text-gray-700">
                    AI-driven adaptive learning paths and dynamic content generation cater to individual user needs, 
                    a significant improvement over static content libraries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalability & Affordability</h3>
                  <p className="text-lg text-gray-700">
                    Our serverless architecture and automation-first approach enable us to serve millions of users 
                    at a fraction of the traditional cost.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Demand Course Creation</h3>
                  <p className="text-lg text-gray-700">
                    Unlike any competitor, users can generate entire micro-courses on demand, moving beyond pre-defined 
                    curricula to explore any topic of interest instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who are already experiencing the power of AI-driven personalized education.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Start Learning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Demo
            </button>
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

// Placeholder components for existing functionality
export const CourseDetailPage = () => <ComingSoonPage title="Course Details" />;
export const PracticePage = () => <ComingSoonPage title="Practice Mode" />;
export const ProfilePage = () => <ComingSoonPage title="User Profile" />;