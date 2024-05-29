import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCardIcon, DollarSignIcon, TabletSmartphone } from 'lucide-react';
import BillDialog from '@/components/BillDialog';
import { dependants } from '../../../../../dummyData';

const Page = () => {
  return (
    <div>
      {/* <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold text-lg md:text-2xl'>Payments</h1>
        </div>
      </div> */}
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Payments</CardTitle>
            <CardDescription>
              Review and pay all your outstanding payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='relative w-[400px] sm:w-full overflow-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[32px]'>
                      <Checkbox id='select-all' />
                    </TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Dependent</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dependants?.map(pay => (
                    <TableRow key={pay.id}>
                      <TableCell>
                        <Checkbox id='select-1' />
                      </TableCell>
                      <TableCell>{pay.lastVisit}</TableCell>
                      <TableCell>
                        <Link className='font-medium hover:underline' href='#'>
                          {pay.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link className='font-medium hover:underline' href='#'>
                          {pay.provider}
                        </Link>
                      </TableCell>
                      <TableCell>{pay.amount}</TableCell>
                      <TableCell>
                        <BillDialog item={pay} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter>
            <div className='flex justify-between items-center'>
              <div className='text-gray-700 space-y-2 dark:text-gray-400'>
                <p>Total amount selected: ₵ 500.00</p>
                <p>Applicable Charges: ₵ 20.00</p>
                <p>Total Bill: ₵ 520.00 </p>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className='max-h-96'>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Add, edit, and manage your payment methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-center justify-between cursor-pointer hover:text-blue-500 '>
                <div className='flex items-center gap-4'>
                  <CreditCardIcon className='h-8 w-8 text-gray-500' />
                  <div>
                    <div className='font-medium'>Visa Ending in 1234</div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Expires 12/24
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between cursor-pointer hover:text-blue-500'>
                <div className='flex items-center gap-4'>
                  <CreditCardIcon className='h-8 w-8 text-gray-500' />
                  <div>
                    <div className='font-medium'>Mastercard Ending in 5678</div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Expires 06/25
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between cursor-pointer hover:text-blue-500'>
                <div className='flex items-center gap-4'>
                  <TabletSmartphone className='h-8 w-8 text-gray-500' />
                  <div>
                    <div className='font-medium'>+233 24 **** **59</div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      MTN Mobile money
                    </div>
                  </div>
                </div>
              </div>
              <Button size='sm' variant='ghost'>
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
