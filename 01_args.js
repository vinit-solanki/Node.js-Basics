const args = process.args;
console.log(args); //undefined

const argv = process.argv;
console.log(argv); //['node', 'script.js']

const greeting = () => {
  const argvs = process.argv.slice(2);
  console.log(`Hello, ${argvs}`);
};
greeting(); 
/* 
    The process object is a global object in Node.js that 
    provides information about the current Node.js process. 
    You don’t need to import it; it's available globally. 
    
    process.argv is an array that contains the command-line 
    arguments passed to the Node.js script.The first two elements of 
    the array are: Path to the Node.js executable and Path to the executed script.

    Run: npm run args ____ -> to run the script define in package.json
*/