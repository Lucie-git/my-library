export const AddBookForm = () => {
  return (
    <form id="registration">
      <h3>Přidat knihu</h3>
      <label className="field">
        Autor: <input type="text" id="author" />
      </label>
      <label className="field">
        Název: <input type="text" id="title" />
      </label>
      <label className="field">
        Popis: <input type="text" id="description" />
      </label>
      <div className="controls">
        <button type="submit">Odeslat</button>
      </div>
    </form>
  );
};
