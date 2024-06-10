const express = require ("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



const PORT = 3000;
app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}...`)
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})  