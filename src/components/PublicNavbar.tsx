import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const PublicNavBar = () => {
  return (
    <div className='flex w-full justify-between items-center max-w-[1120px] mx-auto py-4 px-10 xl:px-0'>
      <Link href='/'>
        <Image src='/logo.png' width={100} height={64} alt='logo' />
      </Link>
      <ul className='hidden lg:flex items-center gap-x-5'>
        <li className='cursor-pointer'>Shop Plans</li>
        <li className='cursor-pointer'>Member Resources</li>
        <li className='cursor-pointer'>For Brokers & Providers</li>
        <li className='cursor-pointer'>About Us</li>
      </ul>
      <Button
        variant='outline'
        className='border-primary text-primary rounded-3xl'
      >
        Find a HCP
      </Button>
    </div>
  );
};

export default PublicNavBar;
