import React from 'react';
import Helmet from 'react-helmet';
import { Hero, HeroBody, Container, Title, Content } from 'bloomer';

import styles from './blog.module.scss';

const Blog = () => (
  <div className={styles.fill}>
    <Helmet title="libermatic. - Blog" />
    <Hero isColor="dark">
      <HeroBody>
        <Container>
          <Title>Blog</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Container className={styles.section}>
      <Content>
        <p>
          Later on, here you can read news about <em>libermatic.</em> and other
          stuffs.
        </p>
      </Content>
    </Container>
  </div>
);

export default Blog;
