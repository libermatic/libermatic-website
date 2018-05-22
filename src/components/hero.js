import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
  Hero as BloomerHero,
  HeroBody,
  Container,
  Title,
  Subtitle,
} from 'bloomer';
import classnames from 'classnames';

import styles from './hero.module.scss';

const Hero = ({
  isSize,
  isColor,
  title,
  titleClassName,
  subtitle,
  sizes,
  children,
}) => {
  return (
    <BloomerHero
      isSize={isSize || 'medium'}
      isColor={isColor || 'dark'}
      className={styles.hero}
    >
      <Img
        sizes={sizes}
        outerWrapperClassName={styles.imageOuter}
        className={styles.image}
      />
      <HeroBody>
        <Container>
          <Title isSpaced={!!subtitle} className={classnames(titleClassName)}>
            {title}
          </Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </Container>
      </HeroBody>
    </BloomerHero>
  );
};
Hero.propTypes = {
  isSize: PropTypes.oneOf(['small', 'medium', 'large']),
  isColor: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  subtitle: PropTypes.string,
  sizes: PropTypes.object,
  children: PropTypes.element,
};

export default Hero;
