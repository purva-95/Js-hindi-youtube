// objects literals
const mySym = symbol("key1")

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

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
