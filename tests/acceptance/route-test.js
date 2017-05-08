import Ember from 'ember';
import { test } from 'ember-qunit';
import moduleForAcceptance from 'engine-test/tests/helpers/module-for-acceptance';
import { make, build } from 'ember-data-factory-guy';
import { isPresent } from 'ember-utils';

moduleForAcceptance('acceptance - routes');

/**
  These two tests demonstrate the issue outlined in #286.  While it is possible
  to instantiate an engine-only factory / model within an integration
  test, it is not possible within an acceptance test because FactoryGuy does not
  know about the unique ember-data store in the engine's container.
*/
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


/**
  These are just a couple of simple fire tests to prove that the engine is mounted
  correctly, that both the engine and app are able to instantiate models within
  their stores, and everything renders okay.
*/
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
