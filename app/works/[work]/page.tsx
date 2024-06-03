import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../font';

const WORKS = [
  {
    title: 'Transforming Healthcare Data Management with Zatum',
    client: 'HealthInsight Solutions',
    year: '2024',
    service: 'Web Development',
    productLink: 'zatum',
    productLinkHref: '/',
    descHeader: "Zatum's Health Breakthrough",
    desc: 'Sparkr created Zatum to simplify healthcare data, making it easy, insightful, and accessible for everyone. With its user-friendly solutions, Zatum breaks down barriers, empowering healthcare professionals to effortlessly harness the power of data.',
    imgSrc: 'zatum-mock.webp',
    firstContentHeader: 'Product Background',
    firstContentDesc:
      'In a busy city, Dr. Emily Hayes cared and deeply passionate about improving healthcare, She’s a tireless epidemiologist that faced a daunting challenge with mountains of patient data . Yearning for a breakthrough she teamed up with like-minded individuals. They reached out to Sparkr, a digital agency known for their innovative solutions. Sparkr worked tirelessly to bring their vision to life, resulting in the creation of Zatum',
    firstContentImgs: ['zatum-mock2.webp', 'zatum-mock3.webp'],
    secondContentHeader: 'Why Zatum?',
    secondContentDesc:
      "Sparkr's team truly understood Dr. Emily Hayes and her team's challenges in handling loads of healthcare data and their desire to improve patient care. This understanding drove Sparkr to create Zatum, a solution made just for fixing these issues and reaching their goals.",
    secondImgSrc: 'zatum-mock4.webp',
    thirdContentHeader: 'What does Zatum offers?',
    thirdContentDesc:
      "Through rigorous research and careful consideration of competitors' offerings, Sparkr developed Zatum to provide actionable insights, empowering professionals to make informed decisions and enhance patient care to unparalleled levels of excellence.",
    thirdImgSrc: 'zatum-mock5.webp',
    fourthContentHeader:
      "How Did Sparkr's Insights Lead to Zatum's Market Impact?",
    fourthContentDesc:
      "After extensive market research and analysis by Sparkr's marketing team, Zatum's market access research was tailored to provide valuable insights for the pharmaceutical and biotech sectors. This ensures that healthcare innovations can reach more people and have a real impact.",
    fourthImgSrc: 'zatum-mock6.webp',
    fifthContentHeader:
      "How Did Sparkr's Developers Make Zatum Accessible on Every Device?",
    fifthContentDesc:
      "Sparkr's developers utilized cutting-edge technology and responsive design principles to ensure that Zatum adapts seamlessly to all devices, enabling users to access healthcare insights effortlessly, whether on desktops, tablets, or smartphones.",
    fifthContentImgs: [
      'zatum-mock7.webp',
      'zatum-mock8.webp',
      'zatum-mock9.webp',
      'zatum-mock10.webp',
    ],
  },
  {
    title: 'NutXer: Your Digital platform for Inner Peace',
    client: 'Zenify Studios',
    year: '2024',
    service: 'Web Development',
    productLink: 'nutxer',
    productLinkHref: '/',
    descHeader: 'Navigating Inner Peace with NutXer',
    desc: "NutXer streamlines mindfulness, acting as your personal guide to inner peace. It's like having a friendly mentor by your side, making mindfulness practices effortless. With NutXer, finding tranquility is simple, helping you achieve balance with ease.",
    imgSrc: 'nutxer1.webp',
    firstContentHeader: 'Product story',
    firstContentDesc:
      "Zenify Studios wanted to share their peaceful services worldwide but didn't know how. With Sparkr's help, they created NutXer, a digital platform connecting people everywhere to mindfulness and tranquility.",
    firstContentImgs: ['nutxer2.webp', 'nutxer3.webp'],
    secondContentHeader: 'Why Nutxer?',
    secondContentDesc:
      'Sparkr created  Nutxer as a digital sanctuary platform tailored to simplify mindfulness practices, catering to the needs of individuals worldwide seeking inner peace and balance.',
    secondImgSrc: 'nutxer4.webp',
    thirdContentHeader:
      "How did Sparkr Transform NutXer's Services into Engaging User Experiences?",
    thirdContentDesc:
      "Sparkr conducted thorough research and understood the importance of displaying NutXer's services to users effectively. By showcasing NutXer's offerings, Sparkr ensures engaging user experiences, drawing them into the world of mindfulness and tranquility, ultimately fostering a deeper connection with the platform.",
    thirdImgSrc: 'nutxer5.webp',
    fourthContentHeader:
      "How did Sparkr's Competitive Analysis Shape NutXer's Unique Offerings?",
    fourthContentDesc:
      "Sparkr's competitive analysis identified NutXer's edge with personalized consultations, group therapy, and online sessions. With innovative techniques and specialized couple counseling, NutXer offers unmatched solutions, driving lasting engagement.",
    fourthImgSrc: 'nutxer6.webp',
    fifthContentHeader:
      "Why Did Sparkr Thoughtfully Include an FAQ Section in NutXer's Design?",
    fifthContentDesc:
      "Sparkr added the FAQ section to NutXer's design to address common user queries efficiently, enhancing user experience and promoting engagement.",
    fifthContentImgs: ['nutxer7.webp', 'nutxer8.webp'],
  },
  {
    title: 'Docker: Your Marketing Companion',
    client: 'InnoSolve Technologies',
    year: '2024',
    service: 'Web Development',
    productLink: 'docker',
    productLinkHref: '/',
    descHeader: 'Redefining Marketing tools',
    desc: "Docker simplifies marketing by making it easier to deliver campaigns. It's like a helpful guide for marketers, helping them plan and launch campaigns effortlessly. With Docker, marketers can reach their audience more effectively and achieve their goals with ease.",
    imgSrc: 'docker1.webp',
    firstContentHeader: 'Product story',
    firstContentDesc:
      'In the fast-paced world of digital marketing, InnoSolve had a vision but needed support. They turned to Sparkr to understand their challenges. Sparkr listened, and together they created Docker—a game-changing solution that simplified marketing campaign delivery for businesses worldwide.',
    firstContentImgs: ['docker2.webp', 'docker3.webp'],
    secondContentHeader:
      'How Does Docker Simplify Marketing Campaigns?',
    secondContentDesc:
      "After understanding their client's pain points, Sparkr developed Docker—a solution that simplifies marketing campaigns, offering time and effort savings for marketers worldwide.",
    secondImgSrc: 'docker4.webp',
    thirdContentHeader: 'What services does Docker offer?',
    thirdContentDesc:
      "Sparkr, in careful consideration of competitors offering similar solutions, played a pivotal role in shaping Docker to stand out in the market today. With Docker, crafted under Sparkr's guidance, you can seamlessly manage email campaigns, content creation, advertising, brand building, and social media—all within a user-friendly platform. Additionally, features like RestAPI access and real-time collaboration, curated by Sparkr, make teamwork more efficient and productivity soar.",
    thirdImgSrc: 'docker5.webp',
    fourthContentHeader: 'Easy Integration',
    fourthContentDesc:
      'Sparkr understood the need for seamless integration, ensuring Docker can effortlessly connect with various business tools. With RestAPI access and real-time collaboration features, Docker streamlines workflows, making productivity a breeze.',
    fourthImgSrc: 'docker6.webp',
    fifthContentHeader: 'Why Testimonials Matter in Docker',
    fifthContentDesc:
      "Sparkr recognizes the importance of showcasing real-world success stories. Testimonials from industry leaders highlight Docker's transformative impact on large enterprises, providing invaluable proof of its effectiveness and inspiring confidence in potential users.",
    fifthContentImgs: [
      'docker7.webp',
      'docker8.webp',
      'docker9.webp',
      'docker10.webp',
    ],
  },
];

