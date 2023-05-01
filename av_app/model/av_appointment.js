const mongoose = require("mongoose");

const AvAppointmentSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: [true, "Эмчилгээний id-ийг оруулна уу!!!"],
        
    },
    app_date: {
        type: Date,
        require: [true, "Өдрийг оруулна уу!!!"],
    },
    ServiceName: {
        type: String,
        
    },
    is_app: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("AvAppointment", AvAppointmentSchema);