import axios from "axios";

export const URL = "http://localhost:3000";
export const getAllBooks = async () => {
  const result = await axios.get(`${URL}/getAllBooks`);
  return result.data;
};
export const getAllBooksByAuthor = async (author) => {
  const result = await axios.get(`${URL}/getAllBooksByAuthor/${author}`, {});
  return result.data;
};

export const deleteBook = async (id) => {
  const result = await axios.delete(`${URL}/book/${id}`);
  return result.data;
};
export const updateStock = async (id, amount) => {
  const result = await axios.patch(`${URL}/updateStock`, { id, amount });
  return result.data;
};

export const getBookById = async (id) => {
  const result = await axios.get(`${URL}/book/${id}`);
  return result.data;
};

export const purchaseBook = async (userId, bookId, amount) => {
  const result = await axios.post(`${URL}/purchase`, {
    userId,
    bookId,
    amount,
  });
  return result.data;
};

export const purchasedBook = async (userId) => {
  const result = await axios.get(`${URL}/purchased/${userId}`, {
    userId,
  });
  return result.data;
};

export const getAllAuthors = async () => {
  const result = await axios.get(`${URL}/getAllAuthors`);
  return result.data;
};
