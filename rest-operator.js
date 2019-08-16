var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = arr1.concat(arr2);
/* *concatinate* tow array with **rest operator** */
var arr3 = [...arr1,...arr2];
console.log(arr3);
//----------------------------------------------
var personInformation = {firstname: "Abolfazl",lastname: "Sabagh"};
var personDetail = {age: 26,equipment: "gnutec.net"};
var person = Object.assign(personInformation ,personDetail);
/* *assign* tow object into var object with **rest oprator** */
var person = {...personInformation,...personDetail};
console.log(person);
