import React from 'react';
import Link from 'gatsby-link';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Icon,
  Button,
} from 'bloomer';

import styles from './404.module.scss';

const NotFoundPage = () => (
  <Hero isSize="medium" isColor="dark" className={styles.hero}>
    <HeroBody>
      <Container className={styles.container}>
        <Icon className={`fas fa-exclamation-triangle fa-5x ${styles.icon}`} />
        <div>
          <Title>Page Not Found</Title>
          <Subtitle>
            It seems the page you are looking for does not exist in this version
            of reality.
          </Subtitle>
          <Button to="/" render={props => <Link {...props} />}>
            Reconstitute
          </Button>
        </div>
      </Container>
    </HeroBody>
  </Hero>
);

export default NotFoundPage;
