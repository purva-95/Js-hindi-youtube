//const isUserloggedIn = true
//const temprature = 41

//if (temprature ===41){
 //   console.log("less than 50");
//} else {
  //  console.log("temprature is greater than 50 ");
//}
//console.log("excuted");

//const score = 200

//if (score > 100) {
    //let power = "fly"
    //console.log(`user power: ${power}`);
//}
//console.log(`user power: ${power}`);

//const balance = 1000

//if (balance < 500) {
  //  console.log("less than 500");
//} else if (balance < 750) {
  //  console.log("less than 750");
//} else if (balance < 900) {
  //  console.log("less than 900");
//} else {
  //  console.log("less than 1200");
//}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to by course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


