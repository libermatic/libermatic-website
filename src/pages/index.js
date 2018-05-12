import React from 'react';

import Splash from '../components/splash';

const IndexPage = () => (
  <div>
    <Splash
      onDown={() =>
        window.scroll({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth',
        })
      }
    />
    <div>loph</div>
  </div>
);

export default IndexPage;
