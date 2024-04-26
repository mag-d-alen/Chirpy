import React from "react";
type HeaderProps = {
  children: React.ReactNode;
};
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center text-xl md:text-3xl font-bold mb-8  text-light">
      {children}
    </div>
  );
};
export default Header;
