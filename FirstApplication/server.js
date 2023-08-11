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


// Define the userSchema before creating the User model
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const user = new User({
    username: 'Jack',
    password: '12345'
});

// Use async/await to handle the result of the save operation
async function saveUser() {
    try {
        await user.save();
        console.log('New User has been saved to the database successfully');
    } catch (error) {
        console.error('Error saving user to the database:', error.message);
    }
}

// Call the async function to save the user
saveUser();

////////////////////////////////////////////////////////////

app.get('/', (req,res) => {
    res.send('Welcome to My Javascript Application!')
});

const port = process.env.PORT  || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

////////////////////////////////////////////////////////////


