import ContactElement from '@contact/components/ContactElement';
import { contact } from '@core/constants/contact';
import SubLayout from '@core/layouts/SubLayout';
import { GitBranch, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {

  return (
    <SubLayout title="Get In Touch" contact={false}>

      <div className="p-8 rounded-2xl mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-slate-900">
        <p className="text-xl mb-8 text-center text-gray-700 dark:text-gray-300">
          Interested in working together? Let's discuss how I can help bring your project to life.
        </p>

        <div className="space-y-4">

          <ContactElement
            href={`tel:${contact.phone}`}
            icon={Phone}
            title="Phone"
            text={contact.phoneNice}
          />

          <ContactElement
            href={`mailto:${contact.email}`}
            icon={Mail}
            title="Email"
            text={contact.email}
          />

          <ContactElement
            href={contact.linkedIn}
            icon={Linkedin}
            title="LinkedIn"
            text="Connect with me professionally"
            newWindow
          />

          <ContactElement
            href={contact.github}
            icon={GitBranch}
            title="GitHub"
            text="Check out my code examples"
            newWindow
          />

          <ContactElement
            href={contact.npm}
            icon={Globe}
            title="npmjs.com"
            text="See my public utilities/libraries available on NPM"
            newWindow
          />

          <ContactElement
            icon={MapPin}
            title="Tax Location for B2B"
            text="Poland / European Union"
          />

        </div>
      </div>

    </SubLayout>
  );
}
