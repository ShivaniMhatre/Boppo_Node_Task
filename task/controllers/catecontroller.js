import category from "../models/category.js";
import product from "../models/product.js";

export const AddCategory = (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !description)
            return res.json({
                success: false,
                message: "All Fields Are required"
            })

        const cate = new category({
            name,
            description
        })
        cate.save()
        return res.json({
            success: true,
            message: "Category Added Successfully"
        })
    }
    catch (err) {
        return res.json
            ({
                success: false,
                message: err.message
            })
    }
}

export const GetCate = async (req, res) => {
    try {
        const allCate = await category.find({})
        if (allCate.length > 0) {
            return res.json({
                success: true,
                message: "All Fetch",
                allCate: allCate
            })
        }
        else {
            return res.json({
                success: false,
                message: "No Data Found"
            })
        }

    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}