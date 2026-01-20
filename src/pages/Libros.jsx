import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Libros= () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">
        Libros 📚
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-10">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
}

export default Libros;