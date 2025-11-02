import { Phone, Mail, Linkedin, Moon, Sun } from 'lucide-react';
import IconButton from '@core/components/IconButtons/IconButton';
import { contact } from '@core/constants/contact';
import { useTheme } from '@core/hooks/useTheme';

interface Props {}

export default function IconButtons({}: Props) {
  const { isDark, toggle } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <IconButton
        onClick={() => (window.location.href = `tel:${contact.phone}`)}
        icon={Phone}
      />
      <IconButton
        onClick={() => (window.location.href = `mailto:${contact.email}`)}
        icon={Mail}
      />
      <IconButton
        onClick={() => window.open(contact.linkedIn, '_blank')}
        icon={Linkedin}
      />
      <IconButton
        onClick={() => toggle()}
        icon={isDark() ? Sun : Moon}
      />
    </div>
  );
}
