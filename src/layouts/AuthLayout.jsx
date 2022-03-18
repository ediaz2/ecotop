import { ALogo } from 'components/atoms/ALogo';

export const AuthLayout = ({ children }) => (
  <div className="bg-secondary h-screen">
    <div className="h-full grid grid-rows-[1fr_120px]">
      <section className="h-full flex justify-center items-center">
        {children}
      </section>
      <section className="h-full flex justify-center items-center">
        <ALogo white className="w-32 h-auto" />
      </section>
    </div>
  </div>
);
