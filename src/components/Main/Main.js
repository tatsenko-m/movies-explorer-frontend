import React from 'react';
import { Element } from 'react-scroll';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
  return (
    <>
      <Promo />
      <Element name="about-project">
        <AboutProject />
      </Element>
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
};

export default Main;