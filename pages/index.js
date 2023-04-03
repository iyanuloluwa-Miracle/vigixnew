import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Cards from '../components/Cards';
import HomeGraph from '../components/HomeGraph';
import HomeTable from '../components/HomeTable';
import Welcome from '../components/Welcome';
import styles from '../styles/vigilant.module.css';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Welcome />
      <BreadCrumb tab={'home'} />
      <Cards />
      <HomeGraph />
      <HomeTable />

      <button
        onClick={handleClick}
        className={showButton ? 'show-button' : 'hide-button'}
      >
        Scroll to Top
      </button>
    </>
  );
}
