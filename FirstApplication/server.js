////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

////////////////////////////////////////////////////////////

const mongoose = require('mongoose');

// Replace 'your_mongodb_uri' with your actual MongoDB Atlas connection URI
const password = 'GREATACUMEN008?'; // Your MongoDB Atlas password
const encodedPassword = encodeURIComponent(password); // Encode the password

const mongoURI = `mongodb+srv://peterkomagum123:${encodedPassword}@cluster0.rnvfinb.mongodb.net/your_database_name?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

connect();


////////////////////////////////////////////////////////////

const userSchema = new mongoose.schema ({
    username: String,
    password: String
});
const User = mongoose.model('User', userSchema);

////////////////////////////////////////////////////////////

app.get('/', (req,res) => {
    res.send('Welcome to My Javascript Application!')
});

const port = process.env.PORT  || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

////////////////////////////////////////////////////////////


