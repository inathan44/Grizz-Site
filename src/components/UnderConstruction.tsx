import logo from '../assets/grizz-logo.png';

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <img className='w-32 pb-12' src={logo} alt='Grizz logo' />
      <h1 className='font-bold text-3xl text-logo-red'>COMING SOON</h1>
      <p>Our website is under construction, check back soon! </p>
    </div>
  );
};

export default UnderConstruction;
