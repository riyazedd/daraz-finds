import Category from '../models/categoryModel.js'

const getCategory = async (req, res) => {
	const category = await Category.find({});
	res.json(category);
};

const getCategoryById = async (req, res) => {
	const category = await Category.findById(req.params.id);

	if (category) {
		return res.json(category);
	}
	res.status(404).json({ message: "Category not found" });
};

export { getCategory, getCategoryById };