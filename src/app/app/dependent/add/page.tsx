import React from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <div className='flex flex-1 flex-col gap-4  md:gap-8 md:p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-lg md:text-xl'>Add New Dependent</h1>
        <Link className='text-blue-500 hover:underline' href='/app/dependent'>
          View Dependents
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Dependent Information</CardTitle>
          <CardDescription>
            Fill out the form below to add a new dependent to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First Name</Label>
              <Input id='firstName' placeholder='Enter first name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input id='lastName' placeholder='Enter last name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='dateOfBirth'>Date of Birth</Label>
              <Input id='dateOfBirth' type='date' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='relationship'>Relationship</Label>
              <Select>
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
              <Input id='email' placeholder='Enter email' type='email' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone</Label>
              <Input id='phone' placeholder='Enter phone number' type='tel' />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className='hover:bg-primary'>Add Dependent</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
