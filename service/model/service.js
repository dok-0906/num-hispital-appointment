const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    ServiceName: {
        type: String,
        require: [true, "Үйлчилгээний нэрийг оруулна уу!!!"],
        
    },
    ServiceTime: {
        type: Number,
        require: [true, "Үйлчилгээний цагыг оруулна уу!!!"],
    },
    ServiceType: {
        type: String,
        required: [true, 'Үйлчилгээний төрөлийг оруулна уу'],
        enum: ['Тарилга', 'Боолт', 'Физик эмчилгээ'],
    }
});

module.exports = mongoose.model("Service", ServiceSchema);