import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
const { stdout } = process;

const readable = fs.createReadStream(pathToFile, {encoding: 'utf-8'});

const read = async (readable) => {
    // Write your code here
    for await (const chunk of readable) {
        stdout.write(chunk);
    }
};

await read(readable);
