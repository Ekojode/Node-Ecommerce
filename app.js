const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const pathUtil = require('./utilities/path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRouter);
app.use(shopRouter);
app.use((req, res) => {
    res.sendFile(path.join(pathUtil, 'views', 'page404.html'));
})

app.listen(port);