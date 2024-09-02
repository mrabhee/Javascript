let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btn");
let newGame = document.querySelector(".ngame");
let container = document.querySelector(".container")
let h1 = document.querySelector(".text");
let turnO = true;
let turnX = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame() {
    turnO = true;
    EnableButton();
    reset.classList.remove("hide")
}

function ButtonDisabled() {
    for (let box of boxes) {
        box.classList.add("closed")
    }
}
function EnableButton() {
    for (let box of boxes) {
        box.classList.remove("closed")
        box.innerText = ""
        h1.classList.remove("show");
        newGame.classList.remove("show");
        container.classList.remove("hide")

    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false
        }
        else {
            box.innerText = "O";
            turnO = true;
        }
        box.classList.add("closed");
        checkWinner();

    });
})
const Winner = (win) => {

    if (win === "X") {

        h1.innerText = "Winner is X";
        h1.classList.add("show");
        newGame.classList.add("show");
        container.classList.add("hide")
        reset.classList.add("hide")
        
    }
    else {
        
        reset.classList.add("hide")
        h1.innerText = "Winner is O";
        h1.classList.add("show");
        newGame.classList.add("show");
        container.classList.add("hide")

    }
    ButtonDisabled();
}
const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" || pos2 != "" || pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log(`Winner is ${pos1}`);
                Winner(pos1);
            }
        }
    }

}

reset.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)
