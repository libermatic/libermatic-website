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
          <Content className={styles.info}>
            <p>
              <strong>libermatic.</strong> /ˈlɪbəmatɪk/ /lɪbərˈmatɪk/{' '}
              <span className={styles.smallcaps}>adj.</span> willing to be free,
              open. From Latin <em>liber</em> (free) + Greek <em>μέμαα</em> (to
              wish eagerly, strive, yearn, desire).
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
