import { useState } from 'react';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';

function OldHome() {
  const [activeSection, setActiveSection] = useState('landing');
  const [darkMode] = useState(false);

  const renderContent = () => {
    switch (activeSection) {

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

  return ();
}

export default OldHome;
