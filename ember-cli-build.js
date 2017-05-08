/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    babel: {
      nonStandard: false,
      optional: ['es7.decorators', 'es7.asyncFunctions']
    },
  });

  return app.toTree();
};
