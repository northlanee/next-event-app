import React from "react";

import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default Layout;
