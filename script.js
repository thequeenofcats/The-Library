const libraryDiv = document.querySelector('.library');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readStatusInput = document.querySelector('#status');
const addButton = document.querySelector('.add-button');
const newBookButton = document.querySelector('.new-book');
const bookInput = document.querySelector('.input');
const readButton = document.querySelector('.status-button');
let myLibrary = [];
let showInputVar = 0;
let statusOfBook;
const title = titleInput.value;
const author = authorInput.value;
const pages = pagesInput.value;
const readStatus = readStatusInput.checked;

class Book {
	constructor(title, author, pages, readStatus) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;
	}
	

	
}

function addBookToTheLibrary() {
	createBook()
	const book = new Book(title, author, pages, readStatus)
	myLibrary.push(book);
	

	const remove = document.getElementsByClassName('delete-button')
	let i;
	for (let i = 0; i < remove.length; i++) {
	remove[i].onclick = function() {
		const buttonsDiv = this.parentElement;
		const bookDiv = buttonsDiv.parentElement;
		bookDiv.style.display = 'none';
	}}

	bookInput.style.display = 'none';
	showInputVar = 0;
	newBookButton.textContent = 'New Book';
}

function createBook() {
	const bookDiv = document.createElement('div');
	const titleElement = document.createElement('h3');
	const authorElement = document.createElement('h5');
	const pagesElement = document.createElement('h6');
	const buttonsDiv = document.createElement('div');
	const readStatusButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	const title = titleInput.value;
	const author = authorInput.value;
	const pages = pagesInput.value;
	
	buttonsDiv.classList.add('buttons');
	if (readStatusInput.checked === true) {
		readStatusButton.classList.add('read');
		readStatusButton.classList.add('status-button');
		readStatusButton.textContent = 'Read';
		statusOfBook = 1;
	} else if (readStatusInput.checked === false) {
		readStatusButton.classList.add('not-read');
		readStatusButton.classList.add('status-button');
		readStatusButton.textContent = 'Not read';
		statusOfBook = 0;
	}

	bookDiv.classList.add('book')
	deleteButton.innerText = 'Delete';
	deleteButton.classList.add('delete-button')
	deleteButton.classList.add('book-button')
	readStatusButton.classList.add('book-button')
	titleElement.textContent = title
	authorElement.textContent = author;
	pagesElement.textContent = pages + ' pages';

	buttonsDiv.appendChild(readStatusButton);
	buttonsDiv.appendChild(deleteButton);
	bookDiv.appendChild(titleElement);
	bookDiv.appendChild(authorElement);
	bookDiv.appendChild(pagesElement);
	bookDiv.appendChild(buttonsDiv);
	libraryDiv.appendChild(bookDiv);
	
	readStatusButton.addEventListener('click', function() {
		if (readStatusButton.classList.contains('read')) {
			readStatusButton.classList.remove('read')
			readStatusButton.classList.add('not-read')
			readStatusButton.innerText = 'Not read';
		} else {
			readStatusButton.classList.add('read')
			readStatusButton.classList.remove('not-read')
			readStatusButton.innerText = 'Read';
		}
	})

}

function showInput() {
	if (showInputVar === 0) {
		bookInput.style.display = 'flex';
		showInputVar = 1;
		newBookButton.textContent = 'Close';
	} else if (showInputVar === 1) {
		bookInput.style.display = 'none';
		showInputVar = 0;
		newBookButton.textContent = 'New Book';
	}
}





newBookButton.addEventListener('click', showInput)
addButton.addEventListener('click', addBookToTheLibrary)
