import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Hero from '../_components/hero/Hero';
import About from '../_components/about/About';
import Subscription from '../_components/subscription/Subscription';
import Contact from '../_components/contactus/Contact';
import Feature from '../_components/feature/Feature';
import Footer from '../_components/footer/Footer';

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Subscription />
      <Contact />
      <Feature />
      <Footer />
    </main>
  );
};

export default Home;
