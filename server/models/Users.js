const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, trim: true
    },
    password: {
        type: String, required: true, minlength: 10},
        role: {
            type: String, default: "user", enum: ["user", "admin"]
    },
});

module.exports = mongoose.model("User", userschema);