
const { Parser } = require('htmlparser2')
const escapeString = require('js-string-escape')

function htmlToHyperapp (input, output) {
    let first = true

    let parser = new Parser({
        onopentag: (nodeName, attributes) => {
            if (!first) output.write(",")
            output.write(
                `{"nodeName":"${escapeString(nodeName)}",` +
                `"attributes":${JSON.stringify(attributes, null, 0)},` +
                `"children":[`
            )
            first = true
        },
        ontext: (text) => {
            if (!first) output.write(",")
            output.write(`"${escapeString(text)}"`)
            first = false
        },
        onclosetag: (_nodeName) => {
            output.write(']}')
            first = false
        }
    })

    return new Promise((resolve, reject) => {
        output.write('[')
        input.on('data', x => parser.write(x))
        input.on('error', err => reject(err))
        parser.on('error', err => reject(err))
        input.on('end', () => {
            output.write(']')
            resolve()
        })
    })
}

module.exports = htmlToHyperapp
