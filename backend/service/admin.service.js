const { AdminSchema } = require("../model/models");

const getAllAdmins = async () => {
  const allAdmins = await AdminSchema.find();
  return allAdmins;
};

const createAdmin = async (email, password, username) => {
  try {
    const adminCreated = await AdminSchema.create({
      email,
      password,
      username,
    });
    return adminCreated;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const loginAdmin = async (email, password) => {
  try {
    const adminFound = await AdminSchema.findOne({ email });
    if (adminFound) {
      const result = await adminFound.comparePassword(password);
      if (result) {
        return {
          success: true,
          user: adminFound,
        };
      } else
        return {
          success: false,
          message: "user name or password is incorrect",
        };
      // return adminFound
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

const deleteAdmin = async () => {
  try {
    const deletedAdmin = await AdminSchema.deleteMany({});
    return deletedAdmin;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};
module.exports = {
  loginAdmin,
  getAllAdmins,
  createAdmin,
  deleteAdmin,
};
