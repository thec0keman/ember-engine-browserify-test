import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('shared-model', {
  default: {
    title: 'This is a model available to both the main app and an engine',
    body: ''
  }
});
