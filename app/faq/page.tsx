import AnimatedLink from '@/components/animated-text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import type { Metadata } from 'next';

import { bricolage } from '../font';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - FAQ',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const FAQPage = () => (
  <main>
    <section className='mt-32'>
      <div className='container flex flex-col items-center justify-center'>
        <h1
          className={cn(
            'text-center mb-5 text-4xl mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
            bricolage.className,
          )}
        >
          Get to know us
        </h1>

        <p className='mx-auto mb-7 max-w-2xl text-center text-lg lg:text-xl'>
          From our pricing to our people to our process, you ask, we
          answer.If you can’t find your question, feel free to reach
          out, we got your back.
        </p>

        <Button variant='default'>
          <AnimatedLink
            className='h-11 w-72 items-center justify-center rounded-[8px] bg-primary font-medium text-white transition-all hover:bg-green-600 active:bg-green-600'
            title='Drop us an email'
            type='button'
          />
        </Button>
      </div>

      <div className='mx-auto mt-24 max-w-2xl'>
        <Accordion
          collapsible
          className='grid w-full grid-cols-1 gap-x-10 gap-y-6'
          type='multiple'
        >
          {QUESTIONS.map(({ desc, title }, idx) => (
            <div key={title}>
              <AccordionItem
                className='rounded-[22px] border border-solid px-4 transition-all duration-300'
                value={`item-${idx}`}
              >
                <AccordionTrigger className='text-xl font-medium'>
                  {title}
                </AccordionTrigger>
                <AccordionContent>{desc}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  </main>
);

const QUESTIONS = [
  {
    title: 'What services does Sparkr Studio offer?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'How does Sparkr Studio approach user-centered design?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title:
      'What sets Sparkr Studio apart from other creative agencies?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title:
      'Can Sparkr Studio assist in rebranding an existing business?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'How does Sparkr Studio ensure accessibility in design?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
];

export default FAQPage;
