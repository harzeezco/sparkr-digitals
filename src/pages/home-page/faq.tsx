import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const Faq = () => (
  <section className='container mt-24'>
    <button
      className='flex w-20 items-center justify-center gap-1 rounded-[100px] border border-[#e0e0e0] py-2'
      type='button'
    >
      <Image alt='faq' height={25} src='/icons/star.svg' width={25} />

      <span className='font-medium capitalize text-[#181818]'>
        faq
      </span>
    </button>

    <div className='mb-10 flex justify-between max-sm:flex-col sm:items-center'>
      <h1
        className={cn(
          'text-black text-4xl max-w-lg font-light md:text-5xl mt-2 lg:text-6xl font-bricolage',
          bricolage.className,
        )}
      >
        Frequently Asked <span className='opacity-50'>Questions</span>
      </h1>

      <div>
        <p className='mb-5'>Still have a questions in mind?</p>

        <Button className='flex items-center justify-center gap-x-2 rounded-full bg-primary px-4 py-[10px] text-white'>
          <Image
            alt='contact'
            height={20}
            src='/icons/bag.svg'
            width={20}
          />
          <span>Contact Us</span>
        </Button>
      </div>
    </div>

    <Accordion type='single'>
      <div className='space-y-5 max-sm:space-y-3'>
        <div className='flex items-start gap-10 max-sm:flex-col'>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-1'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                What makes Sparkr Digitals different from other design
                agencies?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-2'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                How do you ensure the design solutions are tailored to
                our brand&apos;s needs?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className='flex items-start gap-10 max-sm:flex-col'>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-3'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                What is the process and timeline for a typical design
                project?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-4'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                Do you offer revisions if we are not satisfied with
                the initial designs?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
        </div>

        <div className='flex items-start gap-10 max-sm:flex-col'>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-5'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                Can you work within our budget constraints?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='flex-1 rounded-[24px] border border-solid border-[#DCDCDC]'
            value='item-6'
          >
            <AccordionTrigger>
              <span className='max-w-md text-left'>
                What kind of support do you provide after the project
                is completed?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              We offer models for image recognition, natural language
              processing, predictive analytics, and custom AI
              solutions based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
    </Accordion>
  </section>
);

export default Faq;
