#! /usr/bin/env node
import inquirer from "inquirer";
import clear from "clear";
import chalk from "chalk";
let myBalace = 10000;
let myPin = 1234;
clear();
console.log(chalk.blue.bold.italic("\n \t<----------------WELCOME-------------->\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.magenta("      Enter your Pin Code : "),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bold.green("\n \t Login Successfully\n"));
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: chalk.magenta("      What you want to do ?\n"),
            choices: ["Withdrawl", "Check balance", "Deposit"],
        },
    ]);
    if (actionAns.action === "Withdrawl") {
        let WithdrawlAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.magenta("       Enter the amount which you want to Withdraw :"),
            },
        ]);
        if (WithdrawlAns.amount > myBalace) {
            console.log(chalk.bold.italic.red("\n \t Your Balance is insufficient!\n"));
            console.log(chalk.bold.italic.yellow("\n You have only " + myBalace + "\n"));
        }
        else {
            myBalace -= WithdrawlAns.amount;
            console.log(chalk.bold.italic.yellow("\nYou are withdraw amount = " + WithdrawlAns.amount + "\n"));
            console.log(chalk.bold.italic.yellow("Your remaining balance is : " + myBalace + "\n"));
        }
    }
    else if (actionAns.action === "Deposit") {
        let DepositAns = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: chalk.magenta("      Enter the amount which you want to deposite here."),
            },
        ]);
        myBalace += DepositAns.deposit;
        console.log(chalk.bold.italic.yellow("\nYou are deposited amount = " + DepositAns.deposit + "\n"));
        console.log(chalk.bold.italic.yellow("\nYour remaining balance is : " + myBalace + "\n"));
    }
    else if (actionAns.action === "Check balance") {
        console.log(chalk.bold.italic.yellow("Your Balance is :" + myBalace + "\n"));
    }
}
else {
    console.log(chalk.bold.italic.red("\n \t Inorrect Pin Code!!! Try again\n"));
}
