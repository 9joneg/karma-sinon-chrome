karma-sinon-chrome
==

A Karma plugin - adapter for sinon chrome 

```js
it('should create a new tab', function() {
  chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({});
  });
  chrome.browserAction.onClicked.trigger();
  expect(chrome.tabs.create.called).toBe(true);
});
```

Installation
--

```
$ npm i -D karma-sinon-chrome
```

Add `sinon-chrome` to the frameworks key in your Karma configuration

```js
module.exports = function(config) {
  config.set({
    //...

    frameworks: ['jasmine', 'sinon-chrome']

    //...
  });
};
```

License
--

[MIT](http://9joneg.mit-license.org/)
