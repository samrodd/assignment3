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
        cell.setAttribute('onClick', 'changeCellColor(event)');
        numRows++;
        numCols++;
    }
    //handle case where a column has been added
    else{
        var row = tbl.insertRow();
        for(let i = 0; i < numCols; i++){
            cell = row.insertCell();
            cell.setAttribute('onClick', 'changeCellColor(event)');

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
         cell.setAttribute('onClick', 'changeCellColor(event)');
         numRows++;
         numCols++;
     }
 
     //handle all other cases
     else{
         for(let i = 0; i < rows.length; i++){
            var cell = rows[i].insertCell();
            cell.setAttribute('onClick', 'changeCellColor(event)');             
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
    if(numRows > 0){
        numRows--;
    }
    //set numCols to 0 when last row is removed
    if(numRows === 0){
        numCols = 0;
    }
}
//Remove a column
function removeC() {
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //use querySelectorAll to get all tr elements in grid
    const rows = tbl.querySelectorAll("tr");
    //set numRows to zero when numCols equals 0
    if(numCols === 0){
        numRows = 0;
        return;

    }
//handle case where numCols > 0
    else{
        //iterate through rows and delete last cell
        for(let i = 0; i < numRows; i++){
            var r = tbl.rows[i];
            r.deleteCell(0);
        }
        //decrement numCols
        numCols--;
        //if final column is deleted call clearAll
        if(numCols === 0){
            clearAll();
            return;
        }
    }

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    //get all td elements and store in variable elems
    var elems = document.getElementById("grid").getElementsByTagName("td");
    //iterate through all table cells and change background-color to colorSelected
    for(let i = 0; i < elems.length; i++){
        elems[i].style.backgroundColor = colorSelected;
    }

}

function clearAll(){
    //declare tbl variable and set it equal to grid element
    var tbl = document.getElementById("grid");
    //iterate through table deleting all child nodes
    while(tbl.hasChildNodes()){
        tbl.removeChild(tbl.firstChild);
    }
    //set numRows and numCols to 0
    numRows=0;
    numCols=0;
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

function changeCellColor(event){
    var target = event.target;
    target.style.backgroundColor =  colorSelected;
}

