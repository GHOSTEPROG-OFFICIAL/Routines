const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { setStatics } = require('./utils/statics');

const app = express();

app.use(bodyParser.urlencoded({extends : false}))


// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'node-module', 'boostrap-v4-rtl', 'dist')))
// app.use(express.static(path.join(__dirname, 'node-module', 'fooont-awesome')))

setStatics()


app.get('/', (req, res) => {
    res.render('index', {pageTitle: "کارهای روزمره"})
})

app.set('views engine', 'ejs')
app.set('views', 'views')


app.listen(3000 , () => console.log('server is running'))