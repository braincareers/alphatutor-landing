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
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Khan Academy</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/math" className="text-gray-700 hover:text-green-600 font-medium">Math</Link>
            <Link to="/science" className="text-gray-700 hover:text-green-600 font-medium">Science</Link>
            <Link to="/computing" className="text-gray-700 hover:text-green-600 font-medium">Computing</Link>
            <Link to="/arts" className="text-gray-700 hover:text-green-600 font-medium">Arts & Humanities</Link>
            <Link to="/economics" className="text-gray-700 hover:text-green-600 font-medium">Economics</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for courses, topics, etc."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600"
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
                  className="px-4 py-2 text-green-600 hover:text-green-700 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Homepage Component
export const Homepage = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                For every student, every classroom. Real results.
              </h1>
              <p className="text-xl mb-8 opacity-90">
                We're a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  {user ? 'Continue Learning' : 'Learners start here'}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Teachers start here
                </button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1632830049084-308fd151d8ae" 
                alt="Student learning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Learn by subject
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">120M+</div>
              <div className="text-gray-700">Learners worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">70+</div>
              <div className="text-gray-700">Languages supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700">Free forever</div>
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
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
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
      <div className="text-green-600 font-medium">
        {subject.courseCount} courses →
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
    description: 'Algebra, geometry, trigonometry, precalculus, calculus, statistics, and more.',
    image: 'https://images.unsplash.com/photo-1573871014706-263f4dfec410',
    courseCount: 15
  },
  {
    id: 'science',
    name: 'Science',
    path: '/science',
    description: 'Biology, chemistry, physics, earth science, and more.',
    image: 'https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg',
    courseCount: 12
  },
  {
    id: 'computing',
    name: 'Computing',
    path: '/computing',
    description: 'Programming, computer science principles, and algorithms.',
    image: 'https://images.pexels.com/photos/9784250/pexels-photo-9784250.jpeg',
    courseCount: 8
  },
  {
    id: 'arts',
    name: 'Arts & Humanities',
    path: '/arts',
    description: 'World history, art history, grammar, and more.',
    image: 'https://images.unsplash.com/photo-1697992350218-f0852fcc95ba',
    courseCount: 10
  },
  {
    id: 'economics',
    name: 'Economics',
    path: '/economics',
    description: 'Microeconomics, macroeconomics, and finance.',
    image: 'https://images.pexels.com/photos/6289058/pexels-photo-6289058.jpeg',
    courseCount: 6
  }
];

// Math Page Component
export const MathPage = () => {
  return (
    <SubjectPage 
      subject="Math"
      description="Build a strong foundation in math with courses from basic arithmetic to advanced calculus."
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
      description="Explore the natural world through biology, chemistry, physics, and earth science."
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
      description="Learn programming, computer science principles, and algorithms."
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
      description="Dive into world history, art history, grammar, and cultural studies."
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
      subject="Economics"
      description="Understand economic principles, markets, and financial systems."
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
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
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
          <span className="text-sm text-gray-500">{course.lessons} lessons</span>
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
    title: 'Basic Algebra',
    description: 'Learn the fundamentals of algebraic expressions, equations, and problem-solving.',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
    lessons: 24,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI'
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Explore shapes, angles, area, volume, and geometric proofs.',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    lessons: 32,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/M64HUEBCOZM'
  },
  {
    id: 'calculus',
    title: 'Calculus',
    description: 'Master limits, derivatives, integrals, and their applications.',
    thumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop',
    lessons: 45,
    level: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/WUvTyaaNkzM'
  }
];

const scienceCourses = [
  {
    id: 'biology-basics',
    title: 'Biology Basics',
    description: 'Introduction to cells, genetics, evolution, and ecosystems.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    lessons: 28,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/QnQe0xW_JY4'
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Atoms, molecules, chemical reactions, and the periodic table.',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
    lessons: 35,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/FSyAehMdpyI'
  },
  {
    id: 'physics',
    title: 'Physics',
    description: 'Motion, forces, energy, waves, and the fundamental laws of nature.',
    thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
    lessons: 42,
    level: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/ZM8ECpBuQYE'
  }
];

