function insert_Row() {
    // Get the table by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells in the new row
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);

    // Set the text content for the new cells
    newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
}

