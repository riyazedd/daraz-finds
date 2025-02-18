import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import products from "./data/product.js";
import users from "./data/user.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Category from "./models/categoryModel.js";
import categories from "./data/category.js";

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
