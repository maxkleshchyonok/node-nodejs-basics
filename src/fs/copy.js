import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFolder = path.join(__dirname, 'files');
const pathToFolderCopy = path.join(__dirname, 'files_copy');

const copy = async () => {
    // Write your code here
    fs.readdir(pathToFolder, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.mkdir(pathToFolderCopy, (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                } else {
                    console.log('Folder created');
                }
            });
            files.forEach(item => {
               const pathToFile = path.join(__dirname, 'files', item);
               const pathToFileCopy = path.join(__dirname, 'files_copy', item);
               fs.readFile(pathToFile, (err, data) => {
                   if (err) {
                       throw err;
                   } else {
                       fs.writeFile(pathToFileCopy, data, (err) => {
                           if (err) {
                               throw new Error('FS operation failed');
                           } else {
                               console.log('File copied!')
                           }
                       });
                   }
               });
            });
        }
    });
};

await copy();
