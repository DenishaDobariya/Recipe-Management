const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); 
    });
};

module.exports = connectDb;
