import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
const { stdin } = process;

const write = async () => {
    // Write your code here
    console.log('Create a text:');
    stdin.on('data', (data) => {
        fs.createWriteStream(pathToFile).write(data);
        console.log('Done!');
    });
};

await write();
