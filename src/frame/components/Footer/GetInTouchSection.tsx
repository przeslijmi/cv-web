import { contact } from '@frame/constants/contact';
import HomeSection from '@home/components/HomeSection';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface Props {}

export default function GetInTouchSection({}: Props) {

  return (

    <HomeSection
      className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 text-white"
      title="Get In Touch"
      titleClass="text-blue-50"
      text="Ready to start your project or just want to discuss possibilities? Let's talk!"
      textClass="text-white/90"
      wider
      children={
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span className="font-semibold">Phone</span>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
          >
            <Mail className="w-6 h-6" />
            <span className="font-semibold">Email</span>
          </a>

          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
          >
            <Linkedin className="w-6 h-6" />
            <span className="font-semibold">LinkedIn</span>
          </a>

          {/* <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border-2 border-white/20 hover:border-white/40 hover:scale-105"
          >
            <FileText className="w-6 h-6" />
            <span className="font-semibold">Form</span>
          </button> */}
        </div>
      }
    />
  );
}
