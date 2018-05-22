import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Title, Subtitle, Icon, Button } from 'bloomer';

import Hero from '../components/hero';
import styles from './404.module.scss';

const NotFoundPage = ({ data }) => (
  <Hero
    className={styles.hero}
    containerClassName={styles.container}
    {...data.heroImage}
  >
    <Icon className={`fas fa-exclamation-triangle fa-5x ${styles.icon}`} />
    <div>
      <Title>Page Not Found</Title>
      <Subtitle>
        It seems the page you are looking for does not exist in this version of
        reality.
      </Subtitle>
      <Button to="/" render={props => <Link {...props} />}>
        Reconstitute
      </Button>
    </div>
  </Hero>
);
NotFoundPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundImageQuery {
    heroImage: imageSharp(id: { regex: "/628996/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
