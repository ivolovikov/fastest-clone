## Fast Array Clone Library

This library can **200X times faster** than *lodash* (<a href="https://jsfiddle.net/volovikov/thcu7tjv/24/" target="_blank">benchmark</a>) make deep copies of an array or objects with similar structure in JavaScript

### EXAMPLE
```javascript
// array of SAME STRUCTURED object
var sourceArray = [{ f1 : ..., f2: ... }, ...];
```

You can use built-in array clone function:
```javascript
var clonedArray = FastClone.cloneArray(sourceArray);
```
or object clone constructor factory:
```javascript
// creating deep clone constructor function
var Clone = FastClone.factory(sourceArray[0]);
var clonedArray = sourceArray.map(function(item) {
    // you can add here custom logic
    return new Clone(item);
});
```
### INSTALLATION
In a browser:
```html
<script src="https://cdn.rawgit.com/ivolovikov/fastest-clone/master/index.js"></script>
```
Using npm:
```
npm install fastest-clone
```
### BENCHMARK
Result for Chromium 50.0.2661.102 Ubuntu 14.04 (64-bit)
Library | Ops/sec
------------ | -------------
lodash | 66,313
JQuery | 62,164
**FastClone** | **16,927,673**
Benchmark source code - <a href="https://jsfiddle.net/volovikov/thcu7tjv/24/" target="_blank">benchmark</a>


### LICENSE

Copyright (c) 2016 Ivan Volovikov

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
