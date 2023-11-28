const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        p_name:{
            type: String,
            required: true,
        },
        p_rate:{
            type: Number,
            required: true,
        },
        p_brand:{
            type: String,
            required: false,
        },
        p_des:{
            type: String,
            required: true,
        },
        p_qty:{
            type: Number,
            required: false,
        },
         c_name:{
            type: String,
            required: true,
        },
        c_number:{
            type: Number,
            required: true,
        },
        e_mail:{
            type: String,
            required: true,
        },
        G_img:{
            type: Array,
            required: true,
        },
        C_img:{
            type: Array,
            required: true,
        }
});


module.exports = mongoose.model("Product",productSchema);