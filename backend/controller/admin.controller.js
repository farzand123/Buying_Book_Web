const {
  loginAdmin,
  getAllAdmins,
  createAdmin,
  deleteAdmin,
} = require("../service/admin.service");

exports.createAdmin = async (req, res) => {
  const { email, password, username } = req.body;
  const result = await createAdmin(email, password, username);
  res.json({ result });
};

exports.getAllAdmins = async (req, res) => {
  const result = await getAllAdmins();
  res.json({ result });
};

exports.loginAdmin = async (req, res) => {
  const { password, email } = req.body;
  const result = await loginAdmin(email, password);
  res.json(result);
};

exports.deleteAdmin = async (req, res) => {
  const result = await deleteAdmin();
  res.json({ result });
};
