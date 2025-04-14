const express = require('express');

const app = express();
const port = 500;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is Tnc','Welcome to the Backend');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});