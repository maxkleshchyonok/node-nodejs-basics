import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToNewFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    // Write your code here
    fs.access(pathToNewFile, fs.F_OK, (err) => {
        if (err) {
            const data = 'I am fresh and young';
            fs.writeFile(pathToNewFile, data, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Successfully created!')
                }
            });
        } else {
            throw new Error('FS operation failed :( ');
        }
    });
};

await create();
