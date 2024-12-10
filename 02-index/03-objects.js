// objects literals
const mySym = Symbol("key1")

const JsUser = {
    name: "purva",
    "full name": "purva shinde",
    [mySym]: "mykey1",
    age: 30,
    location: "pune",
    email: "purva@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])


JsUser.email = "purva@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "purva1@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());