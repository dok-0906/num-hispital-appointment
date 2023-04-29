const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    ServiceName: {
        type: String,
        require: [true, "Эмчилгээний нэрийг оруулна уу!!!"],
        
    },
    ServiceTime: {
        type: Number,
        require: [true, "Эмчийн нэрийг оруулна уу!!!"],
    }
});

module.exports = mongoose.model("Service", ServiceSchema);