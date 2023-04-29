const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Хэрэглэгчийн нэрийг оруулна уу']
    },
    email: {
        type: String,
        required: [true, 'Хэрэглэгчийн имэйл хаягийг оруулна уу'],
        unique: [true, 'Имэйл бүртгэлтэй байна'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Имэйлхаяг буруу байна."],
    },
    reg_number: {
        type: String,
        required: [true, 'Хэрэглэгчийн рд-г оруулна уу']
    },
    Phone_Number: {
        type: Number,
        required: [true, 'Хэрэглэгчийн утасны дугаарыг оруулна уу']
    },
    role: {
        type: String,
        required: [true, 'Хэрэглэгчийн эрхийг оруулна уу'],
        enum: ['user', 'nurse'],
        default: 'user'
    },
    password: {
        type: String,
        minlength: 4,
        required: [true, 'Нууц үгээ оруулна уу'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
});

UserSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getJWT = function () {
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
    });
    return token;
}

UserSchema.methods.checkPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
// , role: this.role

module.exports = mongoose.model("User", UserSchema);