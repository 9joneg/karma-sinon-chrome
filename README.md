karma-sinon-chrome
==================

A Karma plugin - adapter for sinon chrome 

```
describe("sinon chrome", function() {
    beforeEach(function() {
        chrome.reset();
    });

    it("can triger an event", function() {
        chrome.browserAction.onClicked.addListener(function() {
            chrome.tabs.create({ url: "http://sinonjs.org/" });
        });
        chrome.browserAction.onClicked.trigger();
        assert(chrome.tabs.create.calledWith({ url: "http://sinonjs.org/" }));
    });
});
```

Installation
------------

```
$ npm i --save-dev karma-sinon-chrome
```

Add `sinon-chrome` to the frameworks key in your Karma configuration

```
module.exports = function(config) {
    config.set({
        //...

        frameworks: ['mocha', 'chai', 'sinon-chrome']

        //...
    });
};
```

License
-------

[MIT](http://9joneg.mit-license.org/)
