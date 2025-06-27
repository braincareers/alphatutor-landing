import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Users, 
  Download,
  ChevronDown,
  ExternalLink,
  Twitter,
  MessageSquare,
  Clock,
  Coins,
  Target,
  Zap,
  CreditCard,
  Wallet,
  Award,
  Star,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Trophy
} from 'lucide-react';
import CountUp from 'react-countup';
import './App.css';

const TutorDogLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Countdown to Thursday, August 14th, 2025 at 16:00 UTC
  useEffect(() => {
    const targetDate = new Date('2025-08-14T16:00:00Z').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/14891563/pexels-photo-14891563.jpeg')`
            }}
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          {/* Tutor Dog Token Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src="/images/tdog-image2.png"
              alt="Tutor Dog Token Logo"
              className="w-48 h-48 mx-auto rounded-full shadow-2xl object cover"
            />
          </motion.div>
          
          {/* Enhanced Hero Text with Image-Style Headlines */}
          <motion.div
            {...fadeInUp}
            className="mb-8"
          >
            {/* TUTOR DOG as Catchy Image */}
            <div className="relative mb-6">
              <div className="text-6xl md:text-8xl font-black relative transform hover:scale-105 transition-all duration-500">
                <div 
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl"
                  style={{
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8, #fdcb6e)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 3s ease infinite',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(255, 107, 107, 0.5)',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7))'
                  }}
                >
                  TUTOR DOG
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🎓</div>
                <div className="absolute -bottom-2 -left-4 text-2xl animate-pulse">📚</div>
                <div className="absolute -top-4 left-8 text-2xl animate-ping">✨</div>
                <div className="absolute bottom-2 right-8 text-xl animate-bounce">🚀</div>
              </div>
            </div>
            
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 animate-pulse">
              $TDOG TOKEN
            </div>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Learn • Earn • Grow
              </h2>
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              🚀 <strong>Revolutionizing Education Through Blockchain</strong> 🚀<br/>
              Where Knowledge Meets Cryptocurrency - Earn $TDOG tokens while mastering new skills!
            </p>
          </motion.div>

          {/* Last Chance to Buy Table */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-md rounded-2xl border-2 border-red-500/50 p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-2 animate-pulse">
                  🔥 Last Chance to Buy $TDOG Token 🔥
                </h3>
                <p className="text-orange-300 font-semibold">Pre-Sale Ending Soon!</p>
              </div>
              
              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                    <div className="text-xl md:text-2xl font-bold text-red-400">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{unit}</div>
                  </div>
                ))}
              </div>

              {/* Buy Options */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <motion.a
                  href="https://pinksale.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard size={20} />
                  Buy with Card
                </motion.a>
                
                <motion.a
                  href="https://pinksale.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Wallet size={20} />
                  Buy with Crypto
                </motion.a>
              </div>

              <div className="text-center text-sm text-gray-400">
                Powered by <span className="text-orange-400 font-semibold">---</span>
              </div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#what-is-tdog"
              className="border-2 border-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={20} />
              Learn More About $TDOG
            </motion.a>
            
            <motion.a
              href="#whitepaper"
              className="border-2 border-amber-500 hover:bg-amber-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Whitepaper
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-orange-400" />
        </motion.div>
      </section>

      {/* What is $TDOG Section */}
      <section id="what-is-tdog" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              What is $TDOG?
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 max-w-4xl mx-auto"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-orange-400">TDOG ($TDOG)</strong> is a platform-bound utility token designed by the <strong className="text-amber-400">AlphaTutor Research Group</strong> to power personalized education. It incentivizes students, rewards top content creators, and unlocks premium learning features through tokenized micro-payments and earned achievements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Specifications & Utility */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Token Specifications */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-3xl font-bold mb-6 text-orange-400 flex items-center gap-3">
                <Coins size={32} />
                Token Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white font-semibold">TDog – Tutor Dog Token</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Symbol:</span>
                  <span className="text-orange-400 font-bold">$TDOG</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white font-semibold">ERC-20 Utility Token</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Max Supply:</span>
                  <span className="text-amber-400 font-bold">1,000,000,000 $TDOG</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Network:</span>
                  <span className="text-white font-semibold">Ethereum</span>
                </div>
              </div>
            </motion.div>

            {/* Token Utility */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-3xl font-bold mb-6 text-amber-400 flex items-center gap-3">
                <Zap size={32} />
                Token Utility
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <GraduationCap size={20} />, text: "Pay for tutoring sessions" },
                  { icon: <BookOpen size={20} />, text: "Access premium study materials" },
                  { icon: <Star size={20} />, text: "Tip top-rated educational content creators" },
                  { icon: <Trophy size={20} />, text: "Earn rewards for achievements and consistency" }
                ].map((utility, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20">
                    <div className="text-orange-400 flex-shrink-0">
                      {utility.icon}
                    </div>
                    <span className="text-gray-300 font-medium">{utility.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research-Backed Benefits */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Research-Backed Benefits
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Studies from <strong className="text-blue-400">Harvard</strong> and <strong className="text-purple-400">Stanford</strong> show tokenized rewards improve retention, confidence, and course completion rates.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Course Completion Impact</h3>
            
            {/* Enhanced Chart Visualization */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-semibold">No Tokens</span>
                    <span className="text-red-400 font-bold">35%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '35%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-semibold">With $TDOG</span>
                    <span className="text-green-400 font-bold">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '87%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Retention Rate", value: "+150%", icon: <Brain size={24} /> },
                  { label: "Confidence Boost", value: "+200%", icon: <Trophy size={24} /> },
                  { label: "Engagement", value: "+180%", icon: <Target size={24} /> },
                  { label: "Skill Mastery", value: "+165%", icon: <Award size={24} /> }
                ].map((stat, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-md rounded-xl p-4 text-center border border-green-500/20">
                    <div className="text-green-400 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      <CountUp end={parseInt(stat.value.replace(/[+%]/g, ''))} duration={2.5} prefix="+" suffix="%" />
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Tutor Dog Token Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent leading-tight"
              style={{ lineHeight: '1.2' }}
            >
              Why Tutor Dog Token?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              TDog combines the power of blockchain with educational innovation, creating a new paradigm for learning and earning.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={48} />,
                title: "Learn & Earn",
                description: "Complete educational modules and earn TDog tokens as rewards for your learning achievements.",
                image: "https://images.unsplash.com/photo-1649769155508-1b5971b6aa50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fHxvcmFuZ2V8MTc0OTY1MTQ0OXww&ixlib=rb-4.1.0&q=85"
              },
              {
                icon: <Shield size={48} />,
                title: "Secure & Trusted",
                description: "Built on robust blockchain technology ensuring security, transparency, and immutable learning records.",
                image: "https://images.unsplash.com/photo-1649767428212-7590dbf20116?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fHxvcmFuZ2V8MTc0OTY1MTQ0OXww&ixlib=rb-4.1.0&q=85"
              },
              {
                icon: <Users size={48} />,
                title: "Community Driven",
                description: "Join a global community of learners, educators, and blockchain enthusiasts shaping the future of education.",
                image: "https://images.unsplash.com/photo-1603263843755-89af20d58a90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxibG9ja2NoYWluJTIwbmV0d29ya3xlbnwwfHx8b3JhbmdlfDE3NDk2NTE0MzZ8MA&ixlib=rb-4.1.0&q=85"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center transition-all duration-300 group-hover:opacity-20"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
                <div className="relative z-10">
                  <div className="text-orange-400 mb-6 transform group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/14891570/pexels-photo-14891570.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Tokenomics
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Designed for sustainable growth and community reward distribution
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Supply", value: "1,000,000,000", suffix: "" },
              { label: "Pre-Sale", value: "30", suffix: "%" },
              { label: "Team & Development", value: "35", suffix: "%" },
              { label: "Community Rewards", value: "10", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-orange-500/20 text-center"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  <CountUp end={parseInt(stat.value.replace(/,/g, ''))} duration={2.5} separator="," />
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Token Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { category: "Presale Sale (30%)", description: "Early Investor allocation with bonus incentives." },
                { category: "Team & Development (35%)", description: "Core team allocation with vesting schedule & 6-month cliff." },
                { category: "Community Rewards (10%)", description: "Learn-to-earn & content creators" },
                { category: "Liquidity & Listings (10%)", description: "DEX liquidity and trading stability" },
                { category: "Growth Fund (7%)", description: "Partnerships, influencer marketing, and affiliate rewards." },
                { category: "Airdrops & Rewards (5%)", description: "Community incentives, learn-to-earn, and promotional campaigns." },
                { category: "Treasury/Advisors (3%)", description: "Reserve for advisors, legal, or protocol improvements." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Coins className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.category}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618126942862-4228909a68e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxjcnlwdG8lMjByb2FkbWFwfGVufDB8fHxvcmFuZ2V8MTc0OTY1MTQ1Nnww&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Roadmap
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "Q3 2025",
                title: "Foundation & Launch",
                items: ["Token Pre-Sale Launch", "Community Building", "Smart Contract Audit", "DEX Listing"]
              },
              {
                phase: "Q4 2025",
                title: "Platform Development",
                items: ["Educational Platform Beta", "Learn-to-Earn MVP", "Mobile App Development", "Strategic Partnerships"]
              },
              {
                phase: "Q1 2026",
                title: "Ecosystem Expansion",
                items: ["Full Platform Launch", "NFT Certificates", "Staking Rewards", "Global Education Partners"]
              },
              {
                phase: "Q2 2026",
                title: "Advanced Features",
                items: ["AI-Powered Learning", "Metaverse Integration", "Cross-Chain Compatibility", "DAO Governance"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-gray-800 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <span className="text-orange-400 font-semibold">{phase.phase}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <Target size={16} className="text-orange-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section id="whitepaper" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Whitepaper
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 mb-12"
            >
              Dive deep into the technical details and vision behind Tutor Dog Token
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800 mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Key Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "Revolutionary Learn-to-Earn mechanism",
                  "Blockchain-verified educational credentials",
                  "Decentralized governance model",
                  "Sustainable tokenomics design",
                  "Cross-platform compatibility",
                  "AI-enhanced learning pathways"
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.a
              variants={fadeInUp}
              href="/whitepaper.pdf"
              Download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Whitepaper
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is Tutor Dog Token (TDog)?",
                answer: "TDog is an educational cryptocurrency that rewards users for learning and completing educational milestones on our blockchain-based platform."
              },
              {
                question: "How can I earn TDog tokens?",
                answer: "You can earn TDog tokens by completing courses, passing assessments, participating in community discussions, and contributing educational content to the platform."
              },
              {
                question: "When is the token launch?",
                answer: "The token launch is scheduled for Thursday, August 14th, 2025 at 16:00 UTC. You can participate in the pre-sale before the official launch."
              },
              {
                question: "How do I participate in the pre-sale?",
                answer: "You can participate in the pre-sale through our PinkSale launch. Visit the pre-sale link and follow the instructions to purchase TDog tokens."
              },
              {
                question: "What blockchain is TDog built on?",
                answer: "TDog is built on Ethereum blockchain with plans for cross-chain compatibility to ensure maximum accessibility and utility."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/20 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-orange-500/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-orange-400 transition-transform duration-300 ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeTab === index ? 'auto' : 0,
                    opacity: activeTab === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Tutor Dog Token</h4>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing education through blockchain technology. Join the future of learning and earning.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/tutordogtoken"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://t.me/tutordogtoken"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#whitepaper" className="block text-gray-400 hover:text-orange-400 transition-colors">Whitepaper</a>
                <a href="https://pinksale.finance" className="block text-gray-400 hover:text-orange-400 transition-colors">Pre-Sale</a>
                <a href="#roadmap" className="block text-gray-400 hover:text-orange-400 transition-colors">Roadmap</a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Community</h5>
              <div className="space-y-2">
                <a href="https://x.com/tutordogtoken" className="block text-gray-400 hover:text-orange-400 transition-colors">X</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Telegram</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Discord</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Tutor Dog Token. All rights reserved. Built with education and innovation in mind.<br/>
              <span className="text-orange-400">contact@alphatutor.ai</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <TutorDogLanding />;
}

export default App;