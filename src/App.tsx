import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Hero from './hero/Hero';
import Footer from './components/Footer';
import Homepage from './Homepage';

function App() {
  return (
    <div className='font-inter'>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Hero />} /> */}
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
