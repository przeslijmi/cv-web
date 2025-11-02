import { menuItems } from '@core/constants/menuItems';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Props {}

export default function Nav({}: Props) {
  const location = useLocation();

  return (
    <nav className="flex flex-wrap gap-2 justify-center">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            to={item.url}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
              ${(location.pathname === item.url)
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                : `bg-white text-gray-700 hover:bg-blue-50 border border-blue-200
                   dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-500/50`
            }`}
          >
            <Icon size={20} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
