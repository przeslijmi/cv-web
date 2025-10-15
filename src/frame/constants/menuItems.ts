
import { User, Code, Heart, MessageCircle, Gamepad2, Target } from 'lucide-react';

export const menuItems = [
  { url: '/', id: 'landing', label: 'Home', icon: User },
  { url: '/about-me', id: 'about', label: 'About Me', icon: Heart },
  { url: '/outcome', id: 'outcome', label: 'Outcome', icon: Target },
  { url: '/tech-stack', id: 'tech-stack', label: 'Tech Stack', icon: Code },
  { url: '/games', id: 'games', label: 'Games', icon: Gamepad2 },
  { url: '/contact', id: 'contact', label: 'Contact', icon: MessageCircle },
];
