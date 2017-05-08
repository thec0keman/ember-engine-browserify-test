import resolver        from './helpers/resolver';
import prepTests, { addToQueue } from 'mammoth-test-helpers/test-support/prep-tests';
import { setResolver } from 'ember-qunit';
import { start }       from 'ember-cli-qunit';

setResolver(resolver);
prepTests();
start();
