import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToOldFile = path.join(__dirname, 'files', 'wrongFileName.txt');
const pathToNewFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    // Write your code here
    fs.access(pathToOldFile, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed :( ');
        } else {
            fs.access(pathToNewFile, fs.constants.F_OK, (err) => {
                if (err) {
                    fs.rename(pathToOldFile, pathToNewFile, (err) => {
                        if (err) {
                            throw new Error('FS operation failed :( ');
                        } else {
                            console.log('Successfully done!');
                        }
                    });
                } else {
                    throw new Error('FS operation failed :( ');
                }
            });
        }
    });
};

await rename();
