const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

// Define the User model
const Login = sequelize.define("login", {
  cnic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create the Login table in the database (if it doesn't exist)
// Login.sync().then(() => {
//     console.log('Login table created');
// });

module.exports = Login;