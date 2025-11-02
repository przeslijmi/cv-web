import { contact } from '@core/constants/contact';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface Props {}

export default function LowestFooter({}: Props) {
  const year = new Date().getFullYear()

  return (
    <div className="border-t py-8 dark:bg-gray-800 dark:border-gray-700 bg-white border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left dark:text-gray-400 text-gray-600">
            © 2024-{year} Karol Nowakowski. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${contact.phone}`}
              className="transition-colors dark:text-gray-400 dark:hover:text-blue-400 text-gray-600 hover:text-blue-600"
            ><Phone size={20} /></a>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors dark:text-gray-400 dark:hover:text-blue-400 text-gray-600 hover:text-blue-600"
            ><Mail size={20} /></a>
            <a
              href={contact.linkedIn} target="
              blank" rel="noopener noreferrer" className="transition-colors dark:text-gray-400 dark:hover:text-blue-400 text-gray-600 hover:text-blue-600"
            ><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
