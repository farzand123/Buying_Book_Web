const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/connection");
dotenv.config({ path: "./config/config.env" });

connectDatabase();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
