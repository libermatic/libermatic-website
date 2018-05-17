import React from 'react';
import Helmet from 'react-helmet';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Content,
  Columns,
  Column,
} from 'bloomer';

import styles from './about.module.scss';

const About = () => (
  <div>
    <Helmet title="libermatic. - About" />
    <Hero isColor="dark">
      <HeroBody>
        <Container>
          <Title>About</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Container>
      <Columns className={styles.section}>
        <Column isSize="1/4">
          <Content>
            <h3>The Organization</h3>
          </Content>
        </Column>
        <Column>
          <Content>
            <p>
              <em>libermatic.</em> is a consulting firm based out of Imphal, IN.
              Started in the fall of 2017, the core services and products we
              provide are all built on top of open source stacks.
            </p>
            <p>
              Our teams are generally extremely lean, able to constantly shift
              focus to different tasks quite fast.
            </p>
          </Content>
        </Column>
      </Columns>
      <Columns className={styles.section}>
        <Column isSize="1/4">
          <Content>
            <h3>Tools</h3>
          </Content>
        </Column>
        <Column>
          <Content>
            <p>
              We utilize modern JavaScript technologies like Node.js, GraphQL,
              React and React Native. We also make considerable use of Python
              frameworks like Frappe and Flask. All in all, we prefer highly
              extensible stacks with a great community and ecosystem.
            </p>
          </Content>
        </Column>
      </Columns>
    </Container>
  </div>
);

export default About;
