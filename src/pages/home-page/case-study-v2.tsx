import Button from '@/components/ui/button-v2';

const CaseStudy = () => (
  <section>
    <div className='container grid h-[60vh]  grid-cols-5 items-end  ring-8'>
      <div className='h-full'>
        <div className='h-[70%] bg-[#6FF896] px-6'>
          <h1>85%</h1>
          <p>
            Our design solutions are crafted to cater to a diverse
            range of industries.
          </p>
        </div>
        <div className='flex h-[30%] items-center justify-center bg-[#666] p-2 text-center'>
          <p>Integrating Advanced AI Capabilities into Businesses</p>
        </div>
      </div>
      <div className=' bg100 h-[70%]  bg-no-repeat'>
        <p>Manufacture</p>
        <p>
          Enhancing user experiences with intuitive design for
          manufacturing tech.
        </p>
      </div>
      <div className='h-[50%] bg-[#00542D]'>
        <p>Industries We Serve</p>
        <Button className='bg-[rgba(255, 255, 0.24)] rounded-full px-6 py-4 blur-3xl'>
          <p>Get in touch</p>
        </Button>
      </div>
      <div className=' bg200 h-[70%] bg-cover bg-center bg-no-repeat'>
        <p>Healthcare</p>
        <p>
          Empowering healthcare innovations through seamless digital
          interfaces.
        </p>
      </div>
      <div className='h-full'>
        <div className='bg300 h-[70%] bg-cover bg-center bg-no-repeat'>
          <p>Finance</p>
          <p>
            Building the future of finance with cutting-edge digital
            strategies.
          </p>
        </div>
        <div className='h-[30%] bg-primary'>
          <p>Designing the Future of Digital Experiences</p>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudy;
