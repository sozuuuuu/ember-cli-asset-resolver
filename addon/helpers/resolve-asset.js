import Ember from 'ember';

export default Ember.Helper.extend({
  assetResolver: Ember.inject.service(),

  compute(params, hash) {
    let resolver = this.get('assetResolver');
    return resolver.resolve(params[0]);
  }
});
