import React from 'react';
import Link from 'gatsby-link';

import Splash from '../components/splash';

const IndexPage = () => (
  <div>
    <Splash
      onDown={() => {
        console.log('down');
      }}
    />
    <div>loph</div>
  </div>
);

export default IndexPage;
