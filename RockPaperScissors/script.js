
const msz = document.querySelector(".msz");

const generateChoise = () =>{
    const options = ["rock","paper","scissor"]
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const draw = () =>{
    msz.innerText = "Draw Play Again!"
    msz.style.color = "black";
}
const showWinner = (user_win ,user_choise, pc_choise) =>{
    if(user_win){
        msz.innerText = `You Win!, Your ${user_choise} beats Computer ${pc_choise}`;
        msz.style.color = "green";
    }
    else{
        msz.innerText = `You Lost!, Computer ${pc_choise} beats Your ${user_choise}`;
        msz.style.color = "red";
    }
}

const playgame = (user_choise) =>{
    
    const pc_choise = generateChoise();

    if(user_choise === pc_choise){
        draw();
    }
    else{
        let user_win = true;
        if(user_choise === "rock"){
            user_win = pc_choise === "paper" ? false : true;
        }
        else if(user_choise === "paper"){
            user_win = pc_choise === "scissor" ? false : true;  
        }else{
            user_win = pc_choise === "rock" ? false : true;
        }
        showWinner(user_win ,user_choise, pc_choise);
    }
}

let choise = document.querySelectorAll(".choise");
choise.forEach((choise) => {
    console.log(choise)
    choise.addEventListener("click",()=>{
        const user_choise = choise.getAttribute("id");
        playgame(user_choise);
    })
})
