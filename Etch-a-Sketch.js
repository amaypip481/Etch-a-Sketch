let GRID_SIZE = 16
let GRIDWIDTH = 500;
let GRIDHEIGHT = 500;
const BORDERWIDTH = 0.4;


let addEventToButton = document.querySelector(".buttonDiv");
addEventToButton.addEventListener("click",chnageGridLayout);

function chnageGridLayout(e){
    let gridSizeNumber = parseInt(prompt("Please enter the new grid size (<101)"));
    while(isNaN(gridSizeNumber) || gridSizeNumber>100 || gridSizeNumber<=0) 
        gridSizeNumber = parseInt(prompt("Please enter a number between 0 & 101"));
    GRID_SIZE = gridSizeNumber;
    while(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
    designGrid(GRID_SIZE);
}


function changebackground(e){
    if(e.target.style.backgroundColor == "")
    {
    let redOfRGB = parseInt(Math.random()*255); 
    let greenOfRGB = parseInt(Math.random()*255); 
    let blueOfRGB = parseInt(Math.random()*255); 
    e.target.style.backgroundColor = `rgb(${redOfRGB},${greenOfRGB},${blueOfRGB})`;
    e.target.style.opacity = 0.1
    }
    else return;
}

function mouseOutEvent(e){
    let opacityVar = parseFloat(e.target.style.opacity);
    if (opacityVar == 1) return;
    opacityVar += 0.1;
    e.target.style.opacity = opacityVar;
}

let mainDiv = document.querySelector(".gridDiv");
designGrid(GRID_SIZE);
function designGrid(GRID_SIZE){
    for(i=0;i<GRID_SIZE*GRID_SIZE;i++)
    {
        let createDiv = document.createElement("div");
        createDiv.className = "elementDivs";
        setHeightWidth(createDiv);
        createDiv.addEventListener("mouseover",changebackground)
        createDiv.addEventListener("mouseout",mouseOutEvent)
        mainDiv.appendChild(createDiv);
    }
}

function setHeightWidth(createDiv){
    let widthString = (GRIDWIDTH - 2*GRID_SIZE*BORDERWIDTH)/GRID_SIZE ;
    createDiv.style.width = widthString + "px";
    let heightString = (GRIDHEIGHT- 2*GRID_SIZE*BORDERWIDTH)/GRID_SIZE ;
    createDiv.style.height = heightString + "px";
}
