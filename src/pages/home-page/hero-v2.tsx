import Button from '@/components/ui/button-v2';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

import { bricolage } from '../../../app/font';
import CaseStudy from './case-study-v2';

const services = [
  'Web Design',
  'UI/UX',
  'Web Dev',
  'App Dev',
  'Branding',
  'Social media',
  'SEO',
  'Motion Design',
  'Pitch Deck',
];

const HeroSection = () => {
  // useLenisScroll();
  const textOne =
    'Get in touch with Pixel Bloom  . Get in touch with Pixel Bloom  .';

  return (
    <section className='relative z-50 min-h-screen w-full pb-24 '>
      <div className='container pt-32'>
        <Button className='flex max-w-fit items-center justify-center gap-x-2 rounded-full px-3 py-2 ring-1 ring-gray-200'>
          <FaStar className='text-yellow-300' />
          <p className='text-sm font-bold text-black'>
            Award Winning Design Agency
          </p>
        </Button>
        <h1
          className={cn(
            'text-black text-4xl font-light md:text-5xl mt-2 lg:text-6xl font-bricolage',
            bricolage.className,
          )}
        >
          We craft innovative design solutions that scale brands
          globally
        </h1>
      </div>

      <div className='max-w-screen overflow-x-auto'>
        <ul className='my-6 flex items-center  gap-x-2 lg:container max-lg:ml-4 max-sm:justify-start'>
          {services.map((item) => (
            <li
              key={item}
              className='max-w-fit rounded-full px-5 py-2  font-medium text-black ring-1 ring-gray-200 max-lg:shrink-0  max-sm:px-3 max-sm:text-xs '
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='container flex items-center justify-start gap-x-4 max-[430px]:w-full max-[430px]:flex-col max-[430px]:gap-y-5'>
        <Button className='flex items-center justify-center gap-x-2 rounded-full bg-primary px-4 py-3 text-white max-[430px]:w-full'>
          <Image
            alt='icon'
            height={24}
            src='/icons/schedule.svg'
            width={24}
          />
          <p>Schedule a meet</p>
        </Button>
        <Button className='flex items-center justify-center gap-x-2 rounded-full bg-green-100 px-4 py-3 ring-1 ring-primary max-[430px]:w-full'>
          <Image
            alt='icon'
            height={24}
            src='/icons/discover.svg'
            width={24}
          />
          <p>Discover Services</p>
        </Button>
      </div>

      <div className='container relative mt-20'>
        <video
          autoPlay
          loop
          muted
          className='aspect-video rounded-3xl'
          src='/hero.mp4'
        >
          <track
            default
            kind='captions'
            label='English captions'
            src='/captions.vtt'
          />
        </video>

        <div className='max-sm:size-30 relative left-1/2   flex size-52   -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white'>
          <div className='absolute  left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary max-sm:size-20'>
            <Image
              alt='logo'
              height={24}
              src='/icons/logo.svg'
              width={24}
            />
          </div>

          <div className='absolute flex size-full items-center justify-center'>
            {textOne.split('').map((el, i) => (
              <p
                key={i}
                className='text-xs.    absolute font-bold uppercase text-black '
                style={{
                  transform: `rotate(${i * 5.5}deg) translateX(80px) rotateZ(${90}deg)`,

                  // Adds space between the characters
                }}
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        <div className='mx-auto max-w-[700px] text-center text-black max-xl:text-2xl max-sm:text-xl xl:text-3xl'>
          <div>
            <h1>At Sparkr Digitals,</h1>
            <p>
              We take the time to truly listen and understand your
              needs, ensuring crystal clear guidance and
              lightning-fast results.
            </p>
          </div>
          <div className='mb-5 mt-4 text-[#A3A3A3]'>
            <p>
              We consistently exceed expectations, delivering projects
              that look like they’re coming straight from Silicon
              Valley.
            </p>
          </div>
        </div>
        <Button className='mx-auto mt-10 max-w-fit rounded-full bg-green-100 px-5 py-3 text-center font-semibold text-primary ring-1 ring-primary max-lg:hidden'>
          <p>Our Industries</p>
        </Button>
        <CaseStudy />
      </div>
    </section>
  );
};

export default HeroSection;
