import { Button } from '@/components/ui/button';
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
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { dependants } from '../../../../dummyData';
import { Checkbox } from '@/components/ui/checkbox';
import BillDialog from '@/components/BillDialog';

const Page = () => {
  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold text-lg md:text-2xl'>Payments</h1>
        </div>
        <Link href='/app/payments/all'>
          <Button size='sm' variant='outline'>
            Pay All Outstanding
          </Button>
        </Link>
      </div>
      <div className='grid lg:grid-cols-[480px_1fr] gap-6'>
        <Card className='max-h-[450px]'>
          <CardHeader>
            <CardTitle>Payment Reports</CardTitle>
            <CardDescription>
              View detailed reports on your payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div>
                <h3 className='text-lg font-semibold'>Total Payments</h3>
                <p className='text-4xl font-bold text-green-900'>$15,000</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Outstanding Bills</h3>
                <p className='text-4xl font-bold text-red-900'>$2,500</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Paid on Time</h3>
                <p className='text-4xl font-bold text-blue-900'>92%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='outline'>View Full Report</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>All Payments</CardTitle>
            <CardDescription>
              Review and manage all your payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='relative w-[340px] sm:w-full overflow-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Dependent</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>View</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dependants?.map(pay => (
                    <TableRow key={pay.id}>
                      <TableCell>{pay.lastVisit}</TableCell>
                      <TableCell>{pay.name}</TableCell>
                      <TableCell>{pay.provider}</TableCell>
                      <TableCell>{pay.amount}</TableCell>
                      <TableCell>
                        <Badge variant={pay.id % 2 ? 'secondary' : 'pending'}>
                          {pay.id % 2 ? 'Paid' : 'Pending'}
                        </Badge>
                      </TableCell>
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
            <Button variant='outline'>View All Payments</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
