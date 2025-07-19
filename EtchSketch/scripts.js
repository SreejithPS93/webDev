var container = document.querySelector(".container");
console.log("Hello");


let mouseDown = false;


document.addEventListener("mousedown",(event)=>{
    if(event.button == 0){

        mouseDown = true;
        console.log("mouseDown made true");
    }
})

document.addEventListener("mouseup",(event)=>{

    //mouseDown = false;
    //console.log("mouseDown made false");

    if(event.button == 0){

        mouseDown = false;
        console.log("mouseDown made false");
    }
})


for(let i = 0; i < 16 * 16; i++){
    var element = document.createElement("div");
    element.classList.add("element");
    //element.style.margin = 0;
    //element.style.backgroundColor= "blue";
    //element.textContent = "sampleDiv";

    element.addEventListener("mouseover", OnMouseOver);

    element.addEventListener("mousedown", (event) => {
        if (event.button === 0) {
            event.target.style.backgroundColor = "blue";
        }
    });

    container.appendChild(element);

    

}

function OnMouseOver(event){

    

    if(mouseDown){

        event.target.style.backgroundColor = "blue";
    }
}


//reset
var resetBut = document.querySelector("#reset");
resetBut.addEventListener("click",ResetGrid);


function ResetGrid(){

    var elements = document.querySelectorAll(".element");
    for(let i = 0; i < elements.length; i++){

        elements[i].style.backgroundColor = "";
    }
    console.log("Grid reset");
}

//change grid size

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
var inputs = document.querySelector("input");
var newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", CreateNewGrid);

function CreateNewGrid(){

    console.log(inputs.value);

    let newGridSize = inputs.value;

    let newGridValue = 640/newGridSize;

    removeAllChildNodes(container);

    for(let i = 0; i < newGridSize * newGridSize; i++){
        var element = document.createElement("div");
        element.classList.add("element");
        //element.style.margin = 0;
        //element.style.backgroundColor= "blue";
        //element.textContent = "sampleDiv";

        element.style.width = `${newGridValue}px`;
        element.style.height = `${newGridValue}px`;

        

        element.addEventListener("mouseover", OnMouseOver);

        element.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                event.target.style.backgroundColor = "blue";
            }
        });

        container.appendChild(element);

    

    }

    


}

