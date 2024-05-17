'use client';

import AnimatedLink from '@/components/animated-text';
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
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  user_email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Please Enter a valid email address',
    })
    .min(5),
  name: z
    .string()
    .regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    })
    .min(4, {
      message: 'Your full name must be at least 4 characters.',
    })
    .max(20, {
      message:
        'Your full name must not be longer than 20 characters.',
    }),
  message: z
    .string()
    .min(10, {
      message: 'message must be at least 10 characters.',
    })
    .max(360, {
      message: 'Bio must not be longer than 360 characters.',
    }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: '',
      name: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className='mx-auto mt-24 max-w-4xl space-y-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-green-600'>
                  Full Name:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='John Doe'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='user_email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-green-600'>
                  Email:
                </FormLabel>
                <FormControl>
                  <Input placeholder='johndoe@pro.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormLabel className='font-semibold text-green-600'>
                Your Message:
              </FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  placeholder='We would love to know the scope, timeline and budget'
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='mt-7'>
          <Button
            className='w-full bg-primary px-24 py-4 transition-all hover:bg-green-600 active:bg-green-600'
            type='submit'
          >
            <AnimatedLink
              className='font-bricolage text-xl font-light'
              title="Send Message  (I won't keep you waiting)"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
