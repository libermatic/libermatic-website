import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Layout = ({ children }) => <div>{children()}</div>;

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
