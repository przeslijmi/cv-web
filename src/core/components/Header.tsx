import { useState } from 'react';
import Logo from '@core/components/Logo';
import IconButtons from '@core/components/IconButtons';
import NavMobile from '@core/components/nav/NavMobile';
import Hamburger from '@core/components/nav/Hamburger';
import Nav from '@core/components/nav/Nav';

interface Props {}

export default function Header({}: Props) {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <header className="backdrop-blur-md border-b sticky top-0 z-50 shadow-sm transition-colors duration-300 bg-white/80 border-blue-100 dark:bg-gray-800/90 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <Hamburger
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              isOpen={mobileMenuOpen}
            />
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && <NavMobile onClick={() => setMobileMenuOpen(false)} />}
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-4">
            <Logo big />
            <IconButtons />
          </div>

          <Nav />
        </div>

      </div>
    </header>
  );
}
