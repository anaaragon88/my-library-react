const BookCard = ({ book, onDelete, onEdit }) => {
  return (
    <li className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">
        {book.title}
      </h2>
      <p className="text-gray-700">
        {book.author}
      </p>
      <p className="text-sm text-gray-500">
        {book.year}
      </p>
      <button
        onClick={() => onEdit(book)}
        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
      >
        Editar
      </button>
      <button
        onClick={() => onDelete(book.id)}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 mt-2"
      >
        Borrar
      </button>
    </li>
  );
}

export default BookCard;