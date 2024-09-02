// //Synchronous programming
// console.log("One")
// console.log("Two")
// console.log("Three")

// function Hello(){
//     console.log("Hello");
// }
// console.log("One")
// // setTimeout(Hello,2000);
// setTimeout(() => {
//     console.log("Hello")
// }, 2000);
// console.log("Two")

//Callback
//Synchronous
// function sum(a,b){
//     console.log(a+b);
// }

// function calc(a,b,sumback){
//     sumback(a,b);
// }
// calc(1,2,sum)

//Asynchronous
// const hello = ()=>{
//     console.log("Hello")
// }

// // setTimeout(hello,2000)


// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("Data is ready",dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

