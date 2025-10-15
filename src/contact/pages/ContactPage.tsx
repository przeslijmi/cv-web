import { contact } from '@frame/constants/contact';
import SubLayout from '@frame/layouts/SubLayout';
import { Linkedin, Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const darkMode = false;

  return (
    <SubLayout title="Get In Touch" contact={false}>

      <div className="p-8 rounded-2xl mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-slate-900">
        <p className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300">
          Interested in working together? Let's discuss how I can help bring your project to life.
        </p>

        <div className="space-y-4">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 bg-white hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-200">Phone</div>
              <div className="text-gray-600 dark:text-gray-400">{contact.phoneNice}</div>
            </div>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 bg-white hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-200">Email</div>
              <div className="text-gray-600 dark:text-gray-400">{contact.email}</div>
            </div>
          </a>

          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl transition-all hover:scale-105 bg-white hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-200">LinkedIn</div>
              <div className="text-gray-600 dark:text-gray-400">Connect with me professionally</div>
            </div>
          </a>
        </div>
      </div>

    </SubLayout>
  );
}
