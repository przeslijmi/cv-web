import { Menu, X } from 'lucide-react';

interface Props {
  isOpen?: boolean,
  onClick: () => void,
}

export default function Hamburger({
  isOpen = false,
  onClick,
}: Props) {

  return (
    <button
      onClick={() => onClick()}
      className={`
        p-2 rounded-lg text-white hover:scale-110 transition-colors ml-2
        ${isOpen ? 'bg-cyan-600' : 'bg-blue-600'}
      `}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}
