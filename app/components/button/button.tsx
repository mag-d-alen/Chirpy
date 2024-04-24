import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  // onClick: () => void;
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-red-500  hover:bg-red-700  text-white"
          : "bg-white hover:bg-gray-100  text-gray-800 border border-gray-300 "
      }
       rounded-3xl px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}>
      {children}
    </button>
  );
};
export default Button;
