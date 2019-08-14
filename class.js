class Car {
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
    printInfo(){
        console.log("car name is : " + this.name);
        console.log("engin power is: " + this.engine);
    }
}

var tiba = new Car("tiba",1500);
tiba.printInfo();