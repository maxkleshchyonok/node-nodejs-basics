import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    // Write your code here
    fs.access(pathToFile, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.rm(pathToFile, (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log('Successfully done!');
                }
            })
        }
    });
};

await remove();
