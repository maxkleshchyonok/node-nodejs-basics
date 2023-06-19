import crypto from "crypto";
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here
    fs.readFile(pathToFile, (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(crypto.createHash('sha256').update(data).digest('hex'));
        }
    });
};

await calculateHash();
