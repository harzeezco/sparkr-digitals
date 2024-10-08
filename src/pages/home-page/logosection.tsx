import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const LogoSection = () => (
  <section className=' bg-[#F5F5F5]  py-20'>
    <div className='  container'>
      <Button className='mb-4 flex items-center justify-center rounded-full bg-white text-black shadow-xl ring-1 ring-gray-200 md:ml-[2vw]'>
        <Image
          alt='icon'
          className='shrink-0'
          height={24}
          src='/icons/starIcon.svg'
          width={24}
        />
        <AnimatedLink title='Benefits of choosing us' />
      </Button>
      <h1 className='mb-12 font-bricolage text-4xl  font-light text-black max-md:max-w-[500px] md:ml-[2vw]   md:text-5xl lg:max-w-[650px] lg:text-6xl'>
        We’ve had the Pleasure to Work with👇🏼
      </h1>
      <div className=' mx-auto grid items-center justify-center gap-x-5 gap-y-4 opacity-50 max-sm:grid-cols-3 sm:grid-cols-5 '>
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/leafe.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/yaroo.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/renty.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/penta.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/vision.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/craft.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/proline.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/recharge.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/greenish.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/nutxer.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/redact.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/planted.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/hues.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/docker.svg'
          width={130}
        />
        <Image
          alt='icon'
          className='self-center justify-self-center'
          height={28}
          loading='lazy'
          src='/icons/workspc.svg'
          width={130}
        />
      </div>
    </div>
  </section>
);

export default LogoSection;
