const HowItWorks = () => {
  return (
    <div className='py-4'>
      <h3 className='text-center text-off-black font-semibold'>How it Works</h3>
      <div className='flex flex-col px-3 items-center w-full gap-6'>
        <div className='flex'>
          <div>
            <p className='text-logo-red font-bold'>Input Keywords</p>
            <p>
              Search for keywords, softwares, or phrases to find in a job
              posting
            </p>
          </div>
          <div className='w-full flex items-center justify-center'>
            <p className='border rounded-full border-black w-8 h-8 text-center'>
              1
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='w-full flex items-center justify-center'>
            <p className='border rounded-full border-black w-8 h-8 text-center'>
              2
            </p>
          </div>
          <div>
            <p className='text-logo-red font-bold'>Scrape Data</p>
            <p>Grizz takes over and finds necessary data for your search</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <p className='text-logo-red font-bold'>Analyze Data</p>
            <p>
              Receive data in a .csv file with only most important information
            </p>
          </div>
          <div className='w-full flex items-center justify-center'>
            <p className='border rounded-full border-black w-8 h-8 text-center'>
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
