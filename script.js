/*
Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

*/

const bill = 275;
const tip = bill * (15/100);
const total = bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
is ${bill + tip}`) : console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + (bill * (20/100))}`);

// MY SOLUTION IS ABOVE. IT IS SOLVED, BUT COULD HAVE BEEN WRITTEN LIKE THIS:

//const bill = 275;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
