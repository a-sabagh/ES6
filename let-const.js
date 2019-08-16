var x = 10;
{
    let x = 5;
    var y = 12;
    const x2 = "constant value is like let localization";
    console.log("let x = " + x);
}
console.log("var x = " + x);
console.log("var y = " + y);

/** this example for fun */
function counter(x){
    for(let i=1;i<x;i++){
      setTimeout(function() {
          console.log(i);
      }, 1000);  
    }
}
counter(10);