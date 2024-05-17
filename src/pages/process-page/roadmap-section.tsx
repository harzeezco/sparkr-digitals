import { cn } from '@/lib/cn';
import Image from 'next/image';

const Roadmap = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <div className='mx-auto max-w-[900px]'>
      {MISSIONS.map(({ desc, icon, title }, idx) => (
        <div className='grid grid-cols-[auto_1fr] gap-x-32 p-8'>
          <div className=''>
            <div className='relative h-[50px]'>
              <div
                className={cn(
                  'absolute bottom-full left-1/2 mx-auto h-16 w-[3px] -translate-x-1/2 bg-black/10',
                  idx === 0 ? 'hidden' : '',
                )}
              />
              <Image
                alt='icon'
                height={60}
                src={`/icons/${icon}`}
                width={45}
              />
            </div>
            <div
              className={cn(
                'mx-auto h-20 w-[3px] bg-black/10',
                idx === 6 ? 'hidden' : '',
              )}
            />
          </div>

          <div>
            <h2 className='mb-5 font-bricolage text-2xl font-semibold'>
              {title}
            </h2>

            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const MISSIONS = [
  {
    icon: 'user-flow.svg',
    title: 'Discovery & Research',
    desc: 'Before we dive into the design of your project, we take the time to understand your brand, your audience, and your goals. Through in-depth research and client consultations, we gain insights that form the foundation of our creative approach.',
  },
  {
    icon: 'messenger.svg',
    title: 'Ideation & Conceptualization',
    desc: 'This is where ideas take shape. Our team engages in brainstorming sessions, sketching, and prototyping to explore a range of concepts. We believe that the best solutions arise from a diverse pool of creative thinking.',
  },
  {
    icon: 'coding-flow.svg',
    title: 'Design & Development',
    desc: 'With a clear direction in mind, we embark on the design phase. Our designers and developers work in tandem to craft user-centric interfaces and seamless experiences. This is where concepts transform into tangible designs.',
  },
  {
    icon: 'community.svg',
    title: 'Collaboration & Client Feedback',
    desc: 'We value your input every step of the way. Regular check-ins and feedback loops ensure that your vision is at the forefront of our design process. Your insights help refine and perfect the final product.',
  },
  {
    icon: 'academic-flow.svg',
    title: 'Testing & Quality Assurance',
    desc: 'Before the big reveal, we subject our designs to rigorous testing. From functionality to responsiveness, we leave no stone unturned in ensuring a flawless user experience across all platforms.',
  },
  {
    icon: 'jet-flow.svg',
    title: 'Launch & Deployment',
    desc: "We ensure a seamless transition from development to deployment, setting the stage for success. With meticulous attention to testing, we guarantee a flawless launch, ready to captivate your audience from the moment it's unveiled.",
  },
  {
    icon: 'support.svg',
    title: 'Post-Launch Support & Optimization',
    desc: "Our commitment to your success doesn't end at launch. We provide ongoing support, monitor performance, and implement optimizations to ensure your digital presence continues to thrive.",
  },
];

export default Roadmap;
