const mongoose = require("mongoose");
const dotenv = require('dotenv');
const connectDb = require('./config/db.js');
const products = require("./data/product.js");
const users = require("./data/user.js");
const Product = require("./models/productModel.js");
const User = require("./models/userModel.js");
const Category = require("./models/categoryModel.js");
const categories = require("./data/category.js");

dotenv.config();

connectDb();

const importData = async () => {
    try {
        await Category.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const createdCategories = await Category.insertMany(categories);

        // Get the first category's ID (or you can randomly assign categories)
        const categoryIds = createdCategories.map(category => category._id);

        const sampleProducts = products.map((product, index) => {
            return { ...product, category: categoryIds[index % categoryIds.length] };
        });

        await Product.insertMany(sampleProducts);
        console.log("Data Imported!!!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Category.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!!!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
