'use strict';

const Syllabler = require('./lib/syllabler');

module.exports = (word) => {
    if(!word) {
        throw new Error('Missing word.');
    }

    const s = new Syllabler(word).process();

    return s;
};