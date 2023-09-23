const { User } = require("../model/models");
const { sellBookById, getBooksByIds } = require("./book.service");

const getAllUser = async () => {
  const allUsers = await User.find();
  return allUsers;
};
const addPurchasedBook = async (userId, bookId, amount) => {
  const userFound = await User.findById(userId);
  if (userFound) {
    const bookFound = userFound.purchasedBooks.find((book) => book === bookId);
    if (!bookFound) userFound.purchasedBooks.push(bookId);
    userFound.save();
    const soldBook = await sellBookById(bookId, amount);
    return soldBook;
  }
};
const getPurchasedBooks = async (userId) => {
  const userFound = await User.findById(userId);
  if (userFound) {
    return await getBooksByIds(userFound.purchasedBooks);
    // return userFound.purchasedBooks;
  } else [];
};
const createUser = async (email, password, username) => {
  try {
    const userCreated = await User.create({
      email,
      password,
      username,
    });

    return userCreated;
  } catch (error) {
    console.log(error?.message);

    return false;
  }
};
const loginUser = async (username, password) => {
  console.log(username, password);
  try {
    const userFound = await User.findOne({ email: username });
    if (userFound) {
      const result = await userFound.comparePassword(password);
      if (result) {
        return {
          success: true,
          user: userFound,
        };
      } else
        return {
          success: false,
          message: "user name or password is incorrect",
        };
    } else
      return {
        success: false,
        message: "user name or password is incorrect",
      };
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const deleteUsers = async () => {
  try {
    const deletedUser = await User.deleteMany({});
    return deletedUser;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};
const deleteUser = async (username) => {
  try {
    const deletedUser = await User.deleteOne({ username });
    return deletedUser;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

module.exports = {
  getAllUser,
  getPurchasedBooks,
  createUser,
  loginUser,
  deleteUsers,
  deleteUser,
  addPurchasedBook,
};
