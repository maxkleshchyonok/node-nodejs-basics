const parseEnv = () => {
    // Write your code here
   let str = '';
   Object.keys(process.env).filter(el => el.includes('RSS_')).forEach(key => {
      str += `${key}=${process.env[`${key}`]}; `;
   });
   console.log(str.slice(0, -2));
};

parseEnv();
