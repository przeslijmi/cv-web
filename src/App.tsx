import { useState, useEffect } from 'react';
import { User, Code, Layers, Heart, MessageCircle, Bug, Coffee, DollarSign, GraduationCap, Gamepad2, ChevronDown, Users, TrendingUp, RefreshCw, Smartphone, Star, Send, Handshake, Zap, Target, Wrench, Sparkles, TestTube, Blocks, Phone, Mail, X, Linkedin, Brain, Menu, Moon, Sun } from 'lucide-react';

function App() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [activeSection, setActiveSection] = useState('landing');
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const mainMenuItems = [
    { id: 'old-code-rewrite', label: 'Old Code Rewrite', icon: RefreshCw },
    { id: 'debugging', label: 'Debugging', icon: Bug },
    { id: 'new-creations', label: 'New Creations', icon: Sparkles },
    { id: 'perspective', label: 'My Perspective', icon: Heart },
    { id: 'reach', label: 'Reach Me Out', icon: MessageCircle },
  ];

  const techStackMenuItems = [
    { id: 'ai', label: 'AI', icon: Brain },
    { id: 'php', label: 'PHP', icon: Code },
    { id: 'laravel', label: 'Laravel', icon: Layers },
    { id: 'vue', label: 'Vue', icon: Code },
    { id: 'react', label: 'React', icon: Code },
    { id: 'react-native', label: 'React Native', icon: Smartphone },
    { id: 'typescript', label: 'TypeScript', icon: Code },
    { id: 'vitest', label: 'Vitest', icon: TestTube },
    { id: 'playground', label: 'Playground', icon: Blocks },
  ];

  const gamesMenuItems = [
    { id: 'motivation', label: 'Motivation', icon: Heart },
    { id: 'debugging-game', label: 'Debugging', icon: Bug },
    { id: 'coding', label: 'Coding', icon: Coffee },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'teaching', label: 'Teaching', icon: GraduationCap },
  ];

  useEffect(() => {
    if (activeSection === 'landing') {
      const handleScroll = () => {
        const cooperateSection = document.getElementById('cooperate-section');
        if (cooperateSection) {
          const rect = cooperateSection.getBoundingClientRect();
          if (rect.bottom < window.innerHeight) {
            setShowContactPopup(true);
          } else {
            setShowContactPopup(false);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setShowContactPopup(false);
    }
  }, [activeSection]);

  const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'landing':
        return (
          <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
              <div className="max-w-5xl mx-auto space-y-12">
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                    Karol Nowakowski
                  </h1>
                  <p className={`text-2xl md:text-3xl font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Stack Developer & Problem Solver
                  </p>
                  <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Passionate about crafting elegant solutions with PHP, Laravel, Vue, and React.
                    I build software that makes a difference.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-delay">
                  <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${
                    darkMode ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>8+</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years Experience</div>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${
                    darkMode ? 'bg-gradient-to-br from-orange-900/50 to-amber-900/50 border-orange-700' : 'bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>50+</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects Delivered</div>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${
                    darkMode ? 'bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 border-cyan-700' : 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>100%</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dedication</div>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${
                    darkMode ? 'bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-amber-700' : 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>∞</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Curiosity</div>
                  </div>
                </div>

                <div className="space-y-8 animate-fade-in-delay-2">
                  <h2 className={`text-3xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Explore My Journey</h2>

                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="flex items-center justify-center mb-4">
                        <User className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Outcome Menu</h3>
                      <p className="text-blue-50 mb-6">
                        Explore the results I deliver - from legacy rewrites to fresh creations.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {mainMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                setActiveMenu('main');
                                setActiveSection(item.id);
                                scrollToContent();
                              }}
                              className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all backdrop-blur-sm"
                            >
                              <Icon size={16} />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="flex items-center justify-center mb-4">
                        <Code className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                      <p className="text-orange-50 mb-6">
                        Technologies I master and use to build amazing software.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {techStackMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                setActiveMenu('tech');
                                setActiveSection(item.id);
                                scrollToContent();
                              }}
                              className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all backdrop-blur-sm"
                            >
                              <Icon size={16} />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="flex items-center justify-center mb-4">
                        <Gamepad2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Games Menu</h3>
                      <p className="text-cyan-50 mb-6">
                        A playful look at my approach to development, business, and growth.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {gamesMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                setActiveMenu('games');
                                setActiveSection(item.id);
                                scrollToContent();
                              }}
                              className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all backdrop-blur-sm"
                            >
                              <Icon size={16} />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('team-player-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="animate-bounce mt-12 p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  <ChevronDown className="w-8 h-8 text-blue-600" />
                </button>
              </div>
            </div>

            <section id="team-player-section" className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Team Player at Heart</h2>
                <div className="grid md:grid-cols-2 gap-8 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <h3 className="text-2xl font-semibold mb-4">Collaboration First</h3>
                    <p className="text-lg leading-relaxed text-blue-50">
                      I thrive in team environments where ideas flow freely and everyone contributes to building something greater than themselves. Whether it's pair programming, code reviews, or brainstorming sessions, I bring energy and openness to every collaboration.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <h3 className="text-2xl font-semibold mb-4">Communication & Empathy</h3>
                    <p className="text-lg leading-relaxed text-blue-50">
                      Great software is built by great teams. I value clear communication, active listening, and understanding different perspectives. I adapt my communication style to ensure everyone is on the same page, from developers to stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <TrendingUp className="w-16 h-16 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">NPS & Bug Fixing</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl border-2 border-blue-200 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      There's a direct correlation between bug-free software and customer satisfaction. Every bug fixed is a step toward a better user experience and a higher NPS score. I don't just see bugs as technical issues; I see them as opportunities to improve the product and delight users.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">Fewer Bugs</div>
                        <div className="text-sm text-gray-600">Happier Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">Higher NPS</div>
                        <div className="text-sm text-gray-600">Better Retention</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-600 mb-2">More Trust</div>
                        <div className="text-sm text-gray-600">Brand Loyalty</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setActiveMenu('games');
                        setActiveSection('debugging');
                        scrollToContent();
                      }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
                    >
                      <Bug className="w-6 h-6" />
                      Learn About My Debugging Approach
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <RefreshCw className="w-16 h-16 text-cyan-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Legacy Application Rewriting</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      I specialize in modernizing legacy applications without disrupting business operations. Using a phased approach, I can rewrite applications "under steam" - keeping the old system running while gradually migrating to the new architecture.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">Zero Downtime</h3>
                        <p className="text-gray-300">
                          Your users won't notice a thing. The transition happens seamlessly in the background.
                        </p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">Incremental Migration</h3>
                        <p className="text-gray-300">
                          Module by module, feature by feature. Reduce risk and validate as you go.
                        </p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">Modern Architecture</h3>
                        <p className="text-gray-300">
                          Transform outdated code into clean, maintainable, and scalable systems.
                        </p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">Knowledge Transfer</h3>
                        <p className="text-gray-300">
                          I document everything and ensure your team can maintain the new system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Smartphone className="w-16 h-16 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">Mobile App Development</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white p-10 rounded-2xl border-2 border-blue-200 shadow-xl">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                      I build native-quality mobile applications for both iOS and Android using React Native. One codebase, two platforms, seamless user experience.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">iOS</div>
                        <p className="text-sm text-gray-600">Native performance on Apple devices</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                        <div className="text-3xl font-bold text-orange-600 mb-2">Android</div>
                        <p className="text-sm text-gray-600">Optimized for all Android devices</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100">
                        <div className="text-3xl font-bold text-cyan-600 mb-2">React Native</div>
                        <p className="text-sm text-gray-600">Cross-platform excellence</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => {
                          setActiveMenu('main');
                          setActiveSection('react-native');
                          scrollToContent();
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
                      >
                        <Smartphone className="w-6 h-6" />
                        Explore My React Native Work
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">AI: Speed Meets Experience</h2>
                <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                  AI tools are powerful accelerators, but experience ensures the quality and big picture are never lost.
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">AI Speeds Things Up</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      AI tools like GitHub Copilot, ChatGPT, and Claude are incredible speed boosters. They help me write code faster,
                      explore solutions quickly, and automate repetitive tasks. In the right hands, AI can accelerate development by 2-3x.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-cyan-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Experience Ensures Quality</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      But speed without wisdom leads to technical debt. My 20 years of experience ensures that AI suggestions are validated,
                      code quality is maintained, and the big picture stays in focus. I catch edge cases and potential issues before they become problems.
                    </p>
                  </div>
                </div>
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white text-center max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed">
                    AI gives me <span className="font-bold">velocity</span>. Experience gives me <span className="font-bold">direction</span>.
                    Together, they deliver exceptional results - fast development without sacrificing quality.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Star className="w-16 h-16 text-yellow-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What People Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "Karol transformed our legacy system without any downtime. His technical expertise and attention to detail are outstanding."
                    </p>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">CTO, TechCorp</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "A true team player who brings positive energy to every project. His mobile apps are top-notch!"
                    </p>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">Product Manager, StartupX</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "Karol's bug-fixing skills are legendary. Our NPS score improved significantly after he joined the team."
                    </p>
                    <div className="font-semibold text-gray-900">Emma Davis</div>
                    <div className="text-sm text-gray-600">Engineering Lead, DevSolutions</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="cooperate-section" className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Handshake className="w-16 h-16 text-orange-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">How We Could Cooperate</h2>
                <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                  I believe in flexible collaboration that works for your needs. Whether you need help with a specific challenge or a long-term partnership, I'm here to help you succeed.
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full">
                        <Zap className="w-12 h-12 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Let's Try</h3>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      Start with a single issue or project. No long-term commitment required. Perfect for testing the waters and solving specific challenges.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Per-issue or per-project basis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">No formal contracts or commitments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Flexible scope and timeline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Quick onboarding and fast results</span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
                      >
                        Start a Conversation
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-10 rounded-2xl shadow-xl border-2 border-blue-400 hover:shadow-2xl transition-all text-white">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                        <Target className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-4">Let's Get It Done</h3>
                    <p className="text-blue-50 text-center mb-6 leading-relaxed">
                      Part-time or full-time collaboration for ongoing projects. Build a lasting partnership and achieve your long-term goals together.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-3 mt-1">✓</span>
                        <span className="text-blue-50">Part-time or full-time availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-3 mt-1">✓</span>
                        <span className="text-blue-50">Long-term strategic partnership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-3 mt-1">✓</span>
                        <span className="text-blue-50">Deep integration with your team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-3 mt-1">✓</span>
                        <span className="text-blue-50">Consistent support and reliability</span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
                      >
                        Discuss Opportunities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact-form" className="bg-white py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Send className="w-16 h-16 text-orange-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
                <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-10 rounded-2xl border-2 border-orange-200">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        );
      case 'me':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Karol Nowakowski</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed">
                I'm a passionate full-stack developer who loves building elegant solutions to complex problems.
                With years of experience in modern web technologies, I bring both technical expertise and
                creative problem-solving to every project.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I believe in writing clean, maintainable code and creating experiences that users love.
                Whether it's crafting a seamless API, building reactive interfaces, or optimizing database
                queries, I approach each challenge with curiosity and dedication.
              </p>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">AI in Development</h2>
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 p-10 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI: Speed Meets Experience</h3>
                  <p className="text-gray-600">The perfect blend of modern tools and battle-tested wisdom</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">AI as a Speed Multiplier</h4>
                  <p className="text-gray-700 leading-relaxed">
                    AI tools like GitHub Copilot, ChatGPT, and Claude are incredible speed boosters. They help me write boilerplate faster,
                    explore solutions quickly, and automate repetitive tasks. In the right hands, AI can accelerate development by 2-3x.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">Experience Ensures Quality</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    But speed without wisdom leads to technical debt. My 20 years of experience ensures that:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>AI suggestions are validated against best practices and architectural principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>Code quality, security, and maintainability are never compromised</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>The big picture is always in focus - scalability, performance, and future needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">✓</span>
                      <span>Edge cases and potential issues are caught before they become problems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-3">The Winning Combination</h4>
                  <p className="text-blue-50 leading-relaxed">
                    AI gives me velocity. Experience gives me direction. Together, they deliver exceptional results -
                    fast development without sacrificing quality, innovation grounded in proven principles, and solutions
                    that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'old-code-rewrite':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Legacy Code Rewriting</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-2xl text-white">
              <p className="text-xl leading-relaxed mb-6">
                I specialize in modernizing legacy applications without disrupting business operations. Using a phased approach, I can rewrite applications "under steam" - keeping the old system running while gradually migrating to the new architecture.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Zero Downtime</h3>
                  <p className="text-gray-300">
                    Your users won't notice a thing. The transition happens seamlessly in the background.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Incremental Migration</h3>
                  <p className="text-gray-300">
                    Module by module, feature by feature. Reduce risk and validate as you go.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Modern Architecture</h3>
                  <p className="text-gray-300">
                    Transform outdated code into clean, maintainable, and scalable systems.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Knowledge Transfer</h3>
                  <p className="text-gray-300">
                    I document everything and ensure your team can maintain the new system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'debugging':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Debugging Expertise</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Debugging is both an art and a science. I approach every bug systematically, using proven techniques and modern tools to identify root causes quickly and implement lasting fixes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">My Process</h4>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Reproduce the issue consistently</li>
                    <li>2. Isolate the problem area</li>
                    <li>3. Form hypotheses and test them</li>
                    <li>4. Fix and verify</li>
                    <li>5. Document learnings</li>
                  </ol>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Tools & Techniques</h4>
                  <p className="text-gray-700 mb-2">
                    Browser DevTools, Xdebug, logging strategies, performance profiling, and more.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Every bug fixed is a lesson learned and an opportunity to improve the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'new-creations':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">New Creations</h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-2xl border-2 border-orange-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I love building new things from scratch. Whether it's a web application, mobile app, or API service, I bring creativity, technical excellence, and user-focused design to every project.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Start</h3>
                  <p className="text-gray-600">
                    Rapid prototyping and MVP development to validate ideas quickly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-orange-100">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful UI</h3>
                  <p className="text-gray-600">
                    Modern, responsive designs that users love to interact with.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-cyan-100">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-gray-600">
                    Optimized for speed and scalability from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'typescript':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">TypeScript Mastery</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TypeScript brings type safety and enhanced developer experience to JavaScript. I leverage advanced TypeScript features to catch bugs early, improve code quality, and make refactoring safer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Type Safety</h3>
                  <p className="text-gray-700">
                    Strong typing prevents runtime errors and makes code more predictable and maintainable.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-cyan-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Better DX</h3>
                  <p className="text-gray-700">
                    IntelliSense, autocomplete, and refactoring tools make development faster and more enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vitest':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Testing with Vitest</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vitest is a blazing-fast unit testing framework. I use it to ensure code quality, catch regressions early, and build confidence in every release.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Good tests give you confidence to refactor and ship faster. I write tests that are maintainable, fast, and focused on behavior rather than implementation details.
                </p>
              </div>
            </div>
          </div>
        );
      case 'playground':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">My Playground</h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-2xl border-2 border-orange-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                A space where I experiment with new technologies, build side projects, and explore creative ideas. This is where innovation happens!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🧪 Experiments</h3>
                  <p className="text-gray-700">
                    Testing new frameworks, libraries, and techniques to stay ahead of the curve.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">💡 Side Projects</h3>
                  <p className="text-gray-700">
                    Building tools and applications that solve real problems and bring value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'php':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">PHP Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Core Strengths</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Object-oriented programming and design patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Modern PHP 8+ features and best practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    RESTful API development and architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Performance optimization and caching strategies
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-sm border-2 border-cyan-100">
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  I've built scalable backend systems, managed complex data flows, and created
                  robust APIs that power modern applications. From legacy code refactoring to
                  greenfield projects, I bring reliability and innovation.
                </p>
              </div>
            </div>
          </div>
        );
      case 'laravel':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Laravel Mastery</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What I Love About Laravel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Laravel's elegant syntax and powerful features make it my go-to framework for building
                  sophisticated web applications. I leverage Eloquent ORM, queue systems, event broadcasting,
                  and the entire Laravel ecosystem to deliver production-ready solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Architecture</h4>
                  <p className="text-sm text-gray-600">Clean, maintainable code following SOLID principles</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Testing</h4>
                  <p className="text-sm text-gray-600">Comprehensive test coverage with PHPUnit and Pest</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                  <p className="text-sm text-gray-600">CI/CD pipelines and cloud infrastructure experience</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vue':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Vue.js Development</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vue's progressive framework approach aligns perfectly with my philosophy of building
                applications incrementally. I create reactive, performant interfaces using Vue 3's
                Composition API, Pinia for state management, and modern tooling.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Vue 3</div>
                  <div className="text-sm text-gray-600">Composition API</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">Pinia</div>
                  <div className="text-sm text-gray-600">State Management</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Vite</div>
                  <div className="text-sm text-gray-600">Build Tool</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">TypeScript</div>
                  <div className="text-sm text-gray-600">Type Safety</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'react':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">React Expertise</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  React's component-based architecture and vast ecosystem enable me to build scalable,
                  maintainable applications. I'm proficient in hooks, context, and modern React patterns,
                  always staying current with the latest features and best practices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Skills</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      React hooks and custom hooks
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Context API and advanced state management
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Performance optimization techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Server-side rendering and Next.js
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-cyan-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I focus on creating reusable components, writing clean code, and ensuring
                    accessibility. Every React application I build is designed with scalability
                    and user experience in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'react-native':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">React Native Excellence</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  React Native allows me to deliver truly native mobile experiences for both iOS and Android platforms with a single codebase. I leverage native modules, optimize performance, and ensure that every app feels like it belongs on the platform it's running on.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform Power</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Native performance with JavaScript efficiency
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Platform-specific optimizations when needed
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Shared business logic across platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      Rapid iteration and hot reload
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-cyan-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Native Integrations</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    I integrate with native APIs, third-party SDKs, and device features seamlessly. From camera access to push notifications, from payment processing to biometric authentication.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Building mobile apps that users love to use every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'perspective':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">My Perspective</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Code is more than just logic and syntax; it's a form of communication and expression.
                  I believe in writing code that tells a story, that can be understood by humans first
                  and machines second.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Great software comes from understanding the problem deeply, collaborating effectively,
                  and iterating thoughtfully. I value clean architecture, meaningful tests, and documentation
                  that actually helps.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">User-Focused</h4>
                  <p className="text-sm text-gray-600">Every line of code serves the end user</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-cyan-100 text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                  <p className="text-sm text-gray-600">Technology evolves, and so do I</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100 text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                  <p className="text-sm text-gray-600">Great products come from great teams</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reach':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Let's Connect</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having
                a conversation about technology and development. Let's create something amazing together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Email:</span>
                      <span>karol.nowakowski@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Location:</span>
                      <span>Available for remote work</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Profiles</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                      LinkedIn Profile
                    </a>
                    <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                      GitHub Portfolio
                    </a>
                    <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                      Stack Overflow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'motivation':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Motivation Game</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                What drives me? The joy of solving problems and seeing people use what I've built.
                Every bug fixed is a victory. Every feature shipped is a celebration.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Wins</h4>
                  <p className="text-gray-700">
                    I celebrate small victories: a refactored function that's now elegant, a performance
                    improvement that saves milliseconds, a UI interaction that feels just right.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Vision</h4>
                  <p className="text-gray-700">
                    Building software that makes a difference. Creating tools that empower others.
                    Growing as a developer while helping others grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'debugging-game':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Debugging Game</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Debugging is like solving a mystery. I approach it methodically, with curiosity
                and determination. Every bug is an opportunity to understand the system better.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">My Process</h4>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Reproduce the issue consistently</li>
                    <li>2. Isolate the problem area</li>
                    <li>3. Form hypotheses and test them</li>
                    <li>4. Fix and verify</li>
                    <li>5. Document learnings</li>
                  </ol>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Tools & Techniques</h4>
                  <p className="text-gray-700 mb-2">
                    From browser DevTools to server logs, from unit tests to monitoring dashboards,
                    I use every tool at my disposal to track down issues.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    The best debugging sessions teach me something new about the codebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'coding':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Coding Game</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Coding is my craft, and I treat it as such. Clean code isn't just about following
                rules; it's about creating something that brings clarity and joy to everyone who
                interacts with it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Readability</h4>
                  <p className="text-sm text-gray-700">
                    Code is read more than written. I prioritize clarity and expressiveness.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Simplicity</h4>
                  <p className="text-sm text-gray-700">
                    The best solution is often the simplest one. I avoid over-engineering.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Testing</h4>
                  <p className="text-sm text-gray-700">
                    Tests are documentation that never lies. I write tests that tell stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Finance Game</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Understanding the business side of technology is crucial. I think about ROI,
                technical debt, and how development decisions impact the bottom line.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Value-Driven Development</h4>
                  <p className="text-gray-700">
                    I prioritize features that deliver the most value. I understand that every hour
                    spent coding should move the business forward. Technical excellence and business
                    goals aren't opposing forces; they work together.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Balancing Quality & Speed</h4>
                  <p className="text-gray-700">
                    I know when to move fast and when to slow down. Not every feature needs perfect
                    architecture, but the core needs to be solid. It's about making informed tradeoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'teaching':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Teaching Game</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Sharing knowledge is how we grow as a community. I love mentoring, writing
                documentation, and helping others level up their skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Mentoring Approach</h4>
                  <p className="text-gray-700 mb-3">
                    I believe in teaching through doing. Code reviews, pair programming, and
                    thoughtful questions help people discover solutions themselves.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    The best teachers create other teachers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-cyan-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Knowledge Sharing</h4>
                  <p className="text-gray-700">
                    Whether it's internal documentation, tech talks, or helping a colleague debug
                    an issue, I'm always looking for opportunities to share what I know and learn
                    from others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
    }`}>
      <header className={`backdrop-blur-md border-b lg:sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-800/90 border-gray-700'
          : 'bg-white/80 border-blue-100'
      }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Mobile Header */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveSection('landing')}
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Karol Nowakowski
                </button>
                <div className="flex items-center gap-2">
                  <a href="tel:+48123456789" className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                  }`}>
                    <Phone size={18} />
                  </a>
                  <a href="mailto:karol.nowakowski@example.com" className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                  }`}>
                    <Mail size={18} />
                  </a>
                  <button
                    onClick={() => setActiveSection('reach')}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}
                  >
                    <MessageCircle size={18} />
                  </button>
                  <a href="https://linkedin.com/in/karol-nowakowski" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                  }`}>
                    <Linkedin size={18} />
                  </a>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}
                  >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ml-2"
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Dropdown */}
              {mobileMenuOpen && (
                <div className="mt-4 space-y-4 pb-4">
                  {/* Main Menu Tabs */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setActiveMenu('main');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                        activeMenu === 'main'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      Outcome
                    </button>
                    <button
                      onClick={() => {
                        setActiveMenu('tech');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                        activeMenu === 'tech'
                          ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg'
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}
                    >
                      Tech
                    </button>
                    <button
                      onClick={() => {
                        setActiveMenu('games');
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                        activeMenu === 'games'
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                      }`}
                    >
                      Games
                    </button>
                  </div>

                  {/* Submenu Items */}
                  <nav className="flex flex-col gap-2">
                    {(activeMenu === 'main' ? mainMenuItems : activeMenu === 'tech' ? techStackMenuItems : gamesMenuItems).map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveSection(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                            activeSection === item.id
                              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                              : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
                          }`}
                        >
                          <Icon size={18} />
                          {item.label}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveSection('landing')}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all"
                  >
                    Karol Nowakowski
                  </button>
                  <div className="flex items-center gap-2">
                    <a href="tel:+48123456789" className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}>
                      <Phone size={20} />
                    </a>
                    <a href="mailto:karol.nowakowski@example.com" className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}>
                      <Mail size={20} />
                    </a>
                    <button
                      onClick={() => setActiveSection('reach')}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                      }`}
                    >
                      <MessageCircle size={20} />
                    </button>
                    <a href="https://linkedin.com/in/karol-nowakowski" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    }`}>
                      <Linkedin size={20} />
                    </a>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                      }`}
                    >
                      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveMenu('main')}
                    className={`px-6 py-3 rounded-t-xl font-semibold transition-all relative ${
                      activeMenu === 'main'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                    }`}
                  >
                    Outcome
                    {activeMenu === 'main' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveMenu('tech')}
                    className={`px-6 py-3 rounded-t-xl font-semibold transition-all flex items-center gap-2 relative ${
                      activeMenu === 'tech'
                        ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg scale-105'
                        : 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
                    }`}
                  >
                    <Code size={18} />
                    Tech Stack
                    {activeMenu === 'tech' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-600 rounded-full"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveMenu('games')}
                    className={`px-6 py-3 rounded-t-xl font-semibold transition-all flex items-center gap-2 relative ${
                      activeMenu === 'games'
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                        : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200'
                    }`}
                  >
                    <Gamepad2 size={18} />
                    Games
                    {activeMenu === 'games' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-600 rounded-full"></div>
                    )}
                  </button>
                </div>
              </div>

              <nav className="flex flex-wrap gap-2 justify-end">
                {(activeMenu === 'main' ? mainMenuItems : activeMenu === 'tech' ? techStackMenuItems : gamesMenuItems).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>

      <main id="content-section" className={activeSection === 'landing' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'}>
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-lg mb-4">
              Open to new opportunities and exciting projects. Let's build something great together.
            </p>
            <div className="flex items-center justify-center gap-6 text-blue-50 mb-4">
              <a href="mailto:karol.nowakowski@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={20} />
                karol.nowakowski@example.com
              </a>
              <a href="tel:+48123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={20} />
                +48 123 456 789
              </a>
            </div>
            <p className="text-sm text-blue-100">
              Karol Nowakowski - Full Stack Developer
            </p>
          </div>
        </div>
      </footer>

      {showContactPopup && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-6 max-w-sm z-50 animate-fade-in">
          <button
            onClick={() => setShowContactPopup(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full">
              <MessageCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Let's Talk!</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Ready to discuss your project? Reach out to me directly:
          </p>
          <div className="space-y-3">
            <a
              href="mailto:karol.nowakowski@example.com"
              className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-xs text-gray-600">Email</div>
                <div className="text-sm font-semibold text-gray-900">karol.nowakowski@example.com</div>
              </div>
            </a>
            <a
              href="tel:+48123456789"
              className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <Phone className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-xs text-gray-600">Phone</div>
                <div className="text-sm font-semibold text-gray-900">+48 123 456 789</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
