import { render } from '@czechitas/render';
import '../global.css';
import { Book } from '../components/book/book';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/books/${id}`);
const data = await response.json();
const myData = data.data;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Knihovna</h1>
    </header>
    <main>
      <Book
        key={myData.id}
        id={myData.id}
        author={myData.author}
        title={myData.title}
        description={myData.description}
        isDetailPage={true}
      />
    </main>
    <footer>
      <p>@Lucie</p>
    </footer>
  </div>,
);
