const parseArgs = () => {
    // Write your code here
    const arr = process.argv.slice(2);
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/^--/) && arr[i + 1].match(/^--/)) {
            arr[i] = arr[i].replace(/^--/, '');
            str += `${arr[i]} is undefined, `;
            i += 1;
        }
        if (arr[i].match(/^--/)) {
            arr[i] = arr[i].replace(/^--/, '');
            str += `${arr[i]} is ${arr[i + 1]}, `;
            i += 1;
        } else {
            i += 1;
        }
    }
    console.log(str.slice(0, -2));
};

parseArgs();
