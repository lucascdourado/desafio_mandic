const figlet = require('figlet');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu texto: ", answer => {
    console.log(figlet.textSync(answer, {
        font: 'JS Stick Letters',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
    rl.close();
});