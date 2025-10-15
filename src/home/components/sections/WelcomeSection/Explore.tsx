import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const backgroundColor:Record<'blue'|'amber'|'cyan',string> = {
  'blue': 'dark:bg-gradient-to-br dark:from-blue-900 dark:to-blue-800 bg-gradient-to-br from-blue-500 to-blue-600',
  'amber': 'dark:bg-gradient-to-br dark:from-orange-900 dark:to-amber-800 bg-gradient-to-br from-orange-500 to-amber-500',
  'cyan': 'dark:bg-gradient-to-br dark:from-cyan-900 dark:to-blue-800 bg-gradient-to-br from-cyan-500 to-blue-500',
}

interface Props {
  title: string;
  icon: LucideIcon;
  text: string;
  location: string;
  leadingColor: 'blue'|'amber'|'cyan';
  disabled?: boolean;
}

export default function Explore({
  title,
  icon,
  text,
  location,
  leadingColor,
  disabled
}: Props) {
  const Icon = icon;

  return (
    <Link to={disabled ? '#' : location} className={`${disabled ? 'cursor-not-allowed' : ''}`}>
      <div className={`
        p-8 rounded-2xl shadow-xl transition-shadow text-white
        ${disabled ? 'opacity-20' : 'hover:shadow-2xl'}
        ${backgroundColor[leadingColor]}
      `}>
        <div className="flex items-center justify-center mb-4">
          <Icon size={50} />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}
