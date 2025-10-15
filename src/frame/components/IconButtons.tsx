import { Phone, Mail, Linkedin, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@frame/hooks/useDarkMode';
import IconButton from '@frame/components/IconButtons/IconButton';

interface Props {}

export default function IconButtons({}: Props) {
  const { isDark, toggle } = useDarkMode(false);

  return (
    <div className="flex items-center gap-2">
      <IconButton
        onClick={() => (window.location.href = 'tel:+48601459372')}
        icon={Phone}
      />
      <IconButton
        onClick={() => (window.location.href = 'mailto:karol.nowakowski@example.com')}
        icon={Mail}
      />
      <IconButton
        onClick={() => (window.location.href = 'https://linkedin.com/in/karol-nowakowski')}
        icon={Linkedin}
      />
      <IconButton
        onClick={() => toggle()}
        icon={isDark ? Sun : Moon}
      />
    </div>
  );
}
