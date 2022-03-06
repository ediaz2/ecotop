import { ALabel } from 'components/atoms/ALabel';

export const MInput = ({
  label,
  name,
  value,
  onChange,
  className,
  ...props
}) => (
  <div className={`${className} mb-6`}>
    <ALabel htmlFor={name}>{label}</ALabel>
    <input
      id={name}
      className="border-2 border-secondary-100 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
      placeholder={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);
