#! /usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const { parsePackage } = require('parse-package')

const run = (commander, logFn, whenDone) => {
    const executor = commander || program
    const logger = logFn || console.log.bind(console)
    const onAction = file => {
        logger(`File: ${chalk.bold.cyan(file)}`)
        const out = parsePackage(file)
        Object.keys(out).forEach(k => {
            logger(chalk.magenta('key:'), k, chalk.cyan('val:'), out[k])
        })
        whenDone = Array.isArray(whenDone) || [whenDone]
        whenDone.forEach(done => done(out))
        return out
    }
    const desc = '<filename>.json'

    executor.arguments(desc).action(onAction).parse(process.argv)
}

run()

module.exports = run
