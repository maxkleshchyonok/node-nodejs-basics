// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');
import path, { dirname } from "path";
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFileA = path.join(__dirname, 'files', 'a.json');
const pathToFileB = path.join(__dirname, 'files', 'b.json');

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', {assert: { type: "json" }});
} else {
    unknownObject = await import('./files/b.json', {assert: { type: "json" }});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);


export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);


myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };
