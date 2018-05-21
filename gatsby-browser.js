exports.onClientEntry = () => {
  if (process.env.NODE_ENV !== 'development') {
    require('babel-polyfill');
  }
};
