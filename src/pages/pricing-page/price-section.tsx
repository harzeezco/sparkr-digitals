import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

import { bricolage } from '../../../app/font';

const PRICING = [
  {
    plan: 'Unlimited Requests',
    desc: "Add as many design requests as you'd like to your canvas.",
    amount: '2,999',
    category: 'Month',
    type: 'normal',
    features: [
      'Up to 10 design tasks per month',
      '2 rounds of revisions per task',
      'Dedicated account manager',
      'Average 48 hour delivery',
      'Email support',
      'Stock image library access',
      'Monthly design tips newsletter',
      'Quarterly strategy consultation',
    ],
  },
  {
    plan: 'Advance',
    desc: 'Designed for businesses with regular design needs and complexity.',
    amount: '4,999',
    category: 'Month',
    type: 'popular',
    features: [
      'Up to 10 design tasks per month',
      '3 rounds of revisions per task',
      'Dedicated account manager',
      'Average 48 hour delivery',
      'Email support',
      'Premium font and graphics library',
      'Monthly analytics report',
      'Bi-monthly strategy consultation',
      'Quarterly strategy consultation',
    ],
  },
  {
    plan: 'Unlimited Requests',
    desc: "Add as many design requests as you'd like to your canvas.",
    amount: '2,999',
    category: 'Month',
    type: 'normal',
    features: [
      'Unlimited design tasks per month',
      'Unlimited rounds of revisions per task',
      'Average 24 hour delivery',
      'Dedicated account manager & team',
      'Weekly progress updates',
      'Weekly strategy meetings',
      'Email, phone & video call support',
      'Premium font and graphics',
      'Monthly A/B testing',
      'Quarterly comprehensive design audit',
    ],
  },
];

const PriceSection = () => (
  <section className='container relative z-50 flex flex-col items-center'>
    <h1
      className={cn(
        'mb-5 text-4xl max-w-3xl font-light md:text-4xl lg:text-6xl',
        bricolage.className,
      )}
    >
      Membership levels
    </h1>

    <p className='text-center'>Choose a plan that’s right for you.</p>

    <div className='relative z-[99] mx-auto mt-16 flex shrink grid-cols-1 flex-wrap place-items-center justify-center gap-7 lg:grid lg:grid-cols-3'>
      {PRICING.map(
        ({ amount, category, desc, features, plan, type }) => (
          <div
            key={amount}
            className='relative rounded-[12px] border border-solid border-[#292929] bg-white p-6 transition-all duration-300'
          >
            {type === 'popular' && (
              <span className='absolute right-0 top-0 rounded-bl-[12px] rounded-tr-[12px] bg-green-600 p-1 px-3 text-sm uppercase text-white'>
                Most Popular
              </span>
            )}

            <div className='pt-5'>
              <p className='text-lg font-semibold text-green-600 lg:text-xl'>
                {plan}
              </p>
              <span>{desc}</span>

              <p
                className={cn(
                  'mt-5 text-2xl font-bold text-center text-green-600 lg:text-4xl mb-5',
                  bricolage.className,
                )}
              >
                ${amount}
                <span className='text-sm font-normal'>
                  /{category}
                </span>
              </p>

              <Button
                className='w-full bg-primary py-3 transition-all hover:bg-green-600 active:bg-green-600'
                type='button'
              >
                <AnimatedLink
                  className='font-bricolage text-xl font-light'
                  title='Get Started'
                />
              </Button>

              <p className='mt-3 text-center'>
                Pause and cancel anytime.
              </p>

              <div className='mb-4 mt-8 space-y-2 border-t border-solid py-4 text-start'>
                <p className='text-lg font-semibold text-green-600/80'>
                  What’s included:
                </p>

                <ul className='list-disc px-6'>
                  {features.map((feature) => (
                    <li className=''>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  </section>
);

export default PriceSection;
