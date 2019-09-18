const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/todos', (req, res) => {
    res.json(req.body)
})



const PORT = process.env.PORT || 8000;
app.listen(PORT,
    () => console.log(`Server is running on port - ${PORT}`)
);
