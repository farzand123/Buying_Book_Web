const {
  getAllUser,
  createUser,
  loginUser,
  deleteUsers,
  deleteUser,
  addPurchasedBook,
  getPurchasedBooks,
} = require("../service/user.service");

exports.createUser = async (req, res) => {
  const { email, password, username } = req.body;

  const result = await createUser(email, password, username);

  res.json({ result });
};

exports.myOwnedBooks = async (req, res) => {
  const { userId } = req.params;
  const result = await getPurchasedBooks(userId);
  res.json({ result });
};

exports.purchaseBook = async (req, res) => {
  const { userId, bookId, amount } = req.body;

  const result = await addPurchasedBook(userId, bookId, amount);

  res.json({ result });
};

exports.getAllUser = async (req, res) => {
  const result = await getAllUser();
  res.json({ result });
};
exports.loginUser = async (req, res) => {
  const { password, email } = req.body;
  const result = await loginUser(email, password);
  res.json(result);
};

exports.deleteUsers = async (req, res) => {
  const result = await deleteUsers();
  res.json({ result });
};
exports.deleteUser = async (req, res) => {
  const { username } = req.body;

  const result = await deleteUser(username);
  res.json({ result });
};
