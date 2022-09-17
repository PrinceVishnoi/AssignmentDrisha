
var rIndex = document.getElementById("rIndex");
var table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("sname").value,
        age = document.getElementById("lname").value;

    if (fname === "") {
        alert("First Input Connot Be Empty");
        isEmpty = true;
    }
    else if (lname === "") {
        alert("Second Input Connot Be Empty");
        isEmpty = true;
    }
    else if (age === "") {
        alert("Last Input cannot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("sname").value,
            age = document.getElementById("lname").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("sname").value = this.cells[1].innerHTML;
            document.getElementById("lname").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();


function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("lname").value = "";
}
// coloumn one sum 
var table = document.getElementById("table"), sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
}

document.getElementById("val").innerHTML = sumVal;
console.log(sumVal);


// coloumn two sum 
var table = document.getElementById("table"), sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
}

document.getElementById("val2").innerHTML =  + sumVal;
console.log(sumVal);            

// coloumn three sum 
var table = document.getElementById("table"), sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[0].innerHTML);
}

document.getElementById("val3").innerHTML =  + sumVal;
console.log(sumVal);





