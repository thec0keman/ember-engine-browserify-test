import humanizeString from 'npm:humanize-string';
import Controller from 'ember-controller';

export default Controller.extend({
  title: humanizeString('fooBar')
})
