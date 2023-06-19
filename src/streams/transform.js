const { stdin, stdout } = process;
import { Transform } from 'stream';

const transform = async () => {
    // Write your code here
    console.log('Write your text:');

    function reverse() {
        return new Transform({
            transform(chunk, encoding, callback) {
                callback(null, chunk.toString().split('').reverse().join(''));
            }
        });
    }

    stdin.pipe(reverse()).pipe(stdout);
};

await transform();
