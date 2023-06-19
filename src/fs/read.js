import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here
    fs.readFile(pathToFile, function (err, data) {
        if (err) {
            throw new Error('FS operation failed :( ');
        } else {
            console.log(data.toString());
        }
    });
};

await read();
