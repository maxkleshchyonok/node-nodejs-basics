import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFolder = path.join(__dirname, 'files');

const list = async () => {
    // Write your code here
    fs.readdir(pathToFolder, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files);
        }
    });
};

await list();
