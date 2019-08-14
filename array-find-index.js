var numbers = [0,1,2,3,4,5];
var firstIndex = numbers.findIndex(findFirstIndex);

function findFirstIndex(value,index,array){
    /*console.log(value);
    console.log(index);
    console.log(array);*/
    return value > 3;
}
console.log("index of first elem grather than 3 : " + firstIndex);