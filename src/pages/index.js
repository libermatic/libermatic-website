import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import {
  Title,
  Subtitle,
  Container,
  Button,
  Columns,
  Column,
  Content,
} from 'bloomer';

import Hero from '../components/hero';
import styles from './index.module.scss';

const IndexPage = ({ data }) => (
  <div>
    <Helmet title="libermatic. - Blog" />
    <Hero {...data.heroImage}>
      <Title className={styles.title}>
        Ever wished managing your business was easy and fun?
      </Title>
      <Subtitle>With ERPNext, you just might.</Subtitle>
      <Button
        isColor="warning"
        to="/services/erpnext/"
        render={props => <Link {...props} />}
        aria-label="More Info"
      >
        Learn More
      </Button>
    </Hero>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>Who are we?</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              <em className={styles.smallCaps}>libermatic.</em> is a consulting
              firm based out of Imphal, IN that strives to solve problems solely
              using open source tools in a sustainable way.
            </p>
            <p>
              We use modern tools and industry best practises to deliver high
              quality products. Furthermore, as a result of using extremely lean
              teams and our unique approach, the products we build tend to be
              considerable cheaper than other alternatives.
            </p>
            <p>Thinking of giving us a try?</p>
          </Content>
          <Button
            isColor="primary"
            to="/contact"
            render={props => <Link {...props} />}
            aria-label="Contact"
          >
            Reach Us
          </Button>
        </Column>
      </Columns>
    </Container>
  </div>
);
IndexPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/176851/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
