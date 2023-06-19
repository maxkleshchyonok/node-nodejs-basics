import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as zlib from "zlib";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToZip = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    // Write your code here
    fs.createReadStream(pathToFile).pipe(zlib.createGzip()).pipe(fs.createWriteStream(pathToZip));
    console.log('Zip created!');
};

await compress();
