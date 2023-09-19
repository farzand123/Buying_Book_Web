const {
  createBook,
  getAllBooks,
  getAllBooksByAuthor,
  getAllBooksByPrice,
  deleteBook,
  deleteBooks,
  getBookById,
  updateBookDetailsById,
  deleteBookById,
  deleteBooksInBatch,
  updateStockById,
  getAllAuthors,
} = require("../service/book.service");

exports.createBook = async (req, res) => {
  const { title, price, author, publicationYear, genres, IBAN } = req.body;
  const result = await createBook(
    title,
    price,
    author,
    publicationYear,
    genres,
    IBAN
  );
  res.json({ result });
};

exports.getBook = async (req, res) => {
  const { id } = req.params;
  const result = await getBookById(id);
  res.json({ result });
};

exports.updateBookDetails = async (req, res) => {
  const { id, title, price, author, publicationYear, genres, IBAN } = req.body;
  const result = await updateBookDetailsById({
    id,
    title,
    price,
    author,
    publicationYear,
    genres,
    IBAN,
  });
  res.json({ result });
};

exports.getAllBooks = async (req, res) => {
  const result = await getAllBooks();
  res.json({ result });
};

exports.deleteBooks = async (req, res) => {
  const result = await deleteBooks();
  res.json({ result });
};

exports.deleteBooksWithArray = async (req, res) => {
  const ids = req.body;
  const result = await deleteBooksInBatch(ids);
  res.json({ result });
};

exports.deleteBook = async (req, res) => {
  const { IBAN } = req.body;
  const result = await deleteBook(IBAN);
  res.json({ result });
};

exports.deleteBookById = async (req, res) => {
  const { id } = req.params;
  console.log(id, "from front end");
  const result = await deleteBookById(id);
  res.json({ result });
};
exports.updateStock = async (req, res) => {
  const { id, amount } = req.body;
  console.log(id, "from front end");
  const result = await updateStockById(id, amount);
  res.json({ result });
};

exports.getAllBooksByAuthor = async (req, res) => {
  const { author } = req.params;

  const result = await getAllBooksByAuthor(author);
  res.json(result);
};

exports.getAllAuthors = async (req, res) => {
  const result = await getAllAuthors();
  res.json(result);
};

exports.getAllBooksByPrice = async (req, res) => {
  const { price } = req.body;

  const result = await getAllBooksByPrice(parseFloat(price));
  res.json({ result });
};
