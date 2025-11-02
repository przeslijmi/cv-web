import { LucideIcon } from 'lucide-react';

interface Props {
  onClick: () => void,
  icon: LucideIcon,
}

export default function IconButton({
  onClick,
  icon,
}: Props) {
  const Icon = icon;

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg transition-colors dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-blue-400 bg-blue-50 hover:bg-blue-100 text-blue-600"
    >
      <Icon size={20} />
    </button>
  );
}
