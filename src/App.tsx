import { useState } from 'react';
import { User, Code, Heart, MessageCircle, Gamepad2, Target, Phone, Mail, Linkedin, Menu, X, Moon, Sun, RefreshCw, Bug, Sparkles, Brain, Layers, Smartphone, TestTube, Blocks, Coffee, DollarSign, GraduationCap, Zap, ChevronDown, Users, TrendingUp, Star, Send, Handshake } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { id: 'landing', label: 'Home', icon: User },
    { id: 'about', label: 'About Me', icon: Heart },
    { id: 'outcome', label: 'Outcome', icon: Target },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

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
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>20+</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years Experience</div>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${
                    darkMode ? 'bg-gradient-to-br from-orange-900/50 to-amber-900/50 border-orange-700' : 'bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>100+</div>
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
                    <button
                      onClick={() => setActiveSection('outcome')}
                      className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow ${
                        darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      } text-white`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Target className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                      <p className={darkMode ? 'text-blue-200' : 'text-blue-50'}>
                        Explore the results I deliver - from legacy rewrites to fresh creations.
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveSection('tech-stack')}
                      className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow ${
                        darkMode ? 'bg-gradient-to-br from-orange-900 to-amber-800' : 'bg-gradient-to-br from-orange-500 to-amber-500'
                      } text-white`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Code className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                      <p className={darkMode ? 'text-orange-200' : 'text-orange-50'}>
                        Technologies I master and use to build amazing software.
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveSection('games')}
                      className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow ${
                        darkMode ? 'bg-gradient-to-br from-cyan-900 to-blue-800' : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                      } text-white`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Gamepad2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Games</h3>
                      <p className={darkMode ? 'text-cyan-200' : 'text-cyan-50'}>
                        A playful look at my approach to development, business, and growth.
                      </p>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('team-player-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`animate-bounce mt-12 p-3 rounded-full transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </button>
              </div>
            </div>

            <section id="team-player-section" className={`py-20 px-4 ${
              darkMode ? 'bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900' : 'bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500'
            }`}>
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

            <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <TrendingUp className={`w-16 h-16 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>NPS & Bug Fixing</h2>
                <div className="max-w-4xl mx-auto">
                  <div className={`p-10 rounded-2xl border-2 mb-8 ${
                    darkMode ? 'bg-gray-700 border-blue-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
                  }`}>
                    <p className={`text-xl leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      There's a direct correlation between bug-free software and customer satisfaction. Every bug fixed is a step toward a better user experience and a higher NPS score. I don't just see bugs as technical issues; I see them as opportunities to improve the product and delight users.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Fewer Bugs</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happier Users</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Higher NPS</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Better Retention</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>More Trust</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Brand Loyalty</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => setActiveSection('contact')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      <Star className="w-5 h-5" />
                      Let's Build Something Great
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-orange-50 to-red-50'}`}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <RefreshCw className={`w-16 h-16 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Legacy Application Rewriting</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Got a legacy system that's hard to maintain? I specialize in transforming outdated codebases into modern, efficient applications. Whether it's migrating from old PHP to Laravel, refactoring monolithic code, or modernizing your entire tech stack - I've got you covered.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Zero Downtime</h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        Careful planning and execution ensure your users never experience interruptions during the migration process.
                      </p>
                    </div>
                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Preserve Business Logic</h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        I understand the importance of maintaining your critical business rules while modernizing the implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-br from-purple-900 to-pink-900' : 'bg-gradient-to-br from-purple-600 to-pink-600'} text-white`}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Smartphone className="w-16 h-16" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Mobile App Development</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-xl leading-relaxed text-purple-50 text-center mb-8">
                    Building cross-platform mobile applications with React Native that deliver native performance and user experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                      <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <Smartphone className="w-8 h-8" />
                        iOS Development
                      </h3>
                      <p className="text-purple-50 mb-4">Native iOS experience with React Native, deployed to App Store.</p>
                      <ul className="space-y-2 text-purple-50">
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>App Store deployment and optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>iOS-specific features and integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Apple Human Interface Guidelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Push notifications and background tasks</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                      <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <Smartphone className="w-8 h-8" />
                        Android Development
                      </h3>
                      <p className="text-purple-50 mb-4">Native Android experience with React Native, deployed to Google Play.</p>
                      <ul className="space-y-2 text-purple-50">
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Google Play Store deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Android-specific features and permissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Material Design implementation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>✓</span>
                          <span>Device compatibility optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-8">
                    <h4 className="text-xl font-bold mb-3 text-center">Why React Native?</h4>
                    <p className="text-purple-50 text-center">Single codebase for both platforms, faster development, easier maintenance, and 90% code reuse between iOS and Android.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Brain className={`w-16 h-16 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>AI: Speed Meets Experience</h2>
                <div className="max-w-4xl mx-auto">
                  <div className={`p-10 rounded-2xl border-2 mb-8 ${
                    darkMode ? 'bg-gray-700 border-blue-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
                  }`}>
                    <p className={`text-xl leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      AI tools like GitHub Copilot and ChatGPT are revolutionizing software development. I leverage these tools to move 2-3x faster, but my 20+ years of experience ensures the architecture, security, and scalability are never compromised.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>AI Gives Me Speed</h3>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-2">
                            <Zap className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            <span>Rapid prototyping and iteration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            <span>Automated boilerplate generation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            <span>Quick exploration of solutions</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Experience Gives Me Quality</h3>
                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-2">
                            <Star className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
                            <span>Validated architecture decisions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
                            <span>Security and performance optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className={`w-5 h-5 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
                            <span>Catching edge cases AI might miss</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-green-50 to-teal-50'}`}>
              <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>What People Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-yellow-400 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      ))}
                    </div>
                    <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      "Karol transformed our legacy PHP application into a modern Laravel system. The migration was seamless, and our team is now much more productive."
                    </p>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Sarah M.</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>CTO, TechStart Inc.</div>
                  </div>

                  <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-yellow-400 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      ))}
                    </div>
                    <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      "His debugging skills are exceptional. He found and fixed issues that had been plaguing us for months. Our NPS went up by 15 points!"
                    </p>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Michael K.</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Product Manager, DataFlow</div>
                  </div>

                  <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-yellow-400 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      ))}
                    </div>
                    <p className={`mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      "A true professional who combines speed with quality. The React Native app he built performs beautifully on both iOS and Android."
                    </p>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Jennifer L.</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Founder, FitLife App</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="cooperate-section" className={`py-20 px-4 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Handshake className={`w-16 h-16 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>How We Could Cooperate</h2>

                <div className="max-w-5xl mx-auto space-y-12">
                  <div className={`p-10 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900' : 'bg-gradient-to-br from-blue-500 to-cyan-500'} text-white`}>
                    <h3 className="text-3xl font-bold mb-6 text-center">Let's Try</h3>
                    <p className="text-xl text-center mb-8 text-blue-50">
                      No formal commitment needed. Let's start with a single issue or task and see how we work together.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="text-xl font-bold mb-3">Per-Issue Basis</h4>
                        <p className="text-blue-50 mb-3">Pick a specific bug, feature, or task. No strings attached.</p>
                        <ul className="space-y-2 text-blue-50">
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Fixed price per issue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>No long-term commitment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Quick turnaround</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="text-xl font-bold mb-3">Trial Period</h4>
                        <p className="text-blue-50 mb-3">A short trial to evaluate if we're a good fit for each other.</p>
                        <ul className="space-y-2 text-blue-50">
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>1-2 week trial project</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Test communication & workflow</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Low risk for both sides</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`p-10 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-orange-900 to-amber-900' : 'bg-gradient-to-br from-orange-500 to-amber-500'} text-white`}>
                    <h3 className="text-3xl font-bold mb-6 text-center">Let's Get It Done</h3>
                    <p className="text-xl text-center mb-8 text-orange-50">
                      Ready for a dedicated partnership? Join forces for part-time or full-time collaboration.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="text-xl font-bold mb-3">Part-Time</h4>
                        <p className="text-orange-50 mb-3">Flexible hours to fit your project needs and budget.</p>
                        <ul className="space-y-2 text-orange-50">
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>10-30 hours per week</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Flexible schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Cost-effective solution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Regular standups & updates</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="text-xl font-bold mb-3">Full-Time</h4>
                        <p className="text-orange-50 mb-3">Complete dedication to your project and team.</p>
                        <ul className="space-y-2 text-orange-50">
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>40 hours per week</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Fully integrated with your team</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Daily standups & meetings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>✓</span>
                            <span>Long-term partnership</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900' : 'bg-gradient-to-br from-blue-600 to-cyan-600'} text-white`}>
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>
                <p className="text-xl mb-12 text-blue-50 text-center max-w-3xl mx-auto">
                  Ready to start your project or just want to discuss possibilities? Let's talk!
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+48123456789"
                        className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                      >
                        <Phone className="w-6 h-6 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-blue-100">+48 123 456 789</div>
                        </div>
                      </a>
                      <a
                        href="mailto:karol.nowakowski@example.com"
                        className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                      >
                        <Mail className="w-6 h-6 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-blue-100">karol.nowakowski@example.com</div>
                        </div>
                      </a>
                      <a
                        href="https://linkedin.com/in/karol-nowakowski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                      >
                        <Linkedin className="w-6 h-6 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">LinkedIn</div>
                          <div className="text-blue-100">Connect professionally</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="block mb-2 font-medium">Name</label>
                        <input
                          type="text"
                          className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Message</label>
                        <textarea
                          rows={4}
                          className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-lg transition-all shadow-xl flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>About Me</h1>

            <section className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>My Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Quality Over Speed</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    I believe in doing things right the first time. While speed matters, quality code that's maintainable and scalable is always my priority.
                  </p>
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Continuous Learning</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Technology evolves rapidly. I stay current with the latest trends and best practices to deliver modern, efficient solutions.
                  </p>
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>User-Centric Approach</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Every line of code I write serves an end user. I focus on creating experiences that are intuitive, fast, and delightful.
                  </p>
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Collaboration</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Great software is built by great teams. I thrive in collaborative environments where ideas are shared and everyone grows together.
                  </p>
                </div>
              </div>
            </section>

            <section className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-cyan-50'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-900'}`}>My Perspective</h2>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  With 20 years of experience in software development, I've seen technologies come and go, but the fundamentals remain the same: clean code, solid architecture, and a focus on solving real problems.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I approach every project with curiosity and humility. There's always something new to learn, a better way to solve a problem, or a perspective I haven't considered yet.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  AI tools have revolutionized how we work, but they're tools—not replacements for experience and wisdom. I leverage AI to move faster while ensuring quality and the big picture are never compromised.
                </p>
              </div>
            </section>

            <section className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-orange-900'}`}>Bio</h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a full-stack developer who loves building things that matter. My journey in tech started over 20 years ago, and I've worked on everything from small startups to enterprise applications. I specialize in PHP, Laravel, Vue, React, and React Native, but I'm always exploring new technologies.
              </p>
              <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you'll find me mentoring junior developers, writing technical documentation, or thinking about how to improve user experiences. I believe in giving back to the community that has given me so much.
              </p>
            </section>
          </div>
        );

      case 'outcome':
        return (
          <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>What I Can Do</h1>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-gray-900 to-gray-800'} text-white`}>
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="w-12 h-12" />
                <h2 className="text-3xl font-bold">Legacy Code Rewriting</h2>
              </div>
              <p className="text-xl mb-6 text-gray-200">
                Transforming outdated, unmaintainable code into modern, efficient, and scalable solutions.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Migrate legacy PHP applications to modern Laravel frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Refactor monolithic codebases into modular, testable components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Improve performance, security, and maintainability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Zero downtime deployments and seamless migrations</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-red-50 to-orange-50'}`}>
              <div className="flex items-center gap-4 mb-6">
                <Bug className={`w-12 h-12 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Debugging & Bug Fixing</h2>
              </div>
              <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I hunt down bugs with precision and fix them for good. Every bug fixed improves user experience and boosts your NPS.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>Fewer Bugs</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happier Users</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Higher NPS</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Better Retention</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>More Trust</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Brand Loyalty</div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-cyan-50'}`}>
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className={`w-12 h-12 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>New Creations</h2>
              </div>
              <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Building modern applications from scratch with the latest technologies and best practices.
              </p>
              <ul className="space-y-3 text-lg">
                <li className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>✓</span>
                  <span>Full-stack web applications with Laravel and Vue/React</span>
                </li>
                <li className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>✓</span>
                  <span>Mobile apps with React Native</span>
                </li>
                <li className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>✓</span>
                  <span>RESTful APIs and GraphQL backends</span>
                </li>
                <li className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>✓</span>
                  <span>Real-time features with WebSockets</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900' : 'bg-gradient-to-br from-blue-600 to-cyan-600'} text-white`}>
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-12 h-12" />
                <h2 className="text-3xl font-bold">AI-Powered Development</h2>
              </div>
              <p className="text-xl text-blue-50 mb-6">
                AI tools like GitHub Copilot and ChatGPT are game-changers for speed. But my 20 years of experience ensures quality, architecture, and the big picture are never compromised.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Zap className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">AI for Speed</h3>
                  <p className="text-blue-50">2-3x faster development, quick prototyping, and automated boilerplate</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Target className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Experience for Quality</h3>
                  <p className="text-blue-50">Validated architecture, security, scalability, and catching edge cases</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tech-stack':
        return (
          <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Tech Stack</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-blue-700' : 'bg-blue-50 border-2 border-blue-200'}`}>
                <Brain className={`w-12 h-12 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>AI Tools</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  GitHub Copilot, ChatGPT, Claude - leveraging AI for rapid development while maintaining code quality through experience.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-orange-700' : 'bg-orange-50 border-2 border-orange-200'}`}>
                <Code className={`w-12 h-12 mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>PHP</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  20+ years of experience building robust backend systems. Deep understanding of OOP, design patterns, and performance optimization.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-red-700' : 'bg-red-50 border-2 border-red-200'}`}>
                <Layers className={`w-12 h-12 mb-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Laravel</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Expert in Laravel ecosystem - Eloquent ORM, queues, events, broadcasting, and building scalable APIs.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-green-700' : 'bg-green-50 border-2 border-green-200'}`}>
                <Code className={`w-12 h-12 mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Vue.js</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Building reactive, component-based UIs with Vue 3, Composition API, Pinia for state management.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-cyan-700' : 'bg-cyan-50 border-2 border-cyan-200'}`}>
                <Code className={`w-12 h-12 mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>React</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Modern React with hooks, context API, and popular libraries. Building performant, maintainable SPAs.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-purple-700' : 'bg-purple-50 border-2 border-purple-200'}`}>
                <Smartphone className={`w-12 h-12 mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>React Native</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Cross-platform mobile development for iOS and Android with native performance.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-blue-700' : 'bg-blue-50 border-2 border-blue-200'}`}>
                <Code className={`w-12 h-12 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>TypeScript</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Type-safe development for catching errors early and improving code maintainability.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border-2 border-amber-700' : 'bg-amber-50 border-2 border-amber-200'}`}>
                <TestTube className={`w-12 h-12 mb-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Testing</h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Vitest, PHPUnit, Jest - comprehensive testing strategies for reliable software.
                </p>
              </div>
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Let's Play</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A playful look at my approach to development, business, and personal growth.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-red-900 to-pink-900' : 'bg-gradient-to-br from-red-500 to-pink-500'} text-white`}>
                <Heart className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Motivation Game</h2>
                <p className="text-lg leading-relaxed">
                  What drives me? The joy of solving complex problems, the satisfaction of seeing users love what I build, and the endless curiosity about how things work. I wake up excited to code.
                </p>
              </div>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-orange-900 to-red-900' : 'bg-gradient-to-br from-orange-500 to-red-500'} text-white`}>
                <Bug className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Debugging Game</h2>
                <p className="text-lg leading-relaxed">
                  Bugs are puzzles waiting to be solved. I approach debugging like a detective - methodically gathering clues, forming hypotheses, and testing them until I find the root cause.
                </p>
              </div>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900' : 'bg-gradient-to-br from-blue-500 to-cyan-500'} text-white`}>
                <Coffee className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Coding Game</h2>
                <p className="text-lg leading-relaxed">
                  Clean code isn't just about following rules - it's about creating clarity and joy for everyone who reads it. Readability, simplicity, and thoughtful testing are my guiding principles.
                </p>
              </div>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-green-900 to-teal-900' : 'bg-gradient-to-br from-green-500 to-teal-500'} text-white`}>
                <DollarSign className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Finance Game</h2>
                <p className="text-lg leading-relaxed">
                  I understand the business side of tech. Every decision impacts ROI, technical debt, and the bottom line. I prioritize features that deliver value and balance quality with speed.
                </p>
              </div>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-purple-900 to-pink-900' : 'bg-gradient-to-br from-purple-500 to-pink-500'} text-white md:col-span-2`}>
                <GraduationCap className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Teaching Game</h2>
                <p className="text-lg leading-relaxed">
                  Sharing knowledge is how we grow as a community. I love mentoring, writing documentation, and helping others level up. Teaching through code reviews, pair programming, and thoughtful questions helps people discover solutions themselves.
                </p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Get In Touch</h1>

            <div className={`p-8 rounded-2xl mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-cyan-50'}`}>
              <p className={`text-xl mb-8 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Interested in working together? Let's discuss how I can help bring your project to life.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+48123456789"
                  className={`flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <Phone className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Phone</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+48 123 456 789</div>
                  </div>
                </a>

                <a
                  href="mailto:karol.nowakowski@example.com"
                  className={`flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <Mail className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Email</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>karol.nowakowski@example.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/karol-nowakowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <Linkedin className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>LinkedIn</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me professionally</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white border-2 border-gray-200'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input
                    type="text"
                    className={`w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input
                    type="email"
                    className={`w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                  <textarea
                    rows={5}
                    className={`w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
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
              <nav className="mt-4 flex flex-col gap-2 pb-4">
                {menuItems.map((item) => {
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
                          : darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-4">
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

            <nav className="flex flex-wrap gap-2 justify-center">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="mt-auto">
        <section className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-br from-blue-900 to-cyan-900' : 'bg-gradient-to-br from-blue-600 to-cyan-600'} text-white`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>
            <p className="text-xl mb-12 text-blue-50 text-center max-w-3xl mx-auto">
              Ready to start your project or just want to discuss possibilities? Let's talk!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+48123456789"
                    className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-blue-100">+48 123 456 789</div>
                    </div>
                  </a>
                  <a
                    href="mailto:karol.nowakowski@example.com"
                    className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">karol.nowakowski@example.com</div>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/karol-nowakowski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
                  >
                    <Linkedin className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-blue-100">Connect professionally</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-lg transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className={`border-t py-8 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className={`text-center md:text-left ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 Karol Nowakowski. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+48123456789" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Phone size={20} />
                </a>
                <a href="mailto:karol.nowakowski@example.com" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com/in/karol-nowakowski" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
