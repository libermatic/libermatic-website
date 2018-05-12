import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <div>
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
