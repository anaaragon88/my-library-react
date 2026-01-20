const BookCard = ({ book }) => {
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
    </li>
  );
}

export default BookCard;