import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/cn';

import { bricolage } from '../../../app/font';

const FAQ = () => (
  <main>
    <section className='mt-32'>
      <div className='container flex flex-col items-center justify-center'>
        <h1
          className={cn(
            'text-center mb-5 text-4xl mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
            bricolage.className,
          )}
        >
          You might have a question
        </h1>

        <p className='mx-auto mb-7 max-w-2xl text-center text-lg lg:text-xl'>
          From our pricing to our people to our process, you ask, we
          answer. If you can’t find your question, feel free to reach
          out, we got your back.
        </p>
      </div>

      <div className='mx-auto mt-10 max-w-2xl'>
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

export default FAQ;
