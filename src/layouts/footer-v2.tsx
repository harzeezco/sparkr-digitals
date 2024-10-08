import AnimatedLink from '@/components/animated-text';
import Button from '@/components/ui/button-v2';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => (
  <section className='border-none bg-white pt-20 outline-none  '>
    <div className='container mb-20 h-px rounded-full bg-[#a3a3a32d]' />
    <section className='container'>
      <Button className='mb-4 flex max-w-fit   shrink-0 cursor-pointer items-center justify-center gap-x-4 rounded-full p-[6px] pr-4 text-black  ring-2 ring-gray-200 '>
        <div className='flex size-9  shrink-0 items-center justify-center overflow-hidden rounded-full   ring-2 ring-gray-200'>
          <video autoPlay loop src='gesture.mp4'>
            <track
              default
              kind='captions'
              label='English captions'
              src='captions.vtt'
            />
          </video>
        </div>
        <AnimatedLink title='Talk to us' />
      </Button>
      <div className='flex items-end  justify-between max-sm:hidden'>
        <h1 className=' font-bricolage text-4xl   font-light text-black max-md:max-w-[500px]    md:text-5xl lg:max-w-[600px] lg:text-6xl'>
          Contact Us to Start Your{' '}
          <span className='text-[#A3A3A3]'>Transformation</span>
        </h1>
        <Button className='flex max-w-fit shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 py-3 text-white'>
          <Image
            alt='icon'
            height={24}
            src='/icons/schedule.svg'
            width={24}
          />
          <AnimatedLink title='Book a Consultation' />
        </Button>
      </div>
      <div className=' my-20 flex  items-start justify-between gap-5 max-sm:flex-col'>
        <div>
          <h1 className=' max-w-[300px] pb-10 font-bricolage text-3xl   font-medium text-black md:text-3xl    lg:max-w-[350px]  lg:text-4xl'>
            Have{' '}
            <span className=' mx-1 inline-block size-10 overflow-hidden rounded-full align-middle '>
              {' '}
              <video autoPlay loop src='gesture.mp4'>
                <track
                  default
                  kind='captions'
                  label='English captions'
                  src='captions.vtt'
                />
              </video>
            </span>{' '}
            great idea? Tell us about it.
          </h1>
          <div className='max-sm:hidden'>
            <p className=' mb-2 mt-10 text-xl text-[#A3A3A3]'>
              Clients trust us
            </p>
            <Image
              alt='ratings'
              height={34}
              src='/icons/ratings.png'
              width={124}
            />

            <p className='my-3 pt-10 text-xl text-[#A3A3A3]'>
              Follow us:
            </p>
            <div className='flex  items-center justify-start gap-x-2'>
              <div className='flex size-10 cursor-pointer items-center justify-center rounded-full p-2 ring-1 ring-gray-200 hover:rounded-xl'>
                <Image
                  alt='icon'
                  height={20}
                  src='/icons/facebook.svg'
                  width={20}
                />
              </div>
              <div className='flex size-10 cursor-pointer items-center justify-center rounded-full p-2 ring-1 ring-gray-200 hover:rounded-xl '>
                <Image
                  alt='icon'
                  height={20}
                  src='/icons/linkedin.svg'
                  width={20}
                />
              </div>
              <div className='flex size-10 cursor-pointer items-center justify-center rounded-full p-2 ring-1 ring-gray-200 hover:rounded-xl'>
                <Image
                  alt='icon'
                  height={20}
                  src='/icons/twitter.svg'
                  width={20}
                />
              </div>
              <div className='flex size-10 cursor-pointer items-center justify-center rounded-full p-2 ring-1 ring-gray-200 hover:rounded-xl'>
                <Image
                  alt='icon'
                  height={20}
                  src='/icons/instagram.svg'
                  width={20}
                />
              </div>
            </div>
            <p className=' my-3 text-xl text-[#A3A3A3]'>
              {' '}
              Contact us:
            </p>
            <p className='text-xs text-primary underline underline-offset-2 transition-all duration-500 hover:scale-105'>
              <a href='/'>hello@sparkrdigitals.com</a>
            </p>
            <p className=' my-3 text-xl text-[#A3A3A3]'>
              United Kingdom
            </p>
            <div className='text-sm text-[#A3A3A3]'>
              <p> 81 Rivington Street London EC2A 3AY</p>
              <p>hello@andagain.uk</p>
              <p>0207 088 8379</p>
            </div>
            <p className=' my-3 text-xl text-[#A3A3A3]'>Nigeria</p>
            <div className='text-sm text-[#A3A3A3]'>
              <p> 81 Rivington Street London EC2A 3AY</p>
              <p>hello@andagain.uk</p>
              <p>0207 088 8379</p>
            </div>
          </div>
        </div>
        <FormSection />
      </div>
    </section>
    <section className='bg-[#181818] py-10  '>
      <div className='container'>
        <div className='grid grid-cols-2 items-center justify-between max-md:grid-cols-1 '>
          <div className='flex flex-col items-start justify-center'>
            <Image
              alt='logo'
              className='mb-2'
              height={34}
              src='/icons/footerlogo.png'
              width={84}
            />
            <p className='max-w-[600px] text-[#A3A3A3]'>
              Sparkr Digitals is your go-to design agency, offering
              innovative solutions tailored to your brand’s needs.
              Elevate your presence with our creative expertise and
              strategic design.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-end gap-2 max-md:mt-5 max-md:justify-start'>
            <Button className='flex items-center justify-center gap-x-2 rounded-full px-4 py-2 text-white ring-1 ring-[#A3A3A3]'>
              <FaTwitter />
              <p>Twitter</p>
            </Button>
            <Button className='flex items-center justify-center gap-x-2 rounded-full px-4 py-2 text-white ring-1 ring-[#A3A3A3] '>
              <FaInstagram />
              <p>Instagram</p>
            </Button>
            <Button className='flex items-center justify-center gap-x-2 rounded-full px-4 py-2 text-white ring-1 ring-[#A3A3A3] '>
              <FaLinkedin />
              <p>LinkedIn</p>
            </Button>
          </div>
        </div>
        <div className='mt-10 grid grid-cols-2  items-center justify-between rounded-3xl bg-[#282829] px-10 py-20 max-md:grid-cols-1 max-[430px]:px-6'>
          <div>
            <h1 className='text-white'>
              Subscribe to our newsletter for updates:
            </h1>
            <p className='text-[#A3A3A3]'>
              Stay ahead with the latest design trends and insights
              from Sparkr Digitals.
            </p>
          </div>
          <form className='flex items-center justify-between justify-self-end rounded-full bg-[#181818] p-[5px] ring-1  ring-[#A3A3A3] max-md:mt-5 max-md:w-full max-md:justify-self-start'>
            <input
              className='rounded-l-full border-none bg-[#181818] px-4 py-3 text-[#535353] outline-none placeholder:text-sm max-md:w-[70%]'
              placeholder='Email address'
            />
            <button
              className='rounded-full bg-[#282829] px-5    py-3  text-white'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className='mt-10 grid grid-cols-2 items-center justify-between text-[#A3A3A3] max-[450px]:grid-cols-1'>
          <p className='text-sm '>
            Copyright © {new Date().getFullYear()} Sparkr Studio
          </p>
          <p className='justify-self-end text-sm max-[450px]:mt-2 max-[450px]:justify-self-start'>
            Privacy Policy • Terms and condition
          </p>
        </div>
      </div>
    </section>
  </section>
);

