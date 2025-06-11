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
  Zap
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
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/14891563/pexels-photo-14891563.jpeg')`
            }}
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                <GraduationCap size={64} className="text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
          >
            Tutor Dog Token
          </motion.h1>
          
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300"
          >
            The Future of Educational Crypto
          </motion.h2>
          
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing education through blockchain technology. Earn, learn, and grow with TDog - where knowledge meets cryptocurrency.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold mb-6 text-orange-400">Token Launch Countdown</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://pinksale.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap size={20} />
              Buy Pre-Sale Now
              <ExternalLink size={16} />
            </motion.a>
            
            <motion.a
              href="#whitepaper"
              className="border-2 border-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Whitepaper
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

      {/* About Section */}
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
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
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
              { label: "Total Supply", value: "1,000,000,000", suffix: "TDog" },
              { label: "Pre-Sale", value: "30", suffix: "%" },
              { label: "Liquidity", value: "25", suffix: "%" },
              { label: "Team & Development", value: "15", suffix: "%" }
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
                { category: "Pre-Sale (30%)", description: "Early investor allocation with bonus incentives" },
                { category: "Liquidity Pool (25%)", description: "DEX liquidity and trading stability" },
                { category: "Team & Development (15%)", description: "Core team allocation with vesting schedule" },
                { category: "Community Rewards (20%)", description: "Learn-to-earn and staking rewards" },
                { category: "Marketing & Partnerships (10%)", description: "Growth and strategic partnerships" }
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
      <section className="py-20 px-4 relative">
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

            <motion.button
              variants={fadeInUp}
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Whitepaper (Coming Soon)
            </motion.button>
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
                {activeTab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
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
                  href="https://twitter.com/tutordogtoken"
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
                <a href="https://twitter.com/tutordogtoken" className="block text-gray-400 hover:text-orange-400 transition-colors">Twitter</a>
                <a href="https://t.me/tutordogtoken" className="block text-gray-400 hover:text-orange-400 transition-colors">Telegram</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Discord</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Tutor Dog Token. All rights reserved. Built with education and innovation in mind.
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