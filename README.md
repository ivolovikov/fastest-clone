## Fast Array Clone Library

This library can **x200 times faster** ([benchmark](https://jsfiddle.net/volovikov/thcu7tjv/24/)) than *lodash* make deep copies of an array or objects with similar structure in JavaScript

### EXAMPLE
```javascript
var sourceArray = [{ f1 : ..., f2: ... }, ...]; // array of SAME STRUCTURED object
```

You can use built-in array clone function:
```javascript
var clonedArray = FastClone.cloneArray(sourceArray);
```
or object clone constructor factory:
```javascript
var Clone = FastClone.factory(sourceArray[0]); // creating deep clone constructor function
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
Library | Ops/sec
------------ | -------------
lodash | 66,313
JQuery | 62,164
**FastClone** | **16,927,673**
Benchmark source code - https://jsfiddle.net/volovikov/thcu7tjv/24/


### LICENSE

Copyright (c) 2016 Ivan Volovikov

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php