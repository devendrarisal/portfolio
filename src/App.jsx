
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experince from './components/Experince';
import Contact from './components/Contact';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experince/>  
      <Contact/>
      <Footer/>
      </div>
      <Toaster />
    </>
  )
}

export default App;
