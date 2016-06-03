'use strict';

const assert = require('assert');
const FastClone = require('../');

describe('index', function () {
    it('FastClone.factory', function () {
        const sourceArray = [
            {a: 1, b: [{c: "d", f: {g: 3}}]},
            {a: 2, b: [{c: "e", f: {g: 4}}]}
        ];
        const clonedArray = FastClone.cloneArray(sourceArray);

        assert.deepEqual(sourceArray[0], clonedArray[0]);
        assert.deepEqual(sourceArray[1], clonedArray[1]);

        clonedArray[0].a = 3;
        clonedArray[0].b[0].c = "f";
        clonedArray[0].b[0].f.g = 10;

        assert.notDeepEqual(sourceArray[0], clonedArray[0]);
        assert.notEqual(sourceArray[0].b[0].f.g, clonedArray[0].b[0].f.g);
    });
});