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
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //use querySelectorAll to get all tr elements in grid
    const rows = tbl.querySelectorAll("tr");

    //handle case where numRows === 0
    if(numRows === 0){
        var row = tbl.insertRow();
        var cell = row.insertCell();
        numRows++;
    }

    //handle all other cases
    else{
        for(let i = 0; i < rows.length; i++){
            rows[i].insertCell();
        }
        numCols++; 

    }

}

//Remove a row
function removeR() {
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //delete last row
    tbl.deleteRow(numRows-1);
    //decrement numRows
    numRows--;
    //set numCols to 0 when last row is removed
    if(numRows === 0){
        numCols = 0;
    }
}
//Remove a column
function removeC() {
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //tbl

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
