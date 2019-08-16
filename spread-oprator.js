/* **spread** array into variables */
var person1 = ['ali','akherati','30'];
var [FirstName,LastName,Age] = person1;
console.log(FirstName,LastName,Age);
//----------------------------------------------
var person2 = {
    firstname : "Abolfazl",
    lastname : "sabagh",
    age : 26,
    equipment : "gnutec.net"
};
/* **spread** object into variables with object keys */
var {equipment,lastname,firstname,age} = person2;
console.log(firstname,lastname,age,equipment);
