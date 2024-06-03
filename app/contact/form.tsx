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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
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
      .min(3, {
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
    work: z.string().optional(),
    workType: z.enum([
      'UX/UI design',
      'Web Development',
      'Branding',
      'Motion Design',
      '3D graphics',
      'Site from scratch',
      'App from scratch',
      'Maintenance',
      'Other',
    ]),
  })
  .refine(
    (data) => {
      if (data.workType && data.work) {
        return data.workType === data.work.toLowerCase();
      }

      return true;
    },
    {
      message: 'Please, select an option',
      path: ['workType'],
    },
  );

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: '',
      name: '',
      message: '',
      workType: undefined,
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
        className='mx-auto mt-20 max-w-4xl space-y-5'
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
          name='workType'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormLabel className='font-semibold text-green-600'>
                I&apos;m interested in...
              </FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='h-12 rounded-2xl !border-[1.5px]'>
                    <div className='flex items-center gap-2'>
                      {/* <MdTopic size={24} /> */}
                      <SelectValue
                        className='self-start !font-medium !text-neutral-200'
                        placeholder='Please choose an option...'
                      />
                    </div>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='relative z-[9999] rounded-2xl border-solid !border-primary !bg-green-600 text-neutral-200'>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='UX/UI design'
                  >
                    UX/UI design
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='Web Development'
                  >
                    Web Development
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='Branding'
                  >
                    Branding
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='Motion Design'
                  >
                    Motion Design
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='3D graphics'
                  >
                    3D graphics
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='Site from scratch'
                  >
                    Site from scratch
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='App from scratch'
                  >
                    App from scratch
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='Maintenance'
                  >
                    Maintenance
                  </SelectItem>
                  <SelectItem
                    className='cursor-pointer !rounded-[10px] !transition-all'
                    value='other'
                  >
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

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
              title='Send Message'
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
