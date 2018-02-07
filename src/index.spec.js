/* global describe it */

const { expect } = require('chai')
const lib = require('./index')

describe('parse-package-cli', () => {
    it('module contains a noop function', () => {
        expect(typeof lib.noop).to.equal('function')
    })
})
