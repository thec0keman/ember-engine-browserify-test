import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import FactoryGuy, { make, manualSetup } from 'ember-data-factory-guy';
import resolver from '../helpers/commenter-resolver';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ticketsys/total-assignments', 'integration - engine-component', {
  integration: true,
  resolver,

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
    {{ engine-component model=model }}
  `);

  assert.ok(true, 'It rendered');
});

test('it can make an engine-specific', function(assert) {
  assert.expect(1);

  this.set('model', make('engine-specific'));
  this.render(hbs`
    {{ engine-component model=model }}
  `);

  assert.ok(true, 'It rendered');
});
