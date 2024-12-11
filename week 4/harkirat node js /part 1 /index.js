const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('count words in file ')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('Helps to tell the numbers of words present in file ')
  .argument('<file>', 'file to count')
  .action((file)=>  {
    fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
    console.log(err);
    } else {
    let words = 0;
    for (let i = 0; i<data.length; i++){
        if(data[i]===" "){
            words++;
        }   
    }
    console.log(`There are ${words +1} words in ${file}`);
    }
    });
    });

program.parse();