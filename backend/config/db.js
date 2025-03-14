const mongoose = require("mongoose");

const mongoURI = mongodb+srv://thisisriteshraj:%3Cdb_foMrkABCd6Xxr8y1%3E@cluster0.xdal3.mongodb.net/


// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Atlas Connected Successfully ✅");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌", error);
        process.exit(1);
    }
};

module.exports = connectDB;
