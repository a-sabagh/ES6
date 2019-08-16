/* iif = immediately invoke function */
(function(text){
    console.log(text);
})("Hello World");

/* this example is for fun */
(function(counter){
    for(var i=1;i<counter;i++){
        (function(b){
            setTimeout(function() {
                console.log(b);
            }, 1000*i);
        })(i);
    }
})(10);