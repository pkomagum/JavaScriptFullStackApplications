const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to My Javascript Application!')
});

const port = process.env.PORT  || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));