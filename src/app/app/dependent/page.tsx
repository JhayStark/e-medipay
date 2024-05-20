'use client';

import { ChevronLeftIcon, ChevronRightIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DependentCard from '@/components/DependentCard';
import { dependants } from '../../../../dummyData';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className='flex items-center justify-between gap-4 mb-5'>
        <h1 className='font-semibold text-lg md:text-xl'>Dependents</h1>
        <div className='flex items-center gap-x-3'>
          <div className='ml-auto flex items-center gap-2'>
            <Button size='icon' variant='outline'>
              <ChevronLeftIcon className='h-4 w-4' />
              <span className='sr-only'>Previous</span>
            </Button>
            <Button size='icon' variant='outline'>
              <ChevronRightIcon className='h-4 w-4' />
              <span className='sr-only'>Next</span>
            </Button>
          </div>
          <Link href='/app/dependent/add'>
            <Button className='xl:block hidden hover:bg-primary'>
              Add Dependent
            </Button>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {dependants?.map(item => (
          <DependentCard key={item.id} dependant={item} />
        ))}
      </div>
      <Link href='/app/dependent/add'>
        <div className='xl:hidden text-white bg-primary w-14 h-14 shadow-lg fixed right-9 bottom-20 rounded-full justify-center items-center flex'>
          <Plus />
        </div>
      </Link>
    </div>
  );
};

export default Page;
