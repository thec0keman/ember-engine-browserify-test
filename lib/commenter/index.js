/* eslint-env node */

var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'commenter',

  isDevelopingAddon: function() {
    return true;
  },

  lazyLoading: false,
});
