const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide the title"],
  },
  author: {
    type: String,
    required: [true, "please provide the author"],
  },
  publicationYear: {
    type: Number,
    required: [true, "please provide the publication year"],
  },
  price: {
    type: Number,
  },
  genres: {
    type: [String],
    required: [true, "please provide the genres"],
  },
  IBAN: {
    type: Number,
    unique: [true, "IBAN already taken "],
    required: [true, "please provide the IBAN"],
  },
  available: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const BookSchema = mongoose.model("Book", bookSchema);

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
    unique: [true, "username is already taken"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 4;
      },
      message: "Password must be 4 characters long.",
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  contactNumber: {
    type: String,
    // required: true,
  },
});
adminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const AdminSchema = mongoose.model("Admin", adminSchema);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
    unique: [true, "username is already taken"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 4;
      },
      message: "Password must be 4 characters long.",
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  contactNumber: {
    type: String,
    // required: true,
  },
  purchasedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
  AdminSchema,
  BookSchema,
};
