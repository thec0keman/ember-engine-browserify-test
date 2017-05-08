import Ember from 'ember';
import { test } from 'ember-qunit';
import moduleForAcceptance from 'engine-test/tests/helpers/module-for-acceptance';
import { make, build } from 'ember-data-factory-guy';
import { isPresent } from 'ember-utils';

moduleForAcceptance('acceptance - routes', {
});

test('main route works', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.equal($('.model-viewer').length, 2, 'There are 2 items displayed');
  });
});

test('engine route works', function(assert) {
  assert.expect(1);

  visit('/commenter');

  andThen(() => {
    assert.equal($('.model-viewer').length, 4, 'There are 4 items displayed');
  });
});

test('factory-guy make tests', function(assert) {
  assert.expect(3);

  const appModel = make('app-specific');
  const appSharedModel = make('shared-model');
  const engineModel = make('engine-specific');

  assert.isPresent(appModel, 'The app model worked');
  assert.isPresent(appSharedModel, 'The app shared model worked');
  assert.isPresent(engineModel, 'The app shared model worked');
});

test('factory-guy build tests', function(assert) {
  assert.expect(3);

  const appModel = build('app-specific');
  const appSharedModel = build('shared-model');
  const engineModel = build('engine-specific');

  assert.isPresent(appModel, 'The app model worked');
  assert.isPresent(appSharedModel, 'The app shared model worked');
  assert.isPresent(engineModel, 'The app shared model worked');
});
