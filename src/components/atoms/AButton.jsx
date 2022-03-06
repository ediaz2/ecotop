export const Abutton = ({ children, className, ...props }) => (
  <button
    className={`${className} text-primary bg-secondary hover:bg-secondary-200 focus:ring-3 focus:ring-secondary font-bold rounded-lg w-full py-2.5 text-center`}
    {...props}>
    {children}
  </button>
);