const WorkPage = ({ params }: { params: { work: string } }) => {
  const filtered = WORKS.find(
    (item) => item.productLink === params.work,
  );

  return (
    <main className='container mt-36 lg:px-6'>
      <h1
        className={cn(
          'text-4xl font-light md:text-5xl lg:text-6xl',
          bricolage.className,
        )}
      >
        {filtered?.title}
      </h1>

      <div className='my-10 flex justify-between gap-y-7 max-sm:flex-col sm:items-center'>
        <div>
          <div>
            <span className='opacity-70'>Client</span>
            <p className='mt-1'>{filtered?.client}</p>
          </div>

          <div className='mt-3'>
            <span className='opacity-70'>Year</span>
            <p className='mt-1'>{filtered?.year}</p>
          </div>
        </div>

        <div>
          <div>
            <span className='opacity-70'>Service</span>

            <div className='mt-1 space-y-1'>{filtered?.service}</div>
          </div>

          <div className='mt-4'>
            <span className='opacity-70'>Product Link</span>

            <Link
              className='flex w-fit flex-col font-medium'
              href='/contact'
            >
              <AnimatedLink
                className='capitalize transition duration-200 hover:text-green-500'
                title={filtered?.productLink as string}
              />
              <hr className='border border-[#121718]/70' />
            </Link>
          </div>
        </div>

        <div>
          <span className='opacity-70'>{filtered?.descHeader}</span>
          <p className='mt-1 max-w-[500px]'>{filtered?.desc}</p>
        </div>
      </div>

      <Image
        alt='dashboard'
        className=''
        height={500}
        src={`/images/${filtered?.imgSrc}`}
        width={1200}
      />

      <div className='mt-14'>
        <span className='opacity-70'>
          {filtered?.firstContentHeader}
        </span>
        <p className='mt-1 max-w-[700px]'>
          {filtered?.firstContentDesc}
        </p>

        <div className='mt-10 grid grid-cols-2'>
          {filtered?.firstContentImgs.map((src) => (
            <Image
              key={src}
              alt='docker'
              className='w-full'
              height={450}
              src={`/images/${src}`}
              width={450}
            />
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <span className='opacity-70'>
          {filtered?.secondContentHeader}
        </span>
        <p className='mt-1 max-w-[700px]'>
          {filtered?.secondContentDesc}
        </p>

        <div className='mt-10'>
          <Image
            alt='academify product'
            height={400}
            src={`/images/${filtered?.secondImgSrc}`}
            width={1200}
          />
        </div>
      </div>

      <div className='mt-10'>
        <span className='opacity-70'>
          {filtered?.thirdContentHeader}
        </span>
        <p className='mb-10 mt-1 max-w-[700px]'>
          {filtered?.thirdContentDesc}
        </p>

        <Image
          alt='academify product'
          height={400}
          src={`/images/${filtered?.thirdImgSrc}`}
          width={1200}
        />
      </div>

      <div className='my-10'>
        <span className='opacity-70'>
          {filtered?.fourthContentHeader}
        </span>

        <p className='mb-10 max-w-[700px]'>
          {filtered?.fourthContentDesc}
        </p>

        <Image
          alt='academify product'
          height={400}
          src={`/images/${filtered?.fourthImgSrc}`}
          width={1200}
        />
      </div>

      <div className='my-10'>
        <span className='opacity-70'>
          {filtered?.fifthContentHeader}
        </span>
        <p className='mb-10 max-w-[700px]'>
          {filtered?.fifthContentDesc}
        </p>

        <div>
          {filtered?.fifthContentImgs.map((src) => (
            <Image
              key={src}
              alt='docker'
              className='w-full'
              height={450}
              src={`/images/${src}`}
              width={1200}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
