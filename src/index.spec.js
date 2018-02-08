/* global describe it */

const { expect } = require('chai')
const lib = require('./index')

describe('parse-package-cli', () => {
    it('module returns a run function', () => {
        expect(typeof lib).to.equal('function')
    })
    it('run function accepts three params', () => {
        expect(lib.length).to.equal(3)
    })
    it('run function accepts commander, logger and whenDone params', () => {
        const commander = {}
        commander.arguments = desc => {
            expect(desc).to.equal('<filename>.json')
            return commander
        }
        commander.action = onAction => {
            expect(typeof onAction).to.equal('function')
            return commander
        }
        commander.parse = processArgv => {
            expect(processArgv).to.not.equal(null)
            return commander
        }
        const logger = val => {
            expect(val.length).to.greaterThan(0)
        }
        const keys = [
            'filename',
            'parsed',
            'errors',
            'contains',
            'get'
        ]
        const whenDone = val => {
            expect(Object.keys(val)).to.deep.equal(keys)
        }
        lib(commander, logger, whenDone)
    })
})
