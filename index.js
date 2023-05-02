const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Chef receipe is running')
});

app.listen(port, () => {
    console.log(`Chef recipe API is running on port: ${port}`)
})