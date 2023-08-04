import HowItWorks from './HowItWorks';

const Hero = () => {
  return (
    <>
      <main className=''>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-3/5 flex flex-col text-center md:text-left gap-4 max-w-xl mx-auto md:pl-8'>
            <h1 className='text-3xl font-bold w-72 mx-auto md:text-4xl md:mx-0 lg:text-5xl lg:w-96'>
              Job description data at a glance
            </h1>
            <h2 className='text-sm px-4 md:px-0 text-off-black md:text-base'>
              Get the most important data from job postings from popular sites
              like Glassdoor and LinkedIn in an easy to read way, saving time
              manually scraping
            </h2>
            <div>
              <button className='bg-logo-red text-white px-6 py-1 rounded-full font-semibold'>
                Try it Now
              </button>
            </div>
          </div>
          {/* VIDEO PLACEHOLDEAR */}
          <div className='bg-gray-200 mx-6 h-40 rounded-md my-6 flex items-center justify-center md:w-2/5'>
            <h1>VIDEO HERE</h1>
          </div>
        </div>
      </main>

      <HowItWorks />
    </>
  );
};

export default Hero;
