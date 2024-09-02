
//Promises
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data is ready");
//             // resolve("Success")
//             reject("Netwrok Error")
//         })
//     })
// }
// getPromise().then((data)=>{
//     console.log("Succesfull",data);
// })
// getPromise.catch((err)=>{
//     console.log("Failed",err)
// })


function getData(dataID,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data is ready",dataID);
            resolve("success")
            if(getNextData){
                getNextData();
            }
        },2000)
    })
}

// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })
// getData(1).then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     console.log("success")
// })



// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1")
//             resolve("Success");
//         }, 4000)
//     })
// }
// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2")
//             resolve("Success");
//         }, 4000)
//     })
// }
// console.log("Fetching data 1")
// let P1 = asyncfunc1();
// P1.then((res) => {
//     console.log(res)
//     console.log("Fetching data 2")
//     let P2 = asyncfunc2();
//     P2.then((res) => {
//         console.log(res)
//     })
// })

