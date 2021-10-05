let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //handle case where no columns have been added
    if(numCols === 0){
        var row = tbl.insertRow();
        var cell = row.insertCell();
        numRows++;
    }
    //handle case where a column has been added
    if(numCols>0){
        var row = tbl.insertRow();
        for(let i = 0; i <= numCols; i++){
            row.insertCell();
        }
        numRows++;
        
    }

}
//Add a column
function addC() {
    var tbl = document.getElementById("grid");
    const rows = tbl.querySelectorAll("tr");

    if(numRows === 0){
        var row = tbl.insertRow();
        var cell = row.insertCell();
        numRows++;
    }
    else{
        for(let i = 0; i < rows.length; i++){
            rows[i].insertCell();
        }
        numCols++;

    }

}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
