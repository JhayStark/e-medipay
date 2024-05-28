import PublicNavBar from '@/components/PublicNavbar';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <PublicNavBar />
      <div className='border-t-2 max-h-[calc(100vh-72px)] overflow-auto py-5 md:py-12 p-5'>
        <div className='mx-auto  max-w-3xl flex-col lg:flex-row flex lg:items-start md:justify-between items-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
