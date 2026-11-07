import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import {
  Title,
  Container,
  Content,
  Button,
  Columns,
  Column,
  Icon,
} from 'bloomer';

import Hero from '../components/hero';
import styles from './services.module.scss';

const services = [
  {
    title: 'Implementation',
    description: 'Full support and integration with your organization',
    icon: 'cogs',
  },
  {
    title: 'Training',
    description: 'Hands on personalized experience for your employees',
    icon: 'chalkboard-teacher',
  },
  {
    title: 'Customization',
    description: 'Customize ERPNext according to your requirements',
    icon: 'wrench',
  },
  {
    title: 'Feature Development',
    description: 'Build and enhance ERPNext with features not present in core',
    icon: 'code',
  },
];

const Services = ({ data }) => (
  <div>
    <Helmet>
      <title>libermatic. - Services</title>
      <meta
        name="description"
        content="libermatic provides ERPNext cloud service and support in
        Imphal, Manipur. Support services include, but not limited to,
        implementation, customization, training, migration and custom
        development."
      />
    </Helmet>
    <Hero {...data.heroImage}>
      <Title>Services</Title>
    </Hero>
    <Container className={styles.section}>
      <Content>
        <p>
          We provide cloud service and support to easily manage your business.
          The service we provide would be over ERPNext, a multi purpose business
          software with features including but not limited to billing, invoicing
          and inventory management, supported out of the box.
        </p>
      </Content>
      <Button
        isColor="info"
        to="/services/erpnext"
        render={props => <Link {...props} />}
      >
        Learn More
      </Button>
    </Container>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>Supports we provide</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              Apart from the ERPNext hosting, we also various other services
              related to it. Although ERPNext is quite intuitive and easy to
              use, we can assist you during various stages of its usage. We
              think you should be able to use the full potential of this
              application.
            </p>
            <p>
              These services are sometimes clumped together in the packages we
              offer.
            </p>
          </Content>
          <Button
            isColor="primary"
            to="/services/pricing"
            render={props => <Link {...props} />}
          >
            See Pricing
          </Button>
        </Column>
      </Columns>
    </Container>
    <Container className={styles.section}>
      <div className={styles.pointers}>
        {services.map(({ icon, title, description }) => (
          <div key={title}>
            <Icon className={`fas fa-${icon} fa-3x ${styles.icon}`} />
            <dl>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </dl>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
Services.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default Services;

export const query = graphql`
  query ServicesHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/41420/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
