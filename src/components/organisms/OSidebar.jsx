import { useState } from 'react';

import { Abutton } from 'components/atoms/AButton';
import { ALogo } from 'components/atoms/ALogo';
import { ARouterLink } from 'components/atoms/ARouterLink';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';

export const OSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside
      className={`relative bg-secondary p-6 transition-width duration-300 ease-in-out ${
        isOpen ? 'w-60' : 'w-20'
      }`}
      aria-label="sidebar">
      <button
        className="absolute -right-4 top-24 rounded-full shadow-md"
        onClick={toggle}>
        <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
          <ChevronLeftIcon
            className={`w-7 h-7 transform ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </div>
      </button>
      <div className="h-full flex flex-col justify-between overflow-hidden">
        <div className="mb-10">
          <div className="flex justify-center my-6">
            <ALogo white icon={!isOpen} className="w-36 h-20" />
          </div>
          <nav>
            <ul className="space-y-6">
              <ARouterLink to="/">
                <ChevronLeftIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
                <span className="flex-1 whitespace-nowrap">Inicio</span>
              </ARouterLink>
              <ARouterLink to="/users">
                <ChevronLeftIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
                <span className="flex-1 whitespace-nowrap">Usuarios</span>
              </ARouterLink>
            </ul>
          </nav>
        </div>
        <Abutton className="bg-red text-red-800" onClick={signOut}>
          {isOpen ? 'Cerrar Sesión' : 'C'}
        </Abutton>
      </div>
    </aside>
  );
};
