const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: [true, "Эмчийн овогыг оруулна уу!!!"],
        
    },
    LastName: {
        type: String,
        require: [true, "Эмчийн нэрийг оруулна уу!!!"],
    },
    PhoneNumber: {
        type: Number,
        require: [true, "Эмчийн дугаарыг оруулна уу!!!"],
    },
    email: {
        type: String,
        require: [true, "Эмчийн имэйлийг оруулна уу!!!"],
    },
});

module.exports = mongoose.model("Doctor", DoctorSchema);