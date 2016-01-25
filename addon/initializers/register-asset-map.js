const fallbackAssetMap = { assets: {} };

function register(application, assetMap = fallbackAssetMap) {
  application.register('service:asset-map', Ember.Object.create(assetMap), {
    instantiate: false,
    singleton: true
  });
}

export function initialize(container, application) {
  application.deferReadiness();

  var promise = new Ember.RSVP.Promise(function(resolve, reject) {
    Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
  });

  promise.then(function(assetMap) {
    register(application, assetMap);
  }, function() {
    register(application);
  }).then(function() {
    application.advanceReadiness();
  });
}

export default {
  name: 'register-asset-map',
  initialize
};
