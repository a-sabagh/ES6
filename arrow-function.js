/* arrow function VS closure */
var xClosure = function(x,y){
    console.log(x*y);
}

var xArrow = (x,y) => console.log(x*y);
xArrow(10,12);

/* using arrow function As closure */
function SlowHello(){
    setTimeout(() => {
        console.log("Hello world");
    }, 1000);
}
SlowHello();