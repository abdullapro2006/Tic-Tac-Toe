const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");


const elements = [

    "","","","","","","","",""
]

let go = "circle";

function createBoard(){
    elements.forEach((element,index) =>{
        const cellElements = document.createElement('div');
        cellElements.classList.add('square');
        cellElements.id = index;
        cellElements.addEventListener('click',addGo)
        gameboard.append(cellElements);
    })
}
createBoard();


function addGo(e){
 const display = document.createElement('div');

 display.classList.add(go);
 e.target.append(display);

 go = go === "circle"? "cross" : "circle"
}