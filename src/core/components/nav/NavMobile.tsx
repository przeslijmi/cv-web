import { menuItems } from '@core/constants/menuItems';
import { Link } from 'react-router-dom';

interface Props {
  onClick: () => void,
}

export default function NavMobile({
  onClick,
}: Props) {

  return (
    <nav className="mt-4 flex flex-col gap-2 pb-4">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            to={item.url}
            onClick={() => onClick()}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all
              ${(location.pathname === item.url)
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white text-gray-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
