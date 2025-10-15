import { Linkedin, Mail, Phone, Send } from "lucide-react";

interface Props {}

export default function Footer({}: Props) {

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 text-white">
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
                  <div className="text-blue-100 dark:text-blue-200">+48 123 456 789</div>
                </div>
              </a>
              <a
                href="mailto:karol.nowakowski@example.com"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all border border-white/20"
              >
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100 dark:text-blue-200">karol.nowakowski@example.com</div>
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
                  <div className="text-blue-100 dark:text-blue-200">Connect professionally</div>
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
                  className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200 dark:placeholder-blue-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200 dark:placeholder-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-white placeholder-blue-200 dark:placeholder-blue-300 resize-none"
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

  );
}
