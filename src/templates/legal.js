import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Hero, HeroBody, Title, Subtitle, Content } from 'bloomer';

import styles from './legal.module.scss';

const Legal = ({ data }) => {
  return (
    <div>
      <Helmet
        title={`libermatic. - ${data.markdownRemark.frontmatter.title}`}
      />
      <Hero isColor="primary">
        <HeroBody>
          <Container>
            <Title isSize={2}>{data.markdownRemark.frontmatter.title}</Title>
            <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
      <Container>
        <Content
          className={styles.section}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </Container>
    </div>
  );
};

export default Legal;
Legal.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export const query = graphql`
  query pageBy($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
