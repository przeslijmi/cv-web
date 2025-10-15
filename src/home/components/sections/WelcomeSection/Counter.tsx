import { useCountUp } from '@home/hooks/useCountUp';

const backgroundColor:Record<'blue'|'amber'|'cyan'|'yellow',string> = {
  'blue': 'dark:bg-gradient-to-br dark:from-blue-900/50 dark:to-blue-800/50 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
  'amber': 'dark:bg-gradient-to-br dark:from-orange-900/50 dark:to-amber-900/50 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200',
  'cyan': 'dark:bg-gradient-to-br dark:from-cyan-900/50 dark:to-cyan-800/50 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200',
  'yellow': 'dark:bg-gradient-to-br dark:from-amber-900/50 dark:to-yellow-900/50 dark:border-amber-700 bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-200',
}
const textColor:Record<'blue'|'amber'|'cyan'|'yellow',string> = {
  'blue': 'dark:text-blue-400 text-blue-600',
  'amber': 'dark:text-orange-400 text-orange-600',
  'cyan': 'dark:text-cyan-400 text-cyan-600',
  'yellow': 'dark:text-amber-400 text-amber-600',
}

interface Props {
  title: string;
  leadingColor: 'blue'|'amber'|'cyan'|'yellow';
  unit?: '+'|'%'|'∞';
  amount?: number;
}

export default function Counter({
  title,
  leadingColor,
  unit,
  amount,
}: Props) {
  const count = useCountUp(amount);

  return (
    <div className={`p-6 rounded-2xl border-2 hover:scale-105 transition-transform ${backgroundColor[leadingColor]}`}>
      <div className={`text-3xl font-bold mb-1 ${textColor[leadingColor]}`}>{count}{unit}</div>
      <div className="text-sm dark:text-gray-300 text-gray-700">{title}</div>
    </div>
  );
}
