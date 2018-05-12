import React from 'react';
import PropTypes from 'prop-types';
import {
  Hero,
  HeroBody,
  HeroFooter,
  Container,
  Title,
  Subtitle,
  Icon,
} from 'bloomer';

import styles from './splash.module.scss';
import logo from '../media/libermatic-v2.svg';

const Splash = ({ onDown }) => (
  <Hero isColor="dark" isFullHeight className={styles.hero} onClick={onDown}>
    <HeroBody>
      <Container className={styles.header}>
        <img src={logo} />
        <div className={styles.text}>
          <Title isSize="1" className={styles.title}>
            libermatic.
          </Title>
          <Subtitle>Open sourcing humans</Subtitle>
        </div>
      </Container>
    </HeroBody>
    <HeroFooter className={styles.footer} hasTextAlign="centered">
      <Icon className="fas fa-angle-down fa-2x" />
    </HeroFooter>
  </Hero>
);
Splash.propTypes = {
  onDown: PropTypes.func,
};

export default Splash;
