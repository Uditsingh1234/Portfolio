const mongoose = require('mongoose');

// Ensure .env file is loaded before this file is executed
if (!process.env.MONGO_URL) {
    console.error('MONGO_URL is not defined in environment variables');
    process.exit(1); // Exit the process with error
}

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB connection error');
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = connection;
