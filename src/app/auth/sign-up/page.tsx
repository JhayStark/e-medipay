'use client';

import React from 'react';
import Link from 'next/link';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be above 8 characters' }),
});

const Page = () => {
  const form = useForm({ resolver: zodResolver(formSchema) });

  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h3 className='text-4xl mb-2 tracking-wide text-[#141414]'>
        Create an account
      </h3>
      <span className='text-[#141414]'>
        Already have an account ?{' '}
        <Link
          href='/auth'
          className='text-primary underline underline-offset-2'
        >
          Log in
        </Link>
      </span>
      <div className='mb-7 mt-2'>
        <Form {...form}>
          <form
            action=''
            className='space-y-5'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='bg-primary hover:bg-primary w-full'>
              Login
            </Button>
          </form>
        </Form>
      </div>
      <p className='text-[#141414]'>
        By creating an account, you agree to eMedipay.com’s website
      </p>
      <p>
        <span className='text-primary underline underline-offset-2'>
          Terms of Service
        </span>{' '}
        and{' '}
        <span className='text-primary underline underline-offset-2'>
          Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default Page;
