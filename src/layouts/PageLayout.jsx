import { OSidebar } from 'components/organisms/OSidebar';
import { useCurrentUser } from 'hooks/useCurrentUser';

export const PageLayout = ({ children }) => {
  const { currentUser } = useCurrentUser();
  console.log('currentUser', currentUser);

  return (
    <div className="bg-base h-screen">
      <div className="h-full grid grid-cols-[auto_1fr]">
        <OSidebar />
        <div className="grid grid-rows-[80px_1fr]">
          <header className="bg-white flex items-center p-6">
            <h2 className="text-2xl font-bold">Bienvenido, Lalo </h2>
          </header>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
