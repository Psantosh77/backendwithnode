const mongoose = require('mongoose');
 
 const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
      });
      console.log(`Database is connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports = connectDB;
