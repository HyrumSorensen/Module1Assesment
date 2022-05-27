//Password Validation Program

// mini ascii art lol
console.log(`      *      
     ***     
      *      `);
      
console.log('Welcome to the password validator tool!');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter a password to validate. Keep in mind that an exclamation mark will be required in your password", function(input){
	const password = input;
    reader.close();

    if (password.length > 9 && password.includes('!')) {
        console.log('Success! Your password meets the criteria!');
    }
    else {
        console.log('Failure, please type a better password');
    }
});