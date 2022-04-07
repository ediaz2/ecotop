import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authLogout } from 'store/authReducer';

import { Abutton } from 'components/atoms/AButton';
import { ALogo } from 'components/atoms/ALogo';
import { AIsologo } from 'components/atoms/AIsologo';
import { ARouterLink } from 'components/atoms/ARouterLink';
import {
  LogoutIcon,
  ChevronLeftIcon,
  HomeIcon,
  UsersIcon,
  UserIcon,
} from '@heroicons/react/solid';

export const OSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const signOut = () => {
    dispatch(authLogout());
    navigate('/login');
  };

  return (
    <aside
      className={`relative bg-secondary p-5 transition-width duration-300 ease-in-out ${
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
            {isOpen ? (
              <ALogo className="fill-white w-36 h-20" />
            ) : (
              <AIsologo className="fill-white w-36 h-20" />
            )}
          </div>
          <nav>
            <ul className="space-y-6">
              <ARouterLink to="/main">
                <HomeIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
                <span className="flex-1 whitespace-nowrap">Inicio</span>
              </ARouterLink>
              <ARouterLink to="/users">
                <UsersIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
                <span className="flex-1 whitespace-nowrap">Usuarios</span>
              </ARouterLink>
              <ARouterLink to="/profile">
                <UserIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
                <span className="flex-1 whitespace-nowrap">Perfil</span>
              </ARouterLink>
            </ul>
          </nav>
        </div>
        <Abutton
          className="!justify-start bg-red text-red-800"
          onClick={signOut}>
          <LogoutIcon className="flex-shrink-0 text-white w-6 h-6 transition duration-75 mr-3" />
          <span className="flex-1 whitespace-nowrap">Usuarios</span>
        </Abutton>
      </div>
    </aside>
  );
};
