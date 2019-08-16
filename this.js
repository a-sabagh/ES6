/* --------- extend objects ----------- */
console.log(this);
var ali = {
    name: "Ali",
    getName: function(){
        console.log(this.name);
    },
    sayHello: function(hello){
        console.log(hello + this.name);
    }
}
ali.getName();
var sahar = {...ali,name: "sahar"}
sahar.getName();
/* ------------ call ------------- */
var javad = {name: "javad"}
ali.getName.call(javad);
/* -------apply---------- */
ali.sayHello.call(javad,"hello ");