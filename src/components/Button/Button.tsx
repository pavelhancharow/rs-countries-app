import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-800 rounded-lg text-center cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);
