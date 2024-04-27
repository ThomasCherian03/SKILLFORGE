import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freecourses from '../components/Freecourses';
import Footer from '../components/Footer';

function Home() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <Freecourses/>
    <Footer/>
   </>
  )
}

export default Home;