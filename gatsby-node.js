/* eslint-disable no-console */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return new Promise(async (resolve, reject) => {
    const { data, errors } = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                template
                path
              }
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      return reject(errors);
    }
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}/`,
        component: path.resolve(
          `src/templates/${node.frontmatter.template}.js`
        ),
        context: { id: node.id },
      });
    });
    return resolve();
  });
};

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: [...babelrc.plugins, 'transform-regenerator'],
});
