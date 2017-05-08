import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import FactoryGuy, { make, manualSetup } from 'ember-data-factory-guy';
import hbs from 'htmlbars-inline-precompile';

/**
  These tests are using factory-guy to push some models into the store and render
  them in our test components.

  This is the counterpart to the engine-component-test file and shows similar
  behavior within our main app.
*/

moduleForComponent('ticketsys/total-assignments', 'integration - app-component', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
  },

  afterEach() {
    Ember.run(FactoryGuy, 'clearStore');
  }
});

test('it can make a shared-model', function(assert) {
  assert.expect(1);

  this.set('model', make('shared-model'));
  this.render(hbs`
    {{ app-component model=model }}
  `);

  assert.ok(true, 'It rendered');
});

test('it can make an app-specific', function(assert) {
  assert.expect(1);

  this.set('model', make('app-specific'));
  this.render(hbs`
    {{ app-component model=model }}
  `);

  assert.ok(true, 'It rendered');
});
