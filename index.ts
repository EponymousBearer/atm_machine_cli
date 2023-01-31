import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    Amount: number,
    amount: number
}

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal"],
        message: "Select Your Transaction Type: ",
        when (answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "Amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your Amount: ",
        when (answers) {
            return answers.transactionType == "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount: ",
        when (answers) {
            return answers.transactionType == "Withdrawal"
        },
    }
])

if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random()*10000)
    console.log(balance)
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remainingbalance = balance - enteredAmount
        console.log("Your Remaining balance is ", remainingbalance) 
    } else {
        console.log("Insufficient Balance")
    }
}
    