import AnimatedLink from '@/components/animated-text';
import Button from '@/components/ui/button-v2';

const CaseStudy = () => (
  <section>
    <div className='mx-auto grid max-w-[980px] grid-cols-5 items-end gap-x-4 max-lg:grid-cols-4  max-md:min-h-screen  max-md:grid-cols-1 md:hidden md:h-[70vh] '>
      <div className='flex h-full flex-col   gap-y-4'>
        <div className='relative flex h-[70%] flex-col items-start justify-center  rounded-3xl bg-[#6FF896] px-4 font-medium max-md:h-60 max-md:px-10'>
          <div className='box absolute -top-px h-10 w-1/2 rounded-bl-3xl bg-white max-md:left-1/2 max-md:-translate-x-1/2 max-md:rounded-br-3xl md:right-0 md:w-[90px]' />
          <h1 className='text-3xl font-semibold'>85%</h1>
          <p className='text-sm '>
            Our design solutions are crafted to cater to a diverse
            range of industries.
          </p>
        </div>
        <div className='bg300 box2 relative flex h-[90%] flex-col items-end rounded-3xl bg-cover bg-center bg-no-repeat text-white  max-md:h-[60vh] md:hidden   md:justify-between'>
          <div className='box6 absolute -top-px left-0 h-14 w-1/2 rounded-br-3xl bg-white md:hidden' />
          <p className='pr-4 pt-3 font-semibold max-md:pr-10 max-md:pt-5'>
            Finance
          </p>
          <p className='px-4 pb-4 text-end text-sm max-md:mr-5 max-md:mt-10 max-md:max-w-[256px]'>
            Building the future of finance with cutting-edge digital
            strategies.
          </p>
        </div>
        <div className='flex h-[30%] items-center justify-center rounded-3xl bg-[#666] p-4 text-center  text-white max-md:h-20'>
          <p>Integrating Advanced AI Capabilities into Businesses</p>
        </div>
      </div>
      <div className='bg100 box3 relative flex h-[72%] flex-col items-start justify-between rounded-3xl bg-no-repeat pb-4 pt-2  text-white max-lg:hidden'>
        <p className='pl-3 pt-2 font-semibold'>Manufacture</p>
        <p className='px-4 text-sm font-medium'>
          Enhancing user experiences with intuitive design for
          manufacturing tech.
        </p>
      </div>
      <div className='flex h-2/5 flex-col justify-between rounded-3xl bg-[#181818] px-3 pb-3 pt-5 max-md:mt-4 max-md:h-40 md:bg-[#00542D]'>
        <p className='text-center text-2xl text-white'>
          Industries We Serve
        </p>
        <Button className='rounded-full bg-[#dbdbdb4f] px-6 py-4 text-center text-white '>
          <AnimatedLink title='Get in touch' />
        </Button>
      </div>
      <div className=' bg200  relative h-[72%] rounded-3xl bg-cover bg-center bg-no-repeat text-end text-black max-md:hidden'>
        <p className='mt-5 pr-4 font-semibold'>Healthcare</p>
        <p className='mt-20 px-4 text-sm '>
          Empowering healthcare innovations through seamless digital
          interfaces.
        </p>
      </div>
      <div className='flex h-full  flex-col justify-center gap-y-4'>
        <div className='bg300 relative flex h-[90%] flex-col items-end justify-between rounded-3xl bg-cover bg-center bg-no-repeat  text-white max-md:mt-5 max-md:hidden'>
          <p className='pt-3 font-semibold md:pr-4 '>Finance</p>
          <p className='px-4 pb-4 text-end text-sm'>
            Building the future of finance with cutti ng-edge digital
            strategies.
          </p>
        </div>
        <div className='flex h-[31%] items-center justify-center  rounded-3xl bg-primary text-center max-md:mt-4 max-md:h-20 '>
          <p className='mx-auto  text-white  md:max-w-[135px]'>
            Designing the Future of Digital Experiences
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudy;
