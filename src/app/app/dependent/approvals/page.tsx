import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from '@/components/ui/card';

const Page = () => {
  return (
    <div>
      <h1 className='font-semibold text-lg md:text-2xl mb-3'>
        Pending Approvals
      </h1>
      <div className='grid lg:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Kweku Ansah</CardTitle>
            <CardDescription>Routine check-up</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-2'>
              <div className='flex items-center justify-between'>
                <span>Provider:</span>
                <span>37 Military Hospital</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Visit Date:</span>
                <span>2023-04-15</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Amount:</span>
                <span>$500</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Reason:</span>
                <span>Pain in my abdomen</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className='flex items-center gap-2'>
              <Button size='sm' variant='outline'>
                Approve
              </Button>
              <Button className='text-red-500' size='sm' variant='outline'>
                Reject
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Ansah</CardTitle>
            <CardDescription>Refill of pressure medication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-2'>
              <div className='flex items-center justify-between'>
                <span>Provider:</span>
                <span>Ernest Chemist</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Visit Date:</span>
                <span>2023-03-01</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Amount:</span>
                <span>$500</span>
              </div>
              <div className='flex items-center justify-between'>
                <span>Reason:</span>
                <span>Run out of pressure medication.</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className='flex items-center gap-2'>
              <Button size='sm' variant='outline'>
                Approve
              </Button>
              <Button className='text-red-500' size='sm' variant='outline'>
                Reject
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
