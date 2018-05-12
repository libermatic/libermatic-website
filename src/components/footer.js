import React from 'react';
import {
  Footer as BloomerFooter,
  Container,
  Content,
  Columns,
  Column,
  Icon,
} from 'bloomer';
import Link from 'gatsby-link';

import styles from './footer.module.scss';

const Footer = () => (
  <BloomerFooter>
    <Container>
      <Columns>
        <Column isSize={8}>
          <Content>
            <p>
              <em className={styles.titleWord}>libermatic.</em> is a consulting
              firm based out of Imphal, IN that is dedicated to solving problems
              solely using open source tools and approaches.
            </p>
          </Content>
        </Column>
        <Column className={styles.links}>
          <nav className="is-size-7">
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
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
          <div className={`is-size-7 ${styles.legal}`}>
            <span>&copy; 2018 libermatic.</span>
            <span>
              <Link to="/terms-of-service">Terms of Service</Link>
            </span>
            <span>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </span>
          </div>
        </Column>
      </Columns>
    </Container>
  </BloomerFooter>
);

export default Footer;
