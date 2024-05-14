import PublicNavBar from '@/components/PublicNavbar';
import React from 'react';

const SideCards = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='w-56 h-44 bg-primary rounded-md'></div>
      <h3 className='mt-2'>Get Virtual care 24/7</h3>
      <p>Talk to a provider any time</p>
    </div>
  );
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <PublicNavBar />
      <div className='border-t-2 py-5 md:py-12 p-5'>
        <div className='mx-auto max-w-5xl flex-col lg:flex-row flex lg:items-start md:justify-between items-center'>
          <div className='max-w-[420px] w-full pb-5 lg:pb-0'>{children}</div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
            <SideCards />
            <SideCards />
            <SideCards />
            <SideCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
