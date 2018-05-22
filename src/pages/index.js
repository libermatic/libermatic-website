import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
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
    <Helmet>
      <title>libermatic. - Open sourcing humans</title>
      <meta
        name="description"
        content="libermatic builds and provides tools for startups and
        contemporary businesses alike to help solve problems."
      />
    </Helmet>
    <Hero {...data.heroImage}>
      <Title isSpaced className={styles.title}>
        Ever wished managing your business was easy and fun?
      </Title>
      <Subtitle>With ERPNext, you just might.</Subtitle>
      <Button
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
            <h3>Technology and You</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              Adopting any new technology always seems daunting. Particularly
              so, if it is going to affect a critical portion of your life. But
              it doesn&apos;t always have to like that.
            </p>
            <blockquote>
              Any sufficiently advanced technology is indistinguishable from
              magic. — Arthur C Clarke
            </blockquote>
            <p>
              We believe that we can aid you in a few aspects of adopting and
              implementing these major decisions. We offer our services to
              possibly help you ease into this transition. We provide you
              information and services to handle these.
            </p>
            <p>
              Meanwhile you can continue doing what you do best — run your
              business.
            </p>
          </Content>
        </Column>
      </Columns>
    </Container>
    <div aria-hidden className={styles.divider}>
      <Img sizes={data.sectionOneImage.sizes} />
    </div>
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
  query IndexImageQuery {
    heroImage: imageSharp(id: { regex: "/176851/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionOneImage: imageSharp(id: { regex: "/34153/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
