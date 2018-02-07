#! /usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const { parsePackage } = require('parse-package')

function run() {
    program
        .arguments('<filename>.json')
        .action(function(file) {
            console.log(`File: ${chalk.bold.cyan(file)}`)
            const out = parsePackage(file)
            Object.keys(out).forEach(k => {
                console.log(chalk.magenta('key:'), k, chalk.cyan('val:'), out[k])
            })
            return out
        })
        .parse(process.argv)
}

run()

module.exports = run
