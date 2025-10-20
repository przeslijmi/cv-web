import { LucideIcon } from 'lucide-react';

interface BodyProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

function Body({
  icon,
  title,
  text,
}: BodyProps) {
  const Icon = icon;

  return (<>
    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    <div>
      <div className="font-semibold text-gray-900 dark:text-gray-200">{title}</div>
      <div className="text-gray-600 dark:text-gray-400">{text}</div>
    </div>
  </>)
}

interface Props {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
  newWindow?: boolean;
}

export default function ContactElement({
  icon,
  title,
  text,
  href,
  newWindow,
}: Props) {
  const className = 'flex items-center gap-4 p-6 rounded-xl transition-all bg-white hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600';

  if (href) {
    return (
      <a
        href={href}
        target={newWindow ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={`${className} hover:scale-105`}
      >
        <Body icon={icon} title={title} text={text} />
      </a>
    );
  }

  return (
    <div className={className}>
      <Body icon={icon} title={title} text={text} />
    </div>
  );
}
