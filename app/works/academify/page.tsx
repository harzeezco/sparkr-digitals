import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../font';

const firstImgGroup = [
  {
    src: 'acade-student1.webp',
    alt: 'Academify student',
  },
  {
    src: 'acade-mobile.webp',
    alt: 'mobile mockup',
  },
  {
    src: 'acade-dashboard2.webp',
    alt: 'dashboard',
  },
  {
    src: 'acade-student2.webp',
    alt: 'Academify student',
  },
];

const Page = () => (
  <main className='container mt-36 lg:px-6'>
    <h1
      className={cn(
        'text-4xl font-light md:text-5xl lg:text-6xl',
        bricolage.className,
      )}
    >
      Access a <span className='text-primary'>Smart</span> and{' '}
      <span className='text-primary'>Engaging</span> Learning
      Management System <br /> through Academify
    </h1>

    <div className='my-10 flex justify-between gap-y-7 max-sm:flex-col sm:items-center'>
      <div>
        <div>
          <span className='opacity-70'>Client</span>
          <p className='mt-1'>Academify</p>
        </div>

        <div className='mt-3'>
          <span className='opacity-70'>Year</span>
          <p className='mt-1'>2023</p>
        </div>
      </div>

      <div>
        <span className='opacity-70'>Service</span>

        <div className='mt-1 space-y-1'>
          <p>Branding</p>
          <p>UX/UI</p>
          <p>2D</p>
        </div>
      </div>

      <div>
        <span className='opacity-70'>
          Academify&apos;s Learning Revolution
        </span>
        <p className='mt-1 max-w-[500px]'>
          At Academify, change was their compass. They aimed to make
          education inclusive, accessible, and flexible for everyone.
          With modern solutions, They broke barriers and welcomed more
          learners without costly upgrades.
        </p>
      </div>
    </div>

    <Image
      alt='dashboard'
      className=''
      height={500}
      src='/images/acade-dashboard.webp'
      width={1200}
    />

    <div className='mt-14'>
      <span className='opacity-70'>
        Transforming Education with LMS
      </span>
      <p className='mt-1 max-w-[700px]'>
        Once confined by physical classrooms, Academify&apos;s journey
        took a digital turn, opening doors to learners worldwide. With
        the shift to remote learning, limitations vanished, and
        opportunities multiplied. No longer constrained by building
        structures, Academify embraced a global classroom model,
        welcoming learners from all corners of the globe. In this new
        era, education knows no bounds, and Academify leads the
        charge, shaping a future where every learner has a place to
        thrive.
      </p>

      <div className='mt-10 grid grid-cols-2'>
        {firstImgGroup.map(({ alt, src }) => (
          <Image
            key={src}
            alt={alt}
            className='w-full'
            height={450}
            src={`/images/${src}`}
            width={450}
          />
        ))}
      </div>
    </div>

    <div className='mt-10'>
      <span className='opacity-70'>Branding</span>
      <p className='mt-1 max-w-[700px]'>
        At Academify, they are rewriting the rules of education. They
        saw the limitations of traditional learning and knew there had
        to be a better way. So, they built a platform that&apos;s
        accessible, flexible, and inclusive. From classrooms to global
        connections, They&apos;re opening doors for learners
        everywhere.
      </p>

      <div className='mt-10'>
        <Image
          alt='academify product'
          height={400}
          src='/images/acade-brand3.webp'
          width={1200}
        />

        <div className='mt-5 grid grid-cols-2 gap-5'>
          <Image
            alt='academify product'
            className='w-full'
            height={400}
            src='/images/acade-brand1.webp'
            width={400}
          />
          <Image
            alt='academify product'
            className='w-full'
            height={400}
            src='/images/acade-brand2.webp'
            width={400}
          />
        </div>
      </div>
    </div>

    <div className='mt-10'>
      <span className='opacity-70'>Design Solutions</span>
      <p className='mb-10 mt-1 max-w-[700px]'>
        At Academify, they believe in design that speaks volumes
        without saying a word. Their goal is to create an experience
        that&apos;s as intuitive as it is inspiring. From clean
        interfaces to effortless navigation, our design solution puts
        learning front and center.
      </p>

      <Image
        alt='academify product'
        height={400}
        src='/images/acade-web.webp'
        width={1200}
      />
    </div>

    <div className='my-10'>
      <p className='mb-10 max-w-[700px]'>
        At Academify&apos;s homepage dashboard, exploration meets
        efficiency as you seamlessly navigate through courses,
        lessons, and assessments with just a click. Stay updated with
        class announcements and deadlines using our integrated
        calendar. Academify Simplify your learning experience
      </p>

      <Image
        alt='academify product'
        height={400}
        src='/images/acade-dashboard3.webp'
        width={1200}
      />
    </div>

    <div className='my-10'>
      <p className='mb-10 max-w-[700px]'>
        The course dashboard provide all enrolled courses neatly
        organized for easy access. Users can track course progress
        effortlessly with visual indicators, ensuring they stay on top
        of their studies.
      </p>

      <Image
        alt='academify product'
        height={400}
        src='/images/acade-mockup2.webp'
        width={1200}
      />
    </div>

    <div>
      <span className='opacity-70'>Dark and Light Mode</span>
      <p className='mb-10 mt-1 max-w-[700px]'>
        With this innovative design, users can seamlessly switch
        between Light and Dark mode, ensuring their learning
        experience is always comfortable and customizable.
      </p>

      <div>
        <Image
          alt='academify product'
          height={400}
          src='/images/acade-mode1.webp'
          width={1200}
        />
        <Image
          alt='academify product'
          height={400}
          src='/images/acade-mode2.webp'
          width={1200}
        />
        <Image
          alt='academify product'
          height={400}
          src='/images/acade-mode3.webp'
          width={1200}
        />
        <Image
          alt='academify product'
          height={400}
          src='/images/acade-mode4.webp'
          width={1200}
        />
      </div>
    </div>
  </main>
);

export default Page;
