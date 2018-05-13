import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Footer from '../components/footer';
import Header from '../components/header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
