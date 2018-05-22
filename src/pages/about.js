import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Title, Container, Content, Columns, Column } from 'bloomer';

import Hero from '../components/hero';
import styles from './about.module.scss';

const tools = [
  { alt: 'React', src: require('../media/react.svg') },
  { alt: 'Node JS', src: require('../media/nodejs.svg') },
  { alt: 'GraphQL', src: require('../media/graphql.svg') },
  { alt: 'Frappe', src: require('../media/frappe.svg') },
  { alt: 'Flask', src: require('../media/flask.svg') },
];

const About = ({ data }) => (
  <div>
    <Helmet>
      <title>libermatic. - About</title>
      <meta
        name="description"
        content="libermatic is an ERPNext service provider in Imphal, Manipur.
        We also undertake unrelated projects all the while aiming to keep our
        interest for all things open source intact"
      />
    </Helmet>
    <Hero {...data.heroImage}>
      <Title>Open sourcing humans</Title>
    </Hero>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>The Organization</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              <em className={styles.smallCaps}>libermatic.</em> is a consulting
              firm based out of Imphal, Manipur, IN. Started in the fall of
              2017, the core services and products we provide are all built on
              top of open source stacks.
            </p>
            <p>
              Our primary motive is to make technology accessible to small
              businesses and individuals who might just be starting to adopt it
              into their organization. And whilst in the process, introduce them
              to open source technologies from the start.
            </p>
            <p>
              Our teams are generally extremely lean, able to constantly shift
              focus to different tasks quite rapidly.
            </p>
          </Content>
        </Column>
      </Columns>
    </Container>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>Tools of the Trade</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              We utilize modern JavaScript technologies like <em>Node.js</em>,{' '}
              <em>GraphQL</em>, <em>React</em> and <em>React Native</em>. We
              also make considerable use of Python frameworks like{' '}
              <em>Frappe</em> and <em>Flask</em>. All in all, we prefer highly
              extensible stacks with a great community and ecosystem.
            </p>
            <p>
              We generally try to adhere to best practices in the industry. But
              break them when better alternatives appear.
            </p>
          </Content>
        </Column>
      </Columns>
    </Container>
    <Container className={`${styles.section} ${styles.tools}`}>
      {tools.map(({ src, alt }) => (
        <div key={alt}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </Container>
  </div>
);
About.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.object,
  }).isRequired,
};

export default About;

export const query = graphql`
  query AboutHeroImageQuery {
    heroImage: imageSharp(id: { regex: "/35016/" }) {
      sizes(maxWidth: 1408) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
