const mongoose = require("mongoose");
const connectDB = async (req, res, err) => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB холбоглоо: ${conn.connection.host}`); 
    } catch (error) {
        console.log(`aldaa garlaa: ${err}`);
        ServiceWorkerRegistration.close(()=>{
            process.exit(1);
        })
    }
   
};
module.exports = connectDB;