import React from 'react';
import Link from 'gatsby-link';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Button,
  Columns,
  Column,
  Content,
} from 'bloomer';

import styles from './index.module.scss';

const IndexPage = () => (
  <div>
    <Hero isSize="medium" isColor="dark" className={styles.hero}>
      <HeroBody>
        <Container>
          <Title className={styles.title} isSpaced>
            Ever wished managing your business was easy and fun?
          </Title>
          <Subtitle>With ERPNext, you just might.</Subtitle>
          <Button
            isColor="info"
            to="/services/erpnext/"
            render={props => <Link {...props} />}
          >
            Learn More
          </Button>
        </Container>
      </HeroBody>
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
              <em>libermatic.</em> is a consulting firm based out of Imphal, IN
              that strives to solve problems solely using open source tools in a
              sustainable way.
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
          >
            Reach Us
          </Button>
        </Column>
      </Columns>
    </Container>
  </div>
);

export default IndexPage;
