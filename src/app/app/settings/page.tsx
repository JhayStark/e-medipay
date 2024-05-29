import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-1 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input defaultValue='John Doe' id='name' />
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    defaultValue='john@example.com'
                    id='email'
                    type='email'
                  />
                </div>
              </div>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='name'>Identification type</Label>
                  <Input defaultValue='Ghana Card' id='name' />
                </div>
                <div>
                  <Label htmlFor='email'>Identification Number</Label>
                  <Input
                    defaultValue='GHA-12343324-67'
                    id='email'
                    type='email'
                  />
                </div>
              </div>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='password'>Password</Label>
                  <Input id='password' type='password' />
                </div>
                <div>
                  <Label htmlFor='confirm-password'>Confirm Password</Label>
                  <Input id='confirm-password' type='password' />
                </div>
              </div>
              <div>
                <Label htmlFor='notification-settings'>
                  Notification Settings
                </Label>
                <div className='flex items-center gap-2'>
                  <Switch id='notification-settings' />
                  <span>Receive email notifications</span>
                </div>
              </div>
              {/* <div>
                <Label htmlFor='dark-mode'>Dark Mode</Label>
                <Select defaultValue='system' id='dark-mode'>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Theme' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='light'>Light</SelectItem>
                    <SelectItem value='dark'>Dark</SelectItem>
                    <SelectItem value='system'>System</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div>
                <Label htmlFor='payment-settings'>Payment Settings</Label>
                <div className='grid gap-4'>
                  <div className='flex items-center gap-2'>
                    <Switch id='payment-settings' />
                    <span>Enable automatic payments</span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='payment-method'>Payment Method</Label>
                      <Select defaultValue='credit-card'>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Select payment method' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='credit-card'>
                            Credit Card
                          </SelectItem>
                          <SelectItem value='bank-account'>
                            Bank Account
                          </SelectItem>
                          <SelectItem value='paypal'>PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor='payment-frequency'>
                        Payment Frequency
                      </Label>
                      <Select defaultValue='monthly'>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Select payment frequency' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='monthly'>Monthly</SelectItem>
                          <SelectItem value='quarterly'>Quarterly</SelectItem>
                          <SelectItem value='annually'>Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='ghost'>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
