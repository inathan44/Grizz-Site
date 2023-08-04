import logo from '../assets/grizz-logo.png';
// import MenuIcon from '../assets/MenuIcon';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-between px-6 py-4'>
        <div className=''>
          <img src={logo} alt='Grizz logo' className='w-20' />
        </div>
        {/* <div className='hidden md:block text-xl text-off-black font-semibold tracking-wide'>
          <Link to='/about'>About</Link>
        </div> */}
        {/* <div className='md:hidden'>
          <MenuIcon />
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
