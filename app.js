const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, "assets")))

app.set('view engine', 'ejs')
app.set('views', 'views')


app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(3000, (err) => {
    if (err) console.log("server errror  : ", err);

    console.log("server running on port 3000...")
})