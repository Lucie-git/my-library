//import './book.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

export const Book = ({ id, author, title, description, isDetailPage }) => {
  return (
    <div className="shelf">
      <h2>{author}</h2>
      {isDetailPage ? (
        <h3>{title}</h3>
      ) : (
        <a href={`bookPage.html?id=${id}`}>
          <h3>{title}</h3>
        </a>
      )}
      <p>{description}</p>
      <button className="edit-book" data-id={`${id}`}>
        Upravit
      </button>
      <button className="delete-book" data-id={`${id}`}>
        Smazat
      </button>
    </div>
  );
};
