import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Content,
  Button,
  Columns,
  Column,
  Icon,
} from 'bloomer';

import styles from './erpnext.module.scss';

const domains = [
  {
    title: 'Accounting',
    description: 'Invoice and maintain reports and statements',
    icon: 'coins',
  },
  {
    title: 'Human Resources',
    description: 'Manage payroll and maintain Employee trainings',
    icon: 'users',
  },
  {
    title: 'Manufacturing',
    description: 'Handle Production Orders and maintain BOMs',
    icon: 'industry',
  },
  {
    title: 'Services',
    description: 'Manage projects and schedule maintenance',
    icon: 'handshake',
  },
  {
    title: 'Retail',
    description: 'Point-of-Sale and handle Purchase and Sales Orders',
    icon: 'store',
  },
  {
    title: 'Inventory',
    description: 'Manage warehouse and forecast stock levels',
    icon: 'shipping-fast',
  },
  {
    title: 'Education',
    description: 'Manage classes and fees and grade students',
    icon: 'book',
  },
  {
    title: 'Agriculture',
    description: 'Plan and manage crops and husbandry',
    icon: 'seedling',
  },
  {
    title: 'Health',
    description: 'Handle patient records and book appointments',
    icon: 'briefcase-medical',
  },
  {
    title: 'Non-Profit',
    description: 'Manage volunteers and handle events',
    icon: 'hands',
  },
];

const ERPNext = () => (
  <div>
    <Helmet title="libermatic. - ERPNext" />
    <Hero isSize="medium" isColor="dark" className={styles.hero}>
      <HeroBody>
        <Container>
          <Title>ERPNext</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Container className={styles.section}>
      <Content>
        <p>
          As the application is a cloud service, all that you need is a modern
          browser. Even a smart phone or a tablet would be enough for some. You
          are not required to install anything and all your data would be
          accessible from any secure internet enabled device.
        </p>
      </Content>
    </Container>
    <Container className={styles.section}>
      <Columns>
        <Column isSize="1/4">
          <Content>
            <h3>What is ERPNext</h3>
          </Content>
        </Column>
        <Column className={styles.content}>
          <Content>
            <p>
              ERPNext an extremely easy to use, powerful open sourced
              application is published by{' '}
              <a href="https://frappe.io/">Frappe Technologies Pvt Ltd</a>. You
              can read more about it at{' '}
              <a href="https://erpnext.org">https://erpnext.org</a>. They also
              provide their own services and support independently of ours.
            </p>
            <p>
              ERPNext is one of the cheapest, most easily implemented software
              of this type today. It can easily be integrated into your existing
              processes with minimal disruption to your business.
            </p>
            <p>
              ERPNext is highly extensible. We also provide customization option
              for your industry and build add ons for applications custom to
              your domain.
            </p>
          </Content>
          <Button
            isColor="primary"
            to="/services/pricing/"
            render={props => <Link {...props} />}
          >
            See Pricing
          </Button>
        </Column>
      </Columns>
    </Container>
    <Container className={styles.section}>
      <div className={styles.pointers}>
        {domains.map(({ icon, title, description }) => (
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

export default ERPNext;
