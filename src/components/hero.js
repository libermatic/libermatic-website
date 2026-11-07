import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Hero as BloomerHero, HeroBody, Container } from 'bloomer';
import classnames from 'classnames';

import styles from './hero.module.scss';

const Hero = ({
  isSize,
  isColor,
  sizes,
  className,
  containerClassName,
  children,
}) => {
  return (
    <BloomerHero
      isSize={isSize || 'medium'}
      isColor={isColor || 'dark'}
      className={classnames(styles.hero, className)}
    >
      <Img
        sizes={sizes}
        outerWrapperClassName={styles.imageOuter}
        className={styles.image}
      />
      <HeroBody>
        <Container className={classnames(containerClassName)}>
          {children}
        </Container>
      </HeroBody>
    </BloomerHero>
  );
};
Hero.propTypes = {
  isSize: PropTypes.oneOf(['small', 'medium', 'large']),
  isColor: PropTypes.oneOf(['light', 'dark']),
  sizes: PropTypes.object,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Hero;
