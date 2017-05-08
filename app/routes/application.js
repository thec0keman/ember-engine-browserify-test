import Route from 'ember-route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('app-specific', { title: 'I am an instance of app-specific' });
  },

  setupController(controller) {
    this._super(...arguments);

    const sharedModel = this.get('store').createRecord('shared-model', {
      title: 'I am an instance of shared-model'
    });

    controller.set('sharedModel', sharedModel);
  }
});
