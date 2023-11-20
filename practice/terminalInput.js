// process.stdin.on('readable', ()=>{ 
//     // reads what is being typed. 
//     let variable = process.stdin.read(); 
//     // trying to read 
//     // variable = variable.toString().replace(/\n/, ""); 
//     // variable = variable.replace(/\r/, ""); 
//     console.log(variable.toString().toUpperCase())
// });

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});