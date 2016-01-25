import Ember from 'ember';

export default Ember.Service.extend({
  assetMap: Ember.inject.service(),
  resolve(name) {
    if (name == null || !typeof name === 'string') return '';
    if (name.indexOf('lorempixel') >= 0 || name.indexOf('http') === 0) return name;
    if (name.indexOf('/') === 0) {
      name = name.substring(1);
    }

    const assetMap = this.get('assetMap');
    const resolved = assetMap.get('assets')[name];
    return resolved ? resolved : name;
  }
});