const computingCourses = [
  {
    id: 'intro-programming',
    title: 'Intro to Programming',
    description: 'Learn the basics of programming with JavaScript.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    lessons: 20,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg'
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    description: 'Data structures, sorting, searching, and algorithm analysis.',
    thumbnail: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop',
    lessons: 30,
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/8hly31xKli0'
  }
];

const artsCourses = [
  {
    id: 'world-history',
    title: 'World History',
    description: 'From ancient civilizations to modern times.',
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    lessons: 38,
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/Yocja_N5s1I'
  }
];

const economicsCourses = [
  {
    id: 'microeconomics',
    title: 'Microeconomics',
    description: 'Supply and demand, market structures, and consumer behavior.',
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
      economics: economicsCourses
    };
    
    const subjectCourses = allCourses[subject] || [];
    return subjectCourses.find(course => course.id === courseId);
  };

  const course = getCourseData();
  
  if (!course) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
        <Link to="/" className="text-green-600 hover:text-green-700">← Back to home</Link>
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
          <Link to={`/${subject}`} className="text-green-600 hover:text-green-700 mb-4 inline-block">
            ← Back to {subject}
          </Link>
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
                  Lesson {currentLesson + 1}: {course.title} Fundamentals
                </h2>
                <div className="flex space-x-4">
                  <button
                    onClick={handleLessonComplete}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                  >
                    {currentLesson < course.lessons - 1 ? 'Next Lesson' : 'Complete Course'}
                  </button>
                  <Link
                    to={`/practice/${subject}/${courseId}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Practice
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course Progress Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
            
            {user && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{Math.round(((currentLesson + 1) / course.lessons) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentLesson + 1) / course.lessons) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {Array.from({ length: course.lessons }, (_, i) => (
                <div
                  key={i}
                  className={`flex items-center space-x-3 p-2 rounded ${
                    i === currentLesson ? 'bg-green-50 border border-green-200' : 
                    i < currentLesson ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                    i < currentLesson ? 'bg-green-600 text-white' :
                    i === currentLesson ? 'bg-green-100 text-green-600 border border-green-300' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {i < currentLesson ? '✓' : i + 1}
                  </div>
                  <span className={`text-sm ${
                    i === currentLesson ? 'font-medium text-green-600' : 'text-gray-700'
                  }`}>
                    Lesson {i + 1}
                  </span>
                </div>
              ))}
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
      correct: 1
    },
    {
      question: "What is the square root of 16?",
      options: ["2", "3", "4", "5"],
      correct: 2
    },
    {
      question: "What is 10 × 5?",
      options: ["45", "50", "55", "60"],
      correct: 1
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Complete!</h2>
          <div className="text-4xl font-bold text-green-600 mb-4">
            {score}/{practiceQuestions.length}
          </div>
          <p className="text-gray-600 mb-6">
            You got {score} out of {practiceQuestions.length} questions correct!
          </p>
          <Link
            to={`/course/${subject}/${lessonId}`}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to={`/course/${subject}/${lessonId}`} className="text-green-600 hover:text-green-700 mb-4 inline-block">
            ← Back to Course
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Practice Questions</h1>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {practiceQuestions.length}
            </span>
            <span className="text-green-600 font-medium">Score: {score}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6">
            {practiceQuestions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3 mb-8">
            {practiceQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswer === index
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-6 py-2 rounded-md font-medium ${
              selectedAnswer !== null
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < practiceQuestions.length - 1 ? 'Next Question' : 'Finish Practice'}
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign in to Khan Academy</h2>
          <button
            onClick={() => setShowLoginModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-medium"
          >
            Sign in
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
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Sign up
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign up for Khan Academy</h2>
          <button
            onClick={() => setShowSignupModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-medium"
          >
            Sign up
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
              className="text-green-600 hover:text-green-700 font-medium"
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
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {user.level}
                </span>
                <span className="text-gray-600">
                  🔥 {user.streakDays} day streak
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{user.totalPoints}</div>
              <div className="text-gray-700">Total Points</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-700">Courses Started</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
              <div className="text-gray-700">Courses Completed</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Completed lesson in Basic Algebra</span>
                <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Started practice in Geometry</span>
                <span className="text-gray-500 text-sm ml-auto">1 day ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Earned mastery in Biology Basics</span>
                <span className="text-gray-500 text-sm ml-auto">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};