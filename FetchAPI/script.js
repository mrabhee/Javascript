const URL = "https://cat-fact.herokuapp.com/facts"
const Ftext = document.querySelector(".FactText");
let btn = document.querySelector(".btn")
let promise = fetch(URL)
console.log(promise)

const getCatFact = async  () => {
    console.log("Getting data")
    let Response = await fetch(URL);
    console.log(Response)
    let data = await Response.json();
    console.log(data[0].text)
    Ftext.innerText = data[0].text;
}
btn.addEventListener("click",getCatFact)