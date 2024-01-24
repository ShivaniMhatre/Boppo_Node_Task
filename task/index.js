import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { AddCategory, GetCate } from './controllers/catecontroller.js'
import { Addproduct, DeleteProduct, GetProduct, UpdateProduct } from './controllers/productcontroller.js'

const app = express()

app.use(express.json())
dotenv.config()

app.listen(4004, () => {
    console.log('Server Running On Port 4004')
})


app.post('/addcate',AddCategory)
app.get('/getcate',GetCate)


app.post('/addproduct',Addproduct)
app.get('/getproduct/',GetProduct)
app.patch('/updateproduct',UpdateProduct)
app.delete('/deleteproduct',DeleteProduct)
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connect with DB")
    })
    .catch((err) => {
        console.log(err)
    })
