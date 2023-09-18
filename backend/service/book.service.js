const { BookSchema } = require("../model/models");

const getBookById = async (id) => {
  const book = await BookSchema.findById(id);
  return book;
};

const updateBookDetailsById = async ({
  id,
  title,
  price,
  author,
  publicationYear,
  genres,
  IBAN,
}) => {
  const book = await BookSchema.findById(id);
  if (book) {
    book.title = title;
    book.price = price;
    book.author = author;
    book.genres = genres;
    book.IBAN = IBAN;
    book.publicationYear = publicationYear;
    await book.save();
    return { success: true, message: "Book updated" };
  } else return { success: true, message: "Book not found" };
};

const getAllBooks = async () => {
  const allBooks = await BookSchema.find();
  return allBooks;
};

const getAllBooksByAuthor = async (author) => {
  console.log(author, "author");
  const booksByAuthor = await BookSchema.find({ author });
  console.log(booksByAuthor, "book by author");
  return booksByAuthor;
};

const getAllAuthors = async () => {
  const authors = await BookSchema.distinct("author");
  return authors;
};

const getAllBooksByPrice = async (price) => {
  const booksByPrice = await BookSchema.find({ price: { $lte: price } });
  return booksByPrice;
};

const createBook = async (
  title,
  price,
  author,
  publicationYear,
  genres,
  IBAN
) => {
  try {
    const bookCreated = await BookSchema.create({
      title,
      price,
      author,
      publicationYear,
      genres,
      IBAN,
    });
    return bookCreated;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const deleteBooks = async () => {
  try {
    const deleteBook = await BookSchema.deleteMany({});
    return deleteBook;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const deleteBooksInBatch = async (ids) => {
  try {
    ids.map(async (id) => {
      const deleteBook = await BookSchema.findByIdAndDelete(item);
      return deleteBook;
    });
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const deleteBookById = async (id) => {
  try {
    const deleteBook = await BookSchema.findByIdAndDelete(id);
    return deleteBook;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};
const getBooksByIds = async (ids) => {
  const books = BookSchema.find({
    _id: {
      $in: ids,
    },
  });
  return books;
};
const sellBookById = async (id, amount) => {
  try {
    const foundBook = await BookSchema.findById(id);
    if (foundBook) {
      if (foundBook.available - amount >= 0) foundBook.available -= amount;
      foundBook.save();
    }

    return foundBook;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const updateStockById = async (id, amount) => {
  try {
    const updatedBook = await BookSchema.findByIdAndUpdate(id, {
      $set: { available: amount },
    });
    return updatedBook;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const deleteBook = async (IBAN) => {
  try {
    const deleteBook = await BookSchema.deleteOne({ IBAN });
    return deleteBook;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

module.exports = {
  getAllBooks,
  deleteBooksInBatch,
  createBook,
  deleteBook,
  getBookById,
  deleteBooks,
  getAllBooksByAuthor,
  getAllBooksByPrice,
  deleteBookById,
  updateBookDetailsById,
  updateStockById,
  getBooksByIds,
  sellBookById,
  getAllAuthors,
};
