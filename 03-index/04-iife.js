(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => { 
    console.log(`DB CONNECTED TWO ${name}`);
} )('purva')