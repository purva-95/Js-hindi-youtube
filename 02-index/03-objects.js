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
    //console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    //console.log(`Hello JS user, ${this.name}`);
}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());


//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "purva",
            lastname: "shinde"
        }

    }
}

//console.log(regularUser.fullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({} ,obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users =[
   
    {
        id: 1,
        email: "h@gmail.com" 
     }, 
     {
        id: 1,
        email: "h@gmail.com" 
     }, 
     {
        id: 1,
        email: "h@gmail.com" 
     },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));