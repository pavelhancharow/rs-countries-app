import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);
