import fs from 'fs'

const squarewasm = fs.readFileSync('./square.wasm')

const square = await WebAssembly.instantiate(new Uint8Array(squarewasm))
        .then(res => res.instance.exports)

console.log(square.square(10));