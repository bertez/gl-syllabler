'use strict';

const expect = require('chai').expect;
const syl = require('../');

describe('Syllabler', () => {
    describe('Calling', () => {
        it('Should throw an error if the function is called with no parameters', () => {
            expect(() => {
                syl();
            }).to.throw(Error);
        });
    });

    describe('Splitting with accents', () => {
        it('Should split correctly', () => {
            const result = syl('sílaba');

            expect(result.syllables).to.eql(['sí', 'la', 'ba']);
            expect(result.totalSyllables).to.equal(3);
            expect(result.tonicSyllable).to.equal(0);
            expect(result.stress).to.equal('1/0/0');
        });
    });

    describe('Splitting with accentuation rules', () => {
        it('Should split correctly', () => {
            const result = syl('efectivamente');

            expect(result.syllables).to.eql(['e', 'fec', 'ti', 'va', 'men', 'te']);
            expect(result.totalSyllables).to.equal(6);
            expect(result.tonicSyllable).to.equal(4);
            expect(result.stress).to.equal('0/0/0/0/1/0');
        });
    });
});