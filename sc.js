createGrid(16);
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click" , ()=>{
    createGrid(prompt("enter the size you ( 5 ) => ( 5 x 5)"))
});
function createCell(){
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    return cellDiv;
}
function createRow(n){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for(let i = 0;i<n;i++){
        rowDiv.append(createCell());
    }
    return rowDiv;
}
function createGrid(n){
    document.getElementById("container").innerHTML = "";
    const container = document.getElementById("container");
    for(let i = 0;i<n;i++){
        container.append(createRow(n));
    }
    const cells = document.getElementsByClassName("cell");
    const cellsArr = Array.from(cells);
    cellsArr.forEach(key => key.addEventListener("mouseover" , () =>key.style.backgroundColor = 'green' ));
}