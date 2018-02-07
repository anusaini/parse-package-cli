/* global describe it */

const { expect } = require('chai')
const lib = require('./index')

describe('parse-package-cli', () => {
    it('module returns a run function', () => {
        expect(typeof lib).to.equal('function')
    })
})
