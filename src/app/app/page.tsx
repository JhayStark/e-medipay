'use client';

import React from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  Users,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DependentCard from '@/components/DependentCard';
import { dependants } from '../../../dummyData';

const Page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card className='max-w-lg'>
          <CardHeader>
            <CardTitle>Total Dependents</CardTitle>
            <CardDescription>10</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center gap-2'>
              <Users className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              <p className='text-gray-500 dark:text-gray-400'>
                You have 10 dependents enrolled in the program.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className='max-w-lg'>
          <CardHeader>
            <CardTitle>Total Payments</CardTitle>
            <CardDescription>$1,700.00</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center gap-2'>
              <Wallet className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              <p className='text-gray-500 dark:text-gray-400'>
                You have made a total of $1,700.00 in payments.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className='max-w-lg'>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardDescription>$800.00</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center gap-2'>
              <Clock className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              <p className='text-gray-500 dark:text-gray-400'>
                You have $800.00 in pending payments.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='flex items-center gap-4 my-5'>
        <h1 className='font-semibold text-lg md:text-xl'>Dependents</h1>
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
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {dependants?.map(item => (
          <DependentCard key={item.id} dependant={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
