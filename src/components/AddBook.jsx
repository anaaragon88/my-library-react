import { useState } from "react"; 
import { createBook } from "../services/BookServices";

const AddBook = ({ onBookCreated }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newBook = {
    title,
    author,
    year,
  };

  await createBook(newBook);
  onBookCreated();

  setTitle("");
  setAuthor("");
  setYear("");
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg border">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Añadir libro
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
          Guardar libro
        </button>
      </form>
    </div>
  );
};

export default AddBook;