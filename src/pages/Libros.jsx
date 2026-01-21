import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getAllBooks } from "../services/BookServices";
import AddBook from "../components/AddBook";

const Libros= () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await getAllBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">
        Libros 📚
      </h1>
      <AddBook onBookCreated={fetchBooks}/>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-10">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
}

export default Libros;