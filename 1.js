document.addEventListener('DOMContentLoaded', () => {
    const myLibrary = [];
  
    function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.info = function () {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
      };
    }
  
    function addBookToLibrary(title, author, pages, read) {
      const newBook = new Book(title, author, pages, read); // Create a new book object
      myLibrary.push(newBook); // Add it to the library array
      displayLibrary(); // Update library display
    }
  
    function displayLibrary() {
      const libraryContainer = document.getElementById('library-container');
      if (!libraryContainer) {
        console.error("Error: 'library-container' element is missing in the DOM.");
        return;
      }
      libraryContainer.textContent = ''; // Clear the library container
  
      myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
  
        const titleElement = document.createElement('p');
        titleElement.textContent = `Title: ${book.title}`;
        bookDiv.appendChild(titleElement);
  
        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(authorElement);
  
        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pagesElement);
  
        const readElement = document.createElement('p');
        readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookDiv.appendChild(readElement);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.dataset.index = index;
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
          removeBookFromLibrary(index);
        });
        bookDiv.appendChild(deleteBtn);
  
        libraryContainer.appendChild(bookDiv);
      });
    }
  
    function removeBookFromLibrary(index) {
      myLibrary.splice(index, 1);
      displayLibrary();
    }
  
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
  
    displayLibrary();
  
    document.getElementById('new-book-btn').addEventListener('click', () => {
      const formDialog = document.getElementById('new-book-dialog');
      formDialog.showModal();
    });
  
    document.getElementById('cancel-btn').addEventListener('click', () => {
      const formDialog = document.getElementById('new-book-dialog');
      formDialog.close();
    });
  
    document.getElementById('new-book-form').addEventListener('submit', (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const read = document.getElementById('read-status').value === 'yes';
  
      addBookToLibrary(title, author, pages, read);
  
      document.getElementById('new-book-form').reset();
      document.getElementById('new-book-dialog').close();
    });
  });
  