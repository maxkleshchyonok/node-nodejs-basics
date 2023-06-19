import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'script.js');
import { spawn } from 'child_process';
const { stdin, stdout } = process;

const spawnChildProcess = async (args) => {
    // Write your code here
    const process = spawn('node', [pathToFile, ...args]);
    stdin.on('data', (data) => {
        process.stdin.write(data);
    });
    process.stdout.on('data', (data) => {
        stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3'] );
