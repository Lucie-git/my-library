import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Book } from '../components/book/book';
import { AddBookForm } from '../components/addBookForm/addBookForm';
import { Navigation } from '../components/navigation/navigation';

const response = await fetch('http://localhost:4000/api/books');
const data = await response.json();
const myData = data.data;

const books = myData.map((book) => {
  return (
    <Book
      key={book.id}
      id={book.id}
      author={book.author}
      title={book.title}
      description={book.description}
      isDetailPage={false}
    />
  );
});

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Knihovna</h1>
      <Navigation />
      <button className="addBook">Přidat knihu</button>
    </header>
    <main>
      <div className="add book form" style={{ display: 'none' }}>
        <AddBookForm />
      </div>
      <div className="books list">{books}</div>
    </main>
    <footer>
      <p>@Lucie</p>
    </footer>
  </div>,
);

const addBookButton = document.querySelector('.addBook');
const addBookFormDiv = document.querySelector('.add.book.form');
const bookListDiv = document.querySelector('.books.list');

addBookButton.addEventListener('click', () => {
  bookListDiv.style.display = 'none';
  addBookFormDiv.style.display = 'block';
});

const addBookFormElm = document.querySelector('#registration');
addBookFormElm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const authorInput = document.querySelector('#author');
  const author = authorInput.value;
  const titleInput = document.querySelector('#title');
  const title = titleInput.value;
  const descriptionInput = document.querySelector('#description');
  const description = descriptionInput.value;

  await fetch('http://localhost:4000/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      author: author,
      title: title,
      description: description,
    }),
  });
  window.location.reload();
});
