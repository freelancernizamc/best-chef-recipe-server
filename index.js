const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef receipe is running')
});

app.get('/chefs', (req, res) => {
    console.log(chefs);
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(c => c.id == id);
    if (chef) {
        res.send(chef);
    } else {
        res.status(404).send({ error: 'Chef not found' });
    }
});



app.listen(port, () => {
    console.log(`Chef recipe API is running on port: ${port}`)
})
