// async function Hello(){
//     console.log("Hello");
// }

// function API(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("API");
//             console.log("Success")
//         },2000)
//     })
// }

// async function getWeatherData(){
//     await API();
// }


// function getData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data is ready",dataID);
//             resolve("success"); 
//         },2000)
//     })
// }

// async function getDatafunction(){
//     for(let i=0; i<=5; i++){
//         console.log("Getting data",i);
//         await getData(i);
//     }
// }

//IIFE way to run function
// (async function (){
//     for(let i=0; i<=5; i++){
//         console.log("Getting data",i);
//         await getData(i);
//     }
// })();

