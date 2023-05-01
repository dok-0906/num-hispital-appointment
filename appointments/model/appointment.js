const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    Avappointment_id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: [true, "Захиалах боломжтой цагийн id-ийг оруулна уу!!!"],
        unique: true
        
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: [true, "Хэрэглэгчийн id-ийг оруулна уу!!!"],
        
    },
    app_date: {
        type: Date,
        
    },
    ServiceName: {
        type: String,
        
    },
    state: {
        type: String,
        required: [true, ' Төлөвийг оруулна уу'],
        enum: ['draft', 'success', 'cancelled'],
        default: 'draft'
    },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);