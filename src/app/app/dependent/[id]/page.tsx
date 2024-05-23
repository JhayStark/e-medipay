import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ClipboardCheckIcon } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-end gap-4'>
        {/* <h1 className='font-semibold text-lg md:text-2xl'>John Doe</h1> */}
        <Link href='/app/dependent/approvals'>
          <Button
            className='flex items-center gap-2 text-orange-500'
            variant='secondary'
          >
            <ClipboardCheckIcon className='h-4 w-4' />
            Approvals (2)
          </Button>
        </Link>
      </div>
      <div className='grid lg:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Dependent Stats</CardTitle>
            <CardDescription>Key metrics for this dependent.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-center justify-between'>
                <span>Age</span>
                <span className='font-semibold'>33</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Total Visits</span>
                <span className='font-semibold'>12</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Approved Visits</span>
                <span className='font-semibold'>10</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Pending Visits</span>
                <span className='font-semibold'>2</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dependent Health</CardTitle>
            <CardDescription>
              Overall health status for this dependent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-center justify-between'>
                <span>BMI</span>
                <span className='font-semibold'>24.5</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Blood Pressure</span>
                <span className='font-semibold'>120/80</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Cholesterol</span>
                <span className='font-semibold'>180 mg/dL</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Vaccination Status</span>
                <span className='font-semibold'>Up to date</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dependent Utilization</CardTitle>
            <CardDescription>Usage metrics for this dependent.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-center justify-between'>
                <span>Visits per Year</span>
                <span className='font-semibold'>4</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Avg. Visit Cost</span>
                <span className='font-semibold'>$150</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Total Spend</span>
                <span className='font-semibold'>$1,800</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Highest Spend</span>
                <span className='font-semibold'>$1,800</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='grid lg:grid-cols-1 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Dependent Information</CardTitle>
            <CardDescription>
              View and update the details for this dependent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input defaultValue='John' disabled id='firstName' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input defaultValue='Doe' disabled id='lastName' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='dateOfBirth'>Date of Birth</Label>
                <Input
                  defaultValue='1990-01-01'
                  disabled
                  id='dateOfBirth'
                  type='date'
                />
              </div>
              <div className='space-y-2'>
                <Label>Relationship</Label>
                <Select defaultValue='child' disabled>
                  <SelectTrigger>
                    <SelectValue placeholder='Select relationship' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='spouse'>Spouse</SelectItem>
                    <SelectItem value='child'>Child</SelectItem>
                    <SelectItem value='parent'>Parent</SelectItem>
                    <SelectItem value='sibling'>Sibling</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  defaultValue='john@example.com'
                  disabled
                  id='email'
                  type='email'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone</Label>
                <Input defaultValue='555-1234' disabled id='phone' type='tel' />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Edit Dependent</Button>
          </CardFooter>
        </Card>
      </div>
      <div className='grid lg:grid-cols-1 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Health Provider Visits</CardTitle>
            <CardDescription>
              View and manage the dependent&apos;s health provider visits.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
