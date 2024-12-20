const user = {
    username: "purva",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} ,${this.price} ,welcome to website`);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//function chai(){
   // let username = "purva"
    //console.log(this.username);
//}
//chai()

//const addTwo = (num1, num2) => {
  //  return num1 +num2
//}

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username: "purva"})
console.log(addTwo(3, 4));