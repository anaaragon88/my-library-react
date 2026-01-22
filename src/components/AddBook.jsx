import { useState, useEffect } from "react";
import { createBook, updateBook } from "../services/BookServices";

const AddBook = ({ onBookCreated, bookEdit, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (bookEdit) {
      setTitle(bookEdit.title);
      setAuthor(bookEdit.author);
      setYear(bookEdit.year);
    }
  }, [bookEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      year,
    };

    if (bookEdit) {
      await updateBook(bookEdit.id, bookData);
    } else {
      await createBook(bookData);
    }

    if (onBookCreated) {
      onBookCreated();
    }

    if (onSubmit) {
      onSubmit();
    }

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg border">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {bookEdit ? "Editar libro" : "Añadir libro"}
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          className="border rounded-md px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Autor"
          className="border rounded-md px-3 py-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="number"
          placeholder="Año"
          className="border rounded-md px-3 py-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
        >
          {bookEdit ? "Guardar cambios" : "Guardar libro"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;