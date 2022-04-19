import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Pricing from '../components/sections/Pricing';
import { Element } from 'react-scroll';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit imageFill className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile imageFill className="illustration-section-05" />
        <Element name='pricing'>
          <Pricing pricingSwitcher={false} className="illustration-section-03" />
        </Element>
      </React.Fragment>
    );
  }
}

export default Home;