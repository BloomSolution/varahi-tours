import React from 'react'
import RateCard from "../../components/RateCard";
import AboutBanner from './AboutBanner';
import FeatureSection from '../../components/FeatureSection';
import Test from './Test'
import TopAbout from './TopAbout';

const About = () => {
  return (
    <div>
        <AboutBanner/>
        <TopAbout/>
        <FeatureSection/>
      <RateCard/>
      {/* <Test/> */}
    </div>
  )
}

export default About
