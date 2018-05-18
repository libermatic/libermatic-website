import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarItem,
  NavbarMenu,
  NavbarEnd,
  NavbarLink,
  NavbarDropdown,
  Title,
} from 'bloomer';

import logo from '../media/libermatic-v2.svg';
import styles from './header.module.scss';

const links = [
  {
    to: '/services',
    label: 'Things We Do',
    dropdown: [
      {
        to: '/services/erpnext',
        label: 'ERPNext',
      },
      {
        to: '/services/pricing',
        label: 'Pricing',
      },
    ],
  },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

function renderLink({ to, label, dropdown }) {
  if (dropdown) {
    return (
      <NavbarItem key={to} hasDropdown isHoverable className={styles.navitem}>
        <NavbarLink
          to={to}
          render={props => <Link {...props} />}
          activeClassName="is-active"
        >
          {label}
        </NavbarLink>
        <NavbarDropdown>{dropdown.map(renderLink)}</NavbarDropdown>
      </NavbarItem>
    );
  }
  return (
    <NavbarItem
      key={to}
      to={to}
      render={props => <Link {...props} />}
      className={styles.navitem}
      activeClassName="is-active"
    >
      {label}
    </NavbarItem>
  );
}

class Header extends Component {
  state = { menuIsOpen: false };
  handleMenuClick = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };
  render() {
    const { menuIsOpen } = this.state;
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem to="/" render={props => <Link {...props} />}>
            <img src={logo} alt="libermatic." />
            <Title className={styles.title}>libermatic.</Title>
          </NavbarItem>
          <NavbarBurger isActive={menuIsOpen} onClick={this.handleMenuClick} />
        </NavbarBrand>
        <NavbarMenu isActive={menuIsOpen} onClick={this.handleMenuClick}>
          <NavbarEnd>{links.map(renderLink)}</NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Header;
