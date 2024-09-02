console.log("Functions : -");
//Container or Block of code it cann recall from anywhere in code 

//Basic Functions
console.log("Basic Function")
let n = 10;
function Func(){
    console.log(`value of n is ${n}`);    
}
Func();

//Parameterize Functions
console.log("Parameterize Function")
function Sum( a, b){
    let c = a + b;
    console.log(`Sum of a and b is ${c}`) 
}
Sum(10,20);

//Arrow Functiom
console.log("Arrow Function");
let Hello = (msz) =>{
    console.log(msz);
}
Hello("Abhi");
let mul = (a,b) =>{
    return a*b
}
console.log(mul(10,20));

//Single line

let printabhi = () => (console.log("Abhishek"));
printabhi();


///METHODS
console.log("Methods : -");
//For Each loop
// We can passs function as parameter in js
//This is a type of higher oder functions
 names = ["Abhi", "Yash" ,"Priya" , "Ankit"];
 names.forEach(element => {
    console.log(element);
 });

let num =  [1,2,3,4,5];

num.map((val) =>{
    console.log(val);
})

let x = num.filter((val) =>{
    return val%2==0;
})
console.log(x);