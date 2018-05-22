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

const links = [
  { to: '/services', label: 'Services' },
  { to: '/services/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Footer = () => (
  <BloomerFooter>
    <Container>
      <Columns>
        <Column isSize={8}>
          <Content className={styles.info}>
            <p>
              <strong>libermatic.</strong> /ˈlɪbəmatɪk; lɪbərˈmatɪk/{' '}
              <span className={styles.smallcaps}>adj.</span> willing to be free,
              open. From Latin <em>liber</em> (free) + Greek <em>μέμαα</em> (to
              wish eagerly, strive, yearn, desire).
            </p>
          </Content>
        </Column>
        <Column className={styles.links}>
          <nav className="is-size-7">
            <ul>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Column>
        <Column className={styles.socials}>
          <Content role="menu">
            <a
              role="menuitem"
              aria-label="Visit us on Github"
              href="https://github.com/libermatic"
            >
              <Icon isSize="large" className="fab fa-github fa-2x" />
            </a>
            <a
              role="menuitem"
              aria-label="Visit us on Twitter"
              href="https://twitter.com/libermatic"
            >
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
