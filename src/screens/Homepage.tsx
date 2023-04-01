import React from 'react';
import ImgText from '../components/imgTest/ImgText';
import hero from '../assets/img/hero.png';
import AboutSection from '../components/about/AboutSection';

import styles from './styles.module.scss';

const Homepage = () => {
  return (
    <div>
      <ImgText
        textColStyle={styles.heroTextCol}
        subtitle="Welcome to Sting | Digital Agency"
        mainHeading="Smart Digital Agency For Your Business To Succeed"
        description="No matter how much you know about a particular medical healthcare professional, you always need to be thinking about what’s? Particular medical healthcare professional, you always need to be thinking about what’s"
        imgSrc={hero}
        imgAlt="hero img"
        mainBtnName="Explore"
        secondBtnName="Contact"
      />
      <AboutSection />
    </div>
  );
};

export default Homepage;
