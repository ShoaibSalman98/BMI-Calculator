#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRedBright.bold.underline("\tCheck Your Weight Status Through BMI Calculation\n"));
let Data1 = await inquirer.prompt([{
        name: "weight",
        type: "number",
        message: chalk.yellow.underline("Enter your weight in Kilogrames")
    }]);
let Data2 = await inquirer.prompt([{
        name: "height",
        type: "number",
        message: chalk.blue.italic.underline("Enter your Height in Meters")
    }]);
// let BMI = Data1.weight(Data2.height**2); // Exponentiation methode.
let BMI = (Data1.weight / (Data2.height * Data2.height));
console.log(chalk.green.bold.italic("According to you current HEIGHT and WEIGHT your BMI is ="), BMI.toFixed(2));
if (BMI < 18.5) {
    console.log(chalk.red.bold("You are Under Weight"));
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(chalk.red.bold("Your Weight is Normal as per your BMI calculations"));
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log(chalk.red.bold("Your are Over Weight as per your BMI calculations"));
}
else {
    console.log(chalk.red.bold("Your are in obesty need to reduce your weight quickly"));
}
;
