// let btn =  document.querySelector("#btn");

// btn.click = () =>{
//     console.log("Hello")
// }
// let box2 =  document.querySelector(".box2");
// function btnclick(){
//     box2.classList.add("box2inner");

// }
// btn.onclick = () =>{
//     btnclick();
// }
// btn.onclick = (e) =>{    
//     console.log(e);
// }



// let btn = document.querySelector("#btn");
// btn.addEventListener("click",(e)=>{
//     btn.classList.add("btn")
// });

// let btn2 = document.querySelector("#btn2");
// // btn2.addEventListener("click", (e)=>{
// //     btn.classList.remove("btn")
// // })

// const func = () =>{
//     console.log("This is Func")
//     btn.classList.add("btn")
// }

// btn.addEventListener("click",func)
// btn2.removeEventListener("click",func)

let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let mode = "light";
let func = () =>{
    if (mode === "light"){
        mode = "dark";
        body.classList.add("bodydark")
    }
    else{
        mode = "light"
        body.classList.remove("bodydark")
    }
    console.log(mode);
}
btn.addEventListener("click",func);