export default Footer;

function FormSection() {
  const buttons = [
    'web development',
    'App from scratch',
    'UI/UX Design',
    'Branding',
    'Site from Scratch',
    'App Development',
    'Maintenace',
  ];
  const amount = [
    '≤$5k',
    '$10k-$20k',
    'UI/UX Design',
    '$30k-$40k',
    '$50k-$60k',
    '≥$100k',
  ];

  return (
    <div className='max-w-[600px] '>
      <div className='grid grid-cols-2 items-center justify-center gap-10 text-black placeholder:text-xs max-sm:grid-cols-1'>
        <form>
          <p className='text-sm font-semibold'>Name & Company</p>
          <input
            className='w-full border-b-DEFAULT bg-transparent pb-2 pt-3 outline-none placeholder:text-sm'
            placeholder='john from apple'
            type='text'
          />
        </form>
        <form className='sm:hidden'>
          <p className='text-sm font-semibold'>Name </p>
          <input
            className='w-full border-b-DEFAULT bg-transparent pb-2 pt-3 outline-none placeholder:text-sm'
            placeholder='John'
            type='text'
          />
        </form>
        <form className='sm:hidden'>
          <p className='text-sm font-semibold'>Company</p>
          <input
            className='w-full border-b-DEFAULT bg-transparent pb-2 pt-3 outline-none placeholder:text-sm'
            placeholder='Microsoft'
            type='text'
          />
        </form>
        <form>
          <p className='text-sm font-semibold'>Your Email</p>
          <input
            className='w-full border-b-DEFAULT bg-transparent pb-2 pt-3 outline-none placeholder:text-sm'
            placeholder='john@apple.com'
            type='email'
          />
        </form>
      </div>

      <div className='mt-10  text-sm font-medium text-black'>
        <p className=' mb-3 font-semibold'>
          I&apos;m interested in...
        </p>
        <ul className='flex flex-wrap items-center justify-start gap-4'>
          {buttons.map((btn) => (
            <li
              key={btn}
              className='rounded-full px-8 py-5 text-sm ring-1 ring-gray-200 '
            >
              <AnimatedLink title={btn} />
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-10  text-sm font-medium text-black'>
        <p className=' mb-3 font-semibold'>Project budget (USD)</p>
        <ul className='flex flex-wrap items-center justify-start gap-4'>
          {amount.map((price, index) => (
            <li
              key={index}
              className='rounded-full px-8 py-5 text-sm ring-1 ring-gray-200 '
            >
              <AnimatedLink title={price} />
            </li>
          ))}
        </ul>

        <form className='mt-10'>
          <p className='text-sm font-semibold'>
            Tell us more about your project
          </p>
          <input
            className='w-full border-b-DEFAULT bg-transparent pb-2 pt-3 outline-none placeholder:text-sm'
            placeholder='Something about your great idea'
            type='email'
          />
        </form>
        <Button className='mt-10 cursor-pointer rounded-full bg-primary px-6 py-4 text-white max-sm:text-center sm:mt-4 sm:max-w-fit'>
          <AnimatedLink title='Submit your request' />
        </Button>

        <p className=' my-3 text-center text-xl text-[#A3A3A3] sm:hidden'>
          {' '}
          Get in touch
        </p>
        <p className='text-center text-xs text-primary underline underline-offset-2 transition-all duration-500 hover:scale-105 sm:hidden'>
          <a href='/'>hello@sparkrdigitals.com</a>
        </p>
      </div>
    </div>
  );
}
