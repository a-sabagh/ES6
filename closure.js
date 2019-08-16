function sum(a){
    return function(b){
        return a+b;
    }
}

var adder2 = sum(2);
var result = adder2(5);
var result = sum(2)(6);
console.log(result);