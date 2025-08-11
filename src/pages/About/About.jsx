import React from 'react'
import RateCard from "../../components/RateCard";
import AboutBanner from './AboutBanner';
import FeatureSection from '../../components/FeatureSection';
import TopAbout from './TopAbout';

const About = () => {
  return (
    <div>
        <AboutBanner/>
        <TopAbout/>
        <FeatureSection/>
      <RateCard/>
    </div>
  )
}

export default About
