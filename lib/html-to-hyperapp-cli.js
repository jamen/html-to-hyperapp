#!/usr/bin/env node

const htmlToHyperapp = require('./html-to-hyperapp.js')
const { createReadStream, createWriteStream } = require('fs')
const { extname } = require('path')

let [ input, output ] = process.argv.slice(2)

if (!output && extname(input) === '.json') {
    output = input
}

htmlToHyperapp(
    input && input !== '-' ? createReadStream(input) : process.stdin,
    output && output !== '-' ? createWriteStream(output) : process.stdout
).catch(err => {
    console.error(err)
    process.exit(1)
})