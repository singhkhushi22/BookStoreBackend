// mongodb+srv://khushi22:khushi22@cluster0.hfoumzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://khushi22:<password>@cluster0.hfoumzn.mongodb.net/


const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://khushi22:khushi22@cluster0.hfoumzn.mongodb.net/BookStore?retryWrites=true&w=majority&appName=Cluster0'; 

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectToDB;