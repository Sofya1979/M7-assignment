let count = 0;
function updateCountDisplay() {
    document.getElementById('empCount').textContent = count;
}
document.getElementById('addForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the form from submitting by default
const ID = document.getElementById('ID').value;
const name = document.getElementById('name').value;
const extension = document.getElementById('extension').value;
const email = document.getElementById('email').value;
const department = document.getElementById('department').value;

//Create a new table row
const tableBody = document.getElementById('employees').getElementsByTagName('tbody')[0];
let row = tableBody.insertRow(); // Using insertRow to add a new row

// Add cells to a new row
let cellID = row.insertCell(0);
let cellname = row.insertCell(1);
let cellextension = row.insertCell(2);
let cellemail = row.insertCell(3);
let celldepartment = row.insertCell(4);
let actionsCell = row.insertCell(5);
// Incrementing the Counter
        count++;
        updateCountDisplay();

// Filling the cells with data
cellID.textContent = ID;
cellname.textContent = name;
cellextension.textContent = extension;
cellemail.textContent = email;
celldepartment.textContent = department;

// Create a delete button
const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';  

// Set the background color to red and remove the border
deleteButton.style.backgroundColor = 'red';
deleteButton.style.border = 'none'; 
// To make the text more visible, we can add white text color
deleteButton.style.color = 'white';

deleteButton.onclick = function() {
    
    row.remove(); // Delete the entire line
//Decrementing the counter
    count--;
    updateCountDisplay();  
};
actionsCell.appendChild(deleteButton);

// Cleaning the form
document.getElementById('addForm').reset();
});