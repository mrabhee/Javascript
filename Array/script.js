console.log("Arrays");
//Array is collection of data stores in linear position on memory 
//Array is a object typeof data type
//Array is mutable
let marks = [1,2,3,4,];
let names = ["Abhishek","Priyanshu","Ankit","Yash"];
let data = ["Abhishek","Priyanshu","Ankit","Yash",1,2,3,4];
console.log(marks); 
console.log(names); 
console.log(data); 
console.log("marks at 0",marks[0]); 
console.log("Length of marks",marks.length); 
for(let i=0; i<marks.length; i++){
    console.log(`marks ${i} = ${marks[i]}`);
}


//Array methods
let arr = [1,2,3,4,5];
arr.push(10);
arr.pop();
let str = arr.toString();
console.log(arr);
console.log(str);
console.log(typeof(arr));
console.log(typeof(str));
let arr2 = [29,35,5,3,2];
let arrc = arr.concat(arr2);
console.log(arrc);
arrc.unshift(4);
arrc.shift(4);
console.log(arrc);