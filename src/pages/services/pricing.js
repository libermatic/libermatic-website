import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Title, Container, Button, Content, Columns, Column } from 'bloomer';

import Hero from '../../components/hero';
import styles from './pricing.module.scss';

const plans = [
  {
    name: 'Basic',
    price: 600,
    features: ['1 user', '400MB storage', '200 emails', 'Limited support'],
  },
  {
    name: 'Standard',
    price: 1000,
    features: ['5 users', '2GB storage', '1000 emails', 'Full support'],
  },
  {
    name: 'Premium',
    price: 4500,
    features: ['25 users', '10GB storage', '5000 emails', 'Full support'],
  },
  {
    name: 'Enterprise',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Unlimited emails',
      'Dedicated support',
    ],
  },
];

const Pricing = ({ data }) => (
  <div>
    <Helmet title="libermatic. - Pricing" />
    <Hero {...data.heroImage}>
      <Title>Pricing Guidelines</Title>
    </Hero>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>ERPNext Hosting</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              Our ERPNext cloud service instances are hosted and maintained at
              various secure, industry recommended containerized VMs.
            </p>
            <p>
              All plans include update to the application as and when ERPNext
              upstream releases new versions. Your data also gets updated
              periodically.
            </p>
          </Content>
          <Button
            isColor="primary"
            to={{ pathname: '/contact', state: { req: 'request_demo' } }}
            render={props => <Link {...props} />}
          >
            Request a Demo
          </Button>
        </Column>
      </Columns>
    </Container>
    <Container className={styles.section}>
      <div className={styles.prices}>
        {plans.map(({ name, price, features }) => (
          <div key={name} className={styles.plan}>
            <h4>{name}</h4>
            {price ? (
              <div className={styles.price}>
                <i>₹</i> <em>{price}</em> /mo
              </div>
            ) : (
              <div className={styles.price}>
                <Button
                  isOutlined
                  isColor="dark"
                  to="/contact"
                  render={props => <Link {...props} />}
                >
                  Contact Us
                </Button>
              </div>
            )}
            <ul>
              {features.map(feature => (
                <li key={`${name}-${feature}`}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>Supplementary Services</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              Support services related to ERPNext like implementation, training,
              customization and custom development could be charged extra
              depending on the volume of the tasks.
            </p>
          </Content>
          <Button
            isColor="primary"
            to={{ pathname: '/contact', state: { req: 'erpnext_supplement' } }}
            render={props => <Link {...props} />}
          >
            Know More
          </Button>
        </Column>
      </Columns>
    </Container>
  </div>
);
Pricing.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};
export default Pricing;

export const query = graphql`
  query PricingHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/753267/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
