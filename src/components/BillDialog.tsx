import React from 'react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  DialogFooter,
  DialogContent,
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { FolderKanban } from 'lucide-react';

const BillDialog = ({ item }: { item: any }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <FolderKanban className='text-yellow-700' />
      </DialogTrigger>
      <DialogContent className='p-6 sm:p-10 grid gap-6'>
        <div className='grid gap-2'>
          <h2 className='text-2xl font-semibold'>Bill Details</h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Review the details of this outstanding bill.
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div>
              <Label>Date</Label>
              <p className='font-medium'>{item?.lastVisit}</p>
            </div>
            <div>
              <Label>Dependent</Label>
              <p className='font-medium'>{item?.name}</p>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div>
              <Label>Provider</Label>
              <p className='font-medium'>{item?.provider}</p>
            </div>
            <div>
              <Label>Amount</Label>
              <p className='font-medium'>{item?.amount}</p>
            </div>
          </div>
          <Separator />
          <div className='grid gap-2'>
            <h3 className='text-lg font-semibold'>Breakdown</h3>
            <div className='grid gap-2'>
              <div className='flex justify-between'>
                <div>Office Visit</div>
                <div>$200.00</div>
              </div>
              <div className='flex justify-between'>
                <div>Lab Tests</div>
                <div>$50.00</div>
              </div>
              <div className='flex justify-between'>
                <div>Medication</div>
                <div>$50.00</div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant='ghost'>Pay Bill</Button>
          <Button variant='outline'>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BillDialog;
