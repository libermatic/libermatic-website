import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import iconSm from '../media/libermatic-v2-192.png';
import iconLg from '../media/libermatic-v2-512.png';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="apple-touch-icon" type="image/png" href={iconSm} />
      <link rel="icon" type="image/png" href={iconSm} sizes="192x192" />
      <link rel="icon" type="image/png" href={iconLg} sizes="512x512" />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
