require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/database.config");
const Product = require("./models/product.model");

connectDB();

const importData = async () => {
  try {
    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();