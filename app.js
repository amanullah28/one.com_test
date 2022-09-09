const express = require('express');
const cors = require('cors');
const app = express();

// using middleware
app.use(cors());
require('dotenv').config();
const User = require('./model/user');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);
let { sequelize } = require('./db');
const errorMiddleware = require('./middleware/error');
// console.log(['a', 'b', 'c'].join().split(','));
async function checkDB() {
  await sequelize.authenticate();
  // await sequelize.sync({ force: true });
  // await User.create({
  //   username: 'abc',
  //   password: 'abc',
  // });
}
checkDB();
app.use(errorMiddleware);
app.listen(8000, () => {
  console.log('Server has started!!');
});
