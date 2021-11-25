const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let answer = num1 + num2;

r1.question('Guess the number! \n', (answer) => {
    console.log(`Your answer is: ${answer}`);
    if (answer === 'hello') {
        r1.close();
    } else {
        r1.setPrompt('Try again');
        r1.prompt();
        r1.on('line', (userInput) => {
            if (userInput === 'hello') {
                r1.close();
            } else {
                r1.setPrompt('Try again');
                r1.prompt();
            }
        });
    }
});

r1.on('close', () => {
    console.log('Closing the application');
});
