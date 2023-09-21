const express = require("express");
const {
  getAllBooks,
  createBook,
  deleteBooks,
  deleteBook,
  getAllBooksByPrice,
  getAllBooksByAuthor,
  getBook,
  updateBookDetails,
  deleteBookById,
  updateStock,
  getAllAuthors,
} = require("../controller/book.controller");
const router = express.Router();

router.post("/createBook", createBook);
router.get("/getAllBooks", getAllBooks);

router.get("/getAllAuthors", getAllAuthors);

router.get("/book/:id", getBook);
router.delete("/book/:id", deleteBookById);

router.patch("/book", updateBookDetails);
router.patch("/updateStock", updateStock);

router.delete("/deleteBooks", deleteBooks);
router.delete("/deleteBook", deleteBook);
router.get("/getAllBooksByAuthor/:author", getAllBooksByAuthor);
router.get("/getAllBooksByPrice", getAllBooksByPrice);
module.exports = router;
