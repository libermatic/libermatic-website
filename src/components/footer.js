import React from 'react';
import {
  Footer as BloomerFooter,
  Container,
  Content,
  Heading,
  Columns,
  Column,
  Icon,
} from 'bloomer';

import styles from './footer.module.scss';

const Footer = () => (
  <BloomerFooter>
    <Container>
      <Columns>
        <Column isSize="3/4">
          <Content>
            <p>
              <em className={styles.titleWord}>libermatic.</em> is a consulting
              firm based out of Imphal, IN that is dedicated to solving problems
              solely using open source tools and approaches.
            </p>
          </Content>
        </Column>
        <Column className={styles.socials}>
          <Content>
            <a href="https://github.com/libermatic">
              <Icon isSize="large" className="fab fa-github fa-2x" />
            </a>
            <a href="https://twitter.com/libermatic">
              <Icon isSize="large" className="fab fa-twitter fa-2x" />
            </a>
          </Content>
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Content isSize="small" className={styles.legal}>
            <span>&copy; 2018 libermatic.</span>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </Content>
        </Column>
      </Columns>
    </Container>
  </BloomerFooter>
);

export default Footer;
