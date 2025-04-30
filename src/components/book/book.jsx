//import './book.css';

export const Book = ({ author, title, description }) => {
  return (
    <div className="shelf">
      <h2>{author}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
