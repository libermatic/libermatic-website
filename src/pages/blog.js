import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Title, Content } from 'bloomer';

import Hero from '../components/hero';
import styles from './blog.module.scss';

const Blog = ({ data }) => (
  <div className={styles.fill}>
    <Helmet title="libermatic. - Blog" />
    <Hero {...data.heroImage}>
      <Title>Blog</Title>
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
Blog.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default Blog;

export const query = graphql`
  query BlogHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/962095/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
