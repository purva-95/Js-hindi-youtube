//function addTwoNumbers(number1,number2){
   // console.log(number1 +number2);
//}

//addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
//console.log("Result:", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("purva"))

function loginUserMessage(username ="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("purva"))