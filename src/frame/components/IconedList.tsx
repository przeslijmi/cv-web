import { Check, LucideIcon } from 'lucide-react';

interface Props {
  list: string[];
  listClass?: string;
  icon?: LucideIcon;
  iconClass?: string;
}

export default function IconedList({
  list,
  listClass = '',
  icon = Check,
  iconClass = '',
}: Props) {

  return (
    <ul className={`space-y-2 ${listClass}`}>
      {list.map((element: string) => {
        const Icon = icon;

        return (<li className="flex items-start gap-2">
          <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${iconClass}`} />
          <span>{element}</span>
        </li>
        )
      })}
    </ul>
  );
}
