import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  store: service(),

  model() {
    return this.get('store').createRecord('engine-specific', {
      title: 'I am an instance of engine-specific'
    });
  },

  setupController(controller) {
    this._super(...arguments);

    const sharedModel = this.get('store').createRecord('shared-model', {
      title: 'I am an instance of shared-model'
    });

    controller.set('sharedModel', sharedModel);
  }
});
