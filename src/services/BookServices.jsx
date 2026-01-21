import axios from "axios";

const API_URL = "http://localhost:3000/books";
//MÉTODO GET
export const getAllBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//MÉTODO POST
export const createBook = async (newBook) => {
  const response = await axios.post(API_URL, newBook);
  return response.data;
};