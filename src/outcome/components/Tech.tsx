import { Code, LucideIcon } from 'lucide-react';

type TechType = 'front'|'back'|'mobile'|'other';

const colorScheme: Record<TechType,{boxClass: string, iconClass: string}> = {
  front: {
    boxClass: 'bg-green-50 border-2 border-green-200 dark:bg-gray-800 dark:border-green-700',
    iconClass: 'text-green-600 dark:text-green-400',
  },
  back: {
    boxClass: 'bg-orange-50 border-2 border-orange-200 dark:bg-gray-800 dark:border-orange-700',
    iconClass: 'text-orange-600 dark:text-orange-400',
  },
  mobile:  {
    boxClass: 'bg-purple-50 border-2 border-purple-200 dark:bg-gray-800 dark:border-purple-700',
    iconClass: 'text-purple-600 dark:text-purple-400',
  },
  other:  {
    boxClass: 'bg-blue-50 border-2 border-blue-200 dark:bg-gray-800 dark:border-blue-700',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
}

interface Props {
  type: TechType;
  name: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export default function Tech({
  type,
  name,
  children,
  icon,
}: Props) {
  const Icon = icon ?? (Code);

  return (
    <div className={`p-6 rounded-2xl ${colorScheme[type].boxClass}`}>
      <div className="flex mb-4 space-x-4">
        <Icon className={`w-12 h-12 ${colorScheme[type].iconClass}`} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 self-center">{name}</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}
