import category from "../models/category.js";
import product from "../models/product.js";

export const Addproduct = async (req, res) => {
    try {
        const { title, description, price, cateId, slug } = req.body;

        if (!title || !description || !price)
            return res.json({
                success: false,
                message: "All Fields Are required"
            })

        const cate = await category.findById(cateId)
        // console.log(cate._id)
        const prod = new product({
            title,
            description,
            price: parseInt(price),
            cateId,
            category: cate.name,
            slug
        })
        prod.save()
        return res.json({
            success: true,
            message: "Product Added Successfully"
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

export const GetProduct = async (req, res) => {
    try {
        const allProduct = await product.find({})
        if (allProduct.length > 0) {
            return res.json({
                success: true,
                message: "All Fetch",
                allProduct: allProduct
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

export const GetProductByParams = async (req, res) => {
    try {
        const { prodId } = req.params;
        const Product = await product.findById(prodId)
        if (Product) {
            return res.json({
                success: true,
                message: "All Fetch",
                Product: Product
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

export const UpdateProduct = async (req, res) => {
    try {
        const { prodId, title, description, price } = req.body;
        const findProduct = await product.findById(prodId)


        if (!findProduct)
            return res.json({ success: false, message: "Product Not Found" })
            const updateProduct = await product.findByIdAndUpdate(
            { _id: findProduct._id },
            { title, description, price },
            { new: true }
        )
        return res.json({
            success: true,
            message: "update....",
            updateProduct: updateProduct
        })
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

export const UpdateProductByParams = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const{prodId}=req.params
        const findProduct = await product.findById(prodId)


        if (!findProduct)
            return res.json({ success: false, message: "Product Not Found" })
            const updateProduct = await product.findByIdAndUpdate(
            { _id: findProduct._id },
            { title, description, price },
            { new: true }
        )
        return res.json({
            success: true,
            message: "update....",
            updateProduct: updateProduct
        })
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const { prodId } = req.body;
        const findProduct = await product.findById(prodId)


        if (!findProduct)
            return res.json({ success: false, message: "Product Not Found" })
        const deleteProduct = await product.findByIdAndDelete(
            { _id: findProduct._id },

        )
        return res.json({
            success: true,
            message: "Delete....",
            deleteProduct: deleteProduct
        })
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

export const DeleteByParams = async (req, res) => {
    try {
        const { prodId } = req.params;
        const findProduct = await product.findById(prodId)


        if (!findProduct)
            return res.json({ success: false, message: "Product Not Found" })
        const deleteProduct = await product.findByIdAndDelete(
            { _id: findProduct._id },

        )
        return res.json({
            success: true,
            message: "Delete....",
            deleteProduct: deleteProduct
        })
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

