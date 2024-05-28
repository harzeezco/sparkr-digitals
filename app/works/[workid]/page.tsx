const Page = ({ params }: { params: { workid: string } }) => (
  <main>
    <h1 className='text-xl'>hello {params.workid}</h1>
  </main>
);

export default Page;
