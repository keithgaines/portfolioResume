import React from 'react';
import Navbar from 'web/src/components/Navbar/Navbar'
type HomeLayoutProps = {
  children?: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
