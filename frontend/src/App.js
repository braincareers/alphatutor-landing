import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { 
  Header, 
  Homepage, 
  ComingSoonPage,
  CourseDetailPage,
  PracticePage,
  LoginModal,
  SignupModal,
  ProfilePage,
  TokenPage,
  Footer
} from './components';

// Main App Context for user state management
export const AppContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [userProgress, setUserProgress] = useState({});

  // Mock user login
  const login = (userData) => {
    const mockUser = {
      id: 1,
      name: userData.name || 'John Doe',
      email: userData.email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      level: 'Intermediate',
      totalPoints: 12450,
      streakDays: 7
    };
    setUser(mockUser);
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const logout = () => {
    setUser(null);
    setUserProgress({});
  };

  const updateProgress = (subjectId, lessonId, progress) => {
    setUserProgress(prev => ({
      ...prev,
      [`${subjectId}-${lessonId}`]: progress
    }));
  };

  return (
    <AppContext.Provider value={{
      user,
      login,
      logout,
      userProgress,
      updateProgress,
      showLoginModal,
      setShowLoginModal,
      showSignupModal,
      setShowSignupModal
    }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/math" element={<ComingSoonPage title="Math" />} />
            <Route path="/science" element={<ComingSoonPage title="Science" />} />
            <Route path="/computing" element={<ComingSoonPage title="Computing" />} />
            <Route path="/arts" element={<ComingSoonPage title="Arts & Humanities" />} />
            <Route path="/economics" element={<ComingSoonPage title="Economics & Test Prep" />} />
            <Route path="/token" element={<TokenPage />} />
            <Route path="/course/:subject/:courseId" element={<CourseDetailPage />} />
            <Route path="/practice/:subject/:lessonId" element={<PracticePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
          
          {showLoginModal && <LoginModal />}
          {showSignupModal && <SignupModal />}
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;