import React from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { BuildingIcon, CalendarIcon, WalletIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DependentCard = ({ dependant }: any) => {
  return (
    <Card className='max-w-lg'>
      <CardHeader>
        <div className='flex justify-between items-start'>
          <div>
            <CardTitle>{dependant.name}</CardTitle>
            <CardDescription>
              {dependant.relation}, Age: {dependant.age}
            </CardDescription>
          </div>
          <div className='flex items-center gap-2'>
            {dependant?.status ? (
              <Badge
                className='bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                variant='outline'
              >
                Paid
              </Badge>
            ) : (
              <Badge
                className='bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                variant='outline'
              >
                Unpaid
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
            <p className='text-gray-500 dark:text-gray-400'>
              Last Visit: {dependant.lastVisit}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <BuildingIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
            <p className='text-gray-500 dark:text-gray-400'>
              Provider: {dependant.provider}
            </p>
          </div>
          {/* <div className='flex items-center gap-2'>
            <WalletIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
            <p className='text-gray-500 dark:text-gray-400'>
              Amount: {dependant.amount}
            </p>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default DependentCard;
