const express = require("express");
const router = express.Router();
const Product = require("../models/products")

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(req.query)
        res.json(products)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id)
        res.json(products)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    const products = new Product({
        p_name: req.body.p_name,
        p_rate: req.body.p_rate,
        p_brand: req.body.p_brand,
        p_des: req.body.p_des,
        p_qty: req.body.p_qty,
        c_name: req.body.c_name,
        c_number: req.body.c_number,
        e_mail: req.body.e_mail,
        G_img: req.body.G_img,
        C_img: req.body.C_img
    })
    try {
        const p1 = await products.save()
        res.json(p1)
    } catch (error) {
        res.send('error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id)
        products.p_name = req.body.p_name,
        products.p_rate = req.body.p_rate,
        products.p_brand = req.body.p_brand,
        products.p_des = req.body.p_des,
        products.p_qty = req.body.p_qty,
        products.c_name= req.body.c_name,
        products.c_number= req.body.c_number,
        products.e_mail= req.body.e_mail,
        products.G_img= req.body.G_img,
        products.C_img= req.body.C_img
        const p1 = await products.save()
        res.json(p1)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id)
        const p1 = await products.remove()
        res.json(p1)
    } catch (error) {
        res.send(error)
    }
})



module.exports = router;