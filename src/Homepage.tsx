import logo from './assets/grizz-logo.png';

const Homepage = () => {
  return (
    <div className='min-h-[calc(100vh_-_122px)] mt-12'>
      <div className='flex flex-col items-center gap-2'>
        <img src={logo} alt='Grizz logo' className='w-48 md:w-40' />
        <small className='text-sm'>prospect with confidence.</small>
      </div>
      <div className='text-center pt-24 px-4'>
        <div className='text-lg'>
          <h2>
            Grizz is a lead generation platform designed to assist Sales
            individuals prospect into companies with confirmed technology.
          </h2>
        </div>
        <div className='pt-16'>
          <p className='py-6'>How it works</p>
          <ol className='flex flex-col gap-2'>
            <li>
              {`1)`} Type in a technology that is important for your prospects
              to have.
            </li>
            <li>
              {`2)`} Grizz will dissect job boards and populate organizations
              that are hiring for positions where knowledge of that technology
              is necessary.
            </li>
            <li>{`3)`} Prospect!</li>
          </ol>
        </div>
        <div className='py-16'>
          <p>Platform release coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
