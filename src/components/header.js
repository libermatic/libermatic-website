import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarItem,
  NavbarMenu,
  NavbarEnd,
  Title,
} from 'bloomer';

import logo from '../media/libermatic-v2.svg';
import styles from './header.module.scss';

const links = [
  { to: '/services', label: 'Things We Do' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

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
          <NavbarEnd>
            {links.map(({ to, label }) => (
              <NavbarItem
                key={to}
                to={to}
                render={props => <Link {...props} />}
                className={styles.navitem}
              >
                {label}
              </NavbarItem>
            ))}
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Header;
