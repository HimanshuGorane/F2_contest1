// Define an array to store the details of the issued books
const issuedBooks = [];

// Get references to the form and table elements
const bookForm = document.querySelector('#book-form');
const issuedBooksTable = document.querySelector('#issued-books-table tbody');

// Add an event listener to the form's submit button
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the values from the form
  const bookName = document.querySelector('#book-name-input').value;
  const issuedTo = document.querySelector('#issued-to-input').value;


  const issuedBook = {                           // Create a new issued book object and add it to the issuedBooks array
    id: issuedBooks.length + 1,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: new Date(),
    status: "not returned"
  };
  issuedBooks.push(issuedBook);


  const newRow = issuedBooksTable.insertRow();  // Update the table with the new row for the issued book
  newRow.innerHTML = `
    <td>${issuedBook.id}</td>
    <td>${issuedBook.book_name}</td>
    <td>${issuedBook.issued_to}</td>
    <td>${issuedBook.issued_time.toLocaleString()}</td>
    <td class="status">${issuedBook.status}</td>
  `;
});

// Add an event listener to the table to handle changes to the status column
issuedBooksTable.addEventListener('click', (event) => {
  if (event.target.classList.contains('status')) {
    const statusCell = event.target;
    const row = statusCell.parentElement;
    const id = Number(row.cells[0].textContent);
    const issuedBook = issuedBooks.find(book => book.id === id);
    issuedBook.status = issuedBook.status === "not returned" ? "returned" : "not returned";
    statusCell.textContent = issuedBook.status;
    statusCell.style.color = issuedBook.status === "returned" ? "green" : "red";
  }
});
