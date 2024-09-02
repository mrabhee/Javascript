console.log("Object-Oriented Programming");
 
//Prototypes
const student = {
    name : "Abhishek" ,
    marks : 95,
    printMarks : function(){
        console.log(this.name);
        console.log(this.marks);
    }
}
student.printMarks();
student.toString();



//Create prototype

const employee = {
    calcTax(){
        console.log("Tax is returned")
    }
}

const karan = {
    salary : 35000
}

karan.__proto__ = employee;


//Classes
class Cars {
    Start(){
        console.log("Starting");
    }
    Stop(){
        console.log("Stop");
    }
    setName(name){
        this.name = name;
        
    }
    getName(){
        console.log(this.name);
    }
}

let Alto = new Cars();


//Constructor
class Myclass  {
    constructor(brand){
        console.log(brand);
    }
}

let obj1 = new Myclass("Cars");


//Inheritance

class Parent{
    constructor(){
        console.log("This is Parent Constructor");
    }
    PrintName(){
        console.log("This is Parent class")
    }
    Hello(){
        console.log("Hello");
    }
}

class Child extends Parent{
    constructor(){
        super();
        super.Hello();
        console.log("This is Child Constructor");
    }
    //Method Overriding
    PrintName(){
        console.log("This is Child ")
    }
    Bye(){
        console.log("Bye");
    }
}

class Child2 extends Parent{
    
}

let obj = new Child();
obj.PrintName();
obj.Hello();
obj.Bye();




//Exception Handling
a = 1;
console.log(a++)
console.log(a++)
console.log(a++)
console.log(a++)
console.log(a++)
try{
    console.log(b);
}catch(err){
    console.log(err)
}
console.log(a++)
console.log(a++)
console.log(a++)