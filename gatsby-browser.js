import objectFitImages from 'object-fit-images';

exports.onClientEntry = () => {
  objectFitImages();
  if (process.env.NODE_ENV !== 'development') {
    require('babel-polyfill');
  }
};
