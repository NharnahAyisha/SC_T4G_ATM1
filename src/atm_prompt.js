//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THE FINITIAL BALANCE & SECURITY DATA
let pinNumber = "1234"; // The pin number for the ATM
let accountBalance = 10000; //  account balance

// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let userPin = prompt("Welcome to the Yisha Bank ATM. Please enter your 4-digit PIN number:");
console.log(typeof (userPin)); //string

// 3. VALIDATE / CHECK THE PIN NUMBER
if (userPin === pinNumber){
    let withdrawalAmount = prompt(`PIN ACCEPTED! Your current account balance is ${accountBalance}. How much would you like to withdraw?`);
    console.log(typeof (withdrawalAmount)); //string
    withdrawalAmount = Number(withdrawalAmount); //reassign withdrawalAmount to number
    console.log(typeof (withdrawalAmount)); //number
    if (accountBalance >= withdrawalAmount){
        let newAccountBalance = accountBalance - withdrawalAmount;
       
        receiptText.innerText = "TRANSACTION SUCCESSFUL!";
        receiptText.innerText = `Dispensing cash... You withdrew ${withdrawalAmount}. Your new account balance is ${newAccountBalance}.`;
    }else{
        receiptText.innerText = "INSUFFICIENT FUNDS";
        receiptText.innerText = `Insufficient funds. Your current account balance is ${accountBalance}. Please try again.`;
    }
} else{
    receiptTitle.innerText = "ACCESS DENIED";
    receiptText.innerText = "Invalid PIN. Account blocked for your security. Please contact your bank for assistance.";
}

    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    