
# html-to-hyperapp

Convert HTML to Hyperapp JSON

## Install

```sh
npm i html-to-hyperapp
```

Or use the CLI utility:

```sh
npx html-to-hyperapp input.html output.json
```

## Usage

### `htmlToHyperapp(input, output)`

Takes an input stream and output stream, where HTML comes from the input and JSON is written to the output.

```js
htmlToHyperapp(
    fs.createReadStream('./input.html'),
    fs.createWriteStream('./output.json')
)
```

### `html-to-hyperapp [input] [output]`

Performs the function over files or stdio.

```sh
$ html-to-hyperapp input.html output.json
$ cat input.html | html-to-hyperapp > output.json
```
