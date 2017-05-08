import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  /**
    NOTE: We are not passing in a reference to the app's store.
          (e.g. https://github.com/ember-engines/ember-engines#declaring-dependencies)

          This, coupled with the fact that `ember-data` is a dependency for the engine will
          enable the engine to have its own unique instance of ember-data.
  */
});

loadInitializers(App, config.modulePrefix);

export default App;
