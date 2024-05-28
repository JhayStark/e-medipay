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
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card>
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
            <div className='relative w-full overflow-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Dependent</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Dr. Jane Smith</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>
                      <Badge variant='secondary'>Paid</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-03-01</TableCell>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>Dr. John Doe</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>
                      <Badge variant='secondary'>Paid</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-05-01</TableCell>
                    <TableCell>Michael Smith</TableCell>
                    <TableCell>Dr. Sarah Johnson</TableCell>
                    <TableCell>$300.00</TableCell>
                    <TableCell>
                      <Badge variant='destructive'>Pending</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-20</TableCell>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell>Dr. David Lee</TableCell>
                    <TableCell>$200.00</TableCell>
                    <TableCell>
                      <Badge variant='destructive'>Overdue</Badge>
                    </TableCell>
                  </TableRow>
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
