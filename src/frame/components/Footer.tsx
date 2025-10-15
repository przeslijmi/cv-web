import { Linkedin, Mail, Phone, Send, X, FileText } from "lucide-react";
import { useState } from "react";

interface Props {}

export default function Footer({}: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-8 text-blue-50">
            Choose your preferred way to contact me
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+48123456789"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="font-semibold">Phone</span>
            </a>

            <a
              href="mailto:karol.nowakowski@example.com"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              <span className="font-semibold">Email</span>
            </a>

            <a
              href="https://linkedin.com/in/karol-nowakowski"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              <span className="font-semibold">Form</span>
            </button>
          </div>
        </div>
      </section>

      <div className="border-t py-6 bg-white dark:bg-gray-800 border-blue-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left text-gray-600 dark:text-gray-400">
              © 2024 Karol Nowakowski. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+48123456789" className="transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Phone size={20} />
              </a>
              <a href="mailto:karol.nowakowski@example.com" className="transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/karol-nowakowski" target="_blank" rel="noopener noreferrer" className="transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>

            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send a Message</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-400/50 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-400/50 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-400/50 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
