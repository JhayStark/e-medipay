import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1120px] mx-auto flex flex-col items-end gap-5 md:gap-0 md:flex-row md:items-start justify-between px-5'>
      <div>
        <Image src='/logo-white.png' width={150} height={64} alt='logo' />
        <div></div>
      </div>
      <div className='text-gray-400 text-right space-y-2 '>
        <p className='text-white'>Questions about our plans?</p>
        <p>Call us Monday - Friday 8am - 8pm</p>
        <p>For Individual & Family plans, 1-855-672-2788</p>
        <p>For Small Group plans, 1-855-672-2784</p>
      </div>
    </div>
  );
};

export default Footer;
