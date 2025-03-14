const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("❌ MONGO_URI is not defined. Check your .env file.");
        }
        console.log("🔗 Connecting to:", process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI); // ✅ Removed deprecated options

        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
