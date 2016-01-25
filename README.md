# Ember-cli-asset-resolver

An ember addon that resolves digested assets in the `/public` directory.

You must enable to generate the asset map by editing `ember-cli-build.js`.

```
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      generateAssetMap: true
    }
  });

  return app.toTree(appData);
}
```

## Usage

Just use the `resolve-asset` helper. 

``` application.hbs
<h2>Welcome to Ember</h2>
{{resolve-asset '/path/to/the/asset.jpg'}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
