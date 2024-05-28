'use client';

import React from 'react';
import { Form } from '@/components/ui/form';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputFormField } from '@/components/formFields';
import { Button } from '@/components/ui/button';

const Page = () => {
  const form = useForm();
  return (
    <div>
      <div className='space-y-1 border-b-2 border-black pb-1'>
        <h2 className='font-bold text-lg md:text-2xl'>
          Request to become a healthcare provider
        </h2>
        <p className='md:text-base text-sm font-light'>
          Thank you for your interest in joining the eMedipay network.
        </p>
        <p className='md:text-base text-sm'>
          Please take a moment to read the directions below to ensure your
          request is processed correctly.
        </p>
      </div>
      <div className='md:text-sm font-light space-y-4 text-xs pt-6'>
        <p>
          Please answer all questions to the best of your ability. Incomplete or
          invalid answers may lead to an incorrect determination of our ability
          to contract with you. Our Provider Contracting team reviews requests
          on an ongoing basis and will be in touch as soon as possible if there
          is an opportunity to partner.
        </p>
        <p>
          If you have questions on joining our network, please call our provider
          services department at 024-1234567-855.
        </p>
        <p>*All fields are required unless otherwise specified</p>
      </div>
      <Form {...form}>
        <form action='' className='py-10 space-y-5'>
          <InputFormField
            name='representativeName'
            label='Enter your name:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Enter your phone number:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Enter your email:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Enter your role in the institution:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Name of the healthcare provider:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Healthcare providers contact number:'
            form={form}
          />
          <InputFormField
            name='representativeName'
            label='Healthcare providers email:'
            form={form}
          />

          <Button className='hover:bg-primary'>Submit Request</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;

// license details
