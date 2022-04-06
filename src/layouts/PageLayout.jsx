import { useEffect, useState } from 'react';
import { OSidebar } from 'components/organisms/OSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from 'store/authReducer';

export const PageLayout = ({ children }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getCurrentUser(token)).then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div className="bg-base h-screen">
      <div className="h-full grid grid-cols-[auto_1fr]">
        <OSidebar />
        {isLoading ? (
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl text-primary">Cargando...</div>
          </div>
        ) : (
          <div className="grid grid-rows-[80px_1fr]">
            <header className="bg-white flex items-center p-6">
              <h2 className="text-2xl font-bold">
                Bienvenido, {currentUser?.nombre}{' '}
              </h2>
            </header>
            <div>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};
