let base_url = "https://raw.githubusercontent.com/TheArmagan/currency/main/api";


const dropdowns = document.querySelectorAll(".dps select")
const btn = document.querySelector(".btn")
let from = document.querySelector(".dropdown1 select")
let to = document.querySelector(".dropdown2 select")
let result = document.querySelector(".msz")

for(let select of dropdowns){
    for(code in countryList){
        let option =  document.createElement("option");
        option.innerText = code;
        option.value = code;
        if(select.name === "From" && code === "USD"){
            option.selected = "Selected";
        }else if(select.name === "To" && code === "INR"){
            option.selected = "Selected";
        }
        select.append(option)
    }
}


btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".container input");
    amVal = amount.value
    if(amVal<1 || amVal===""){
        amVal = 1;
        amount.value = "1"
    }
    
    const url = `${base_url}/${from.value}-to-${to.value}.json`
    let response = await fetch(url);
    let status = response.ok;
    if(status){
    let data = await response.json()
    let rate = data.value
    let final_amount = amVal * rate
    result.innerText = `${amVal}${from.value} is equal to ${final_amount}${to.value}`
    }
    else{
        result.innerText = "Sorry"
    }
    
})