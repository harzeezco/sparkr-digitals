import Button from '@/components/ui/button-v2';

const CaseStudy = () => (
  <section>
    <div className='container grid h-[50vh]  grid-cols-5 items-end justify-center ring-8'>
      <div className=''>
        <div className='bg-[#6FF896]'>
          <h1>85%</h1>
          <p>
            Our design solutions are crafted to cater to a diverse
            range of industries.
          </p>
        </div>
        <div />
      </div>
      <div className=' bg100 bg-cover bg-center bg-no-repeat'>
        <p>Manufacture</p>
        <p>
          Enhancing user experiences with intuitive design for
          manufacturing tech.
        </p>
      </div>
      <div className='bg-[#00542D]'>
        <p>Industries We Serve</p>
        <Button className='bg-[rgba(255, 255, 0.24)] rounded-full px-6 py-4 blur-3xl'>
          <p>Get in touch</p>
        </Button>
      </div>
      <div className=' bg200 bg-cover bg-center bg-no-repeat '>
        <p>Healthcare</p>
        <p>
          Empowering healthcare innovations through seamless digital
          interfaces.
        </p>
      </div>
      <div className=''>
        <div className='bg300 bg-cover bg-center bg-no-repeat'>
          <p>Finance</p>
          <p>
            Building the future of finance with cutting-edge digital
            strategies.
          </p>
        </div>
        <div className='bg-primary'>
          <p>Designing the Future of Digital Experiences</p>
        </div>
      </div>
    </div>
  </section>
  );

export default CaseStudy;
